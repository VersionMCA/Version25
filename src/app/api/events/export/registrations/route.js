import { google } from "googleapis";
import { prisma } from "@/db/index.mjs";

export async function POST(req) {
    try {
        const { eventId } = await req.json();

        if (!eventId) {
            return new Response(
                JSON.stringify({ message: "Event ID is required" }),
                { status: 400 }
            );
        }

        const event = await prisma.event.findUnique({
            where: { id: parseInt(eventId) },
        });

        if (!event) {
            return new Response(
                JSON.stringify({ message: "Event not found" }),
                { status: 404 }
            );
        }

        const credentials = JSON.parse(
            Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, "base64").toString("utf8")
        );

        const auth = await new google.auth.GoogleAuth({
            credentials,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/drive",
            ],
        });

        const sheets = google.sheets({ version: "v4", auth });
        const drive = google.drive({ version: "v3", auth });

        const createResponse = await sheets.spreadsheets.create({
            resource: {
                properties: {
                    title: `Version25-${event.name}`, // Spreadsheet name based on event name
                },
            },
        });

        const spreadsheetId = createResponse.data.spreadsheetId;

        const userEmail = "chhipanikhil9@gmail.com";
        await drive.permissions.create({
            fileId: spreadsheetId,
            requestBody: {
                role: "writer",
                type: "user",
                emailAddress: userEmail,
            },
        });

        if (event.type === "TEAM") {
            const teams = await prisma.team.findMany({
                where: { eventId: parseInt(eventId) },
                include: {
                    leader: true, // Include leader details
                    registrations: {
                        include: {
                            user: true, // Include user details for team members
                        },
                    },
                },
            });

            for (const team of teams) {
                const teamMembers = team.registrations.map((registration) => [
                    registration.user.id,
                    registration.user.name,
                    registration.user.email,
                    registration.user.collegeName,
                    registration.user.collegeRollNumber,
                    registration.user.phoneNumber,
                ]);

                const leaderDetails = [
                    team.leader.id,
                    team.leader.name,
                    team.leader.email,
                    team.leader.collegeName,
                    team.leader.collegeRollNumber,
                    team.leader.phoneNumber,
                ];

                // Create a sheet for the team
                await sheets.spreadsheets.batchUpdate({
                    spreadsheetId,
                    resource: {
                        requests: [
                            {
                                addSheet: {
                                    properties: {
                                        title: team.teamName, // Sheet name based on team name
                                    },
                                },
                            },
                        ],
                    },
                });

                // Add data to the team sheet
                await sheets.spreadsheets.values.batchUpdate({
                    spreadsheetId,
                    resource: {
                        data: [
                            {
                                range: team.teamName,
                                values: [
                                    ["ID", "Name", "Email", "College Name", "College Roll Number", "Phone Number"],
                                    ["Team Leader", "", "", "", "", ""], // Label for the team leader
                                    leaderDetails, // Leader's details
                                    ["Team Members", "", "", "", "", ""], // Label for the team members
                                    ...teamMembers, // Team member details
                                ],
                            },
                        ],
                        valueInputOption: "RAW",
                    },
                });
            }
        } else if (event.type === "INDIVIDUAL") {
            const registrations = await prisma.registration.findMany({
                where: { eventId: parseInt(eventId) },
                include: {
                    user: true,
                },
            });

            const userRows = registrations.map((registration) => [
                registration.user.id,
                registration.user.name,
                registration.user.email,
                registration.user.collegeName,
                registration.user.collegeRollNumber,
                registration.user.phoneNumber,
            ]);

            await sheets.spreadsheets.batchUpdate({
                spreadsheetId,
                resource: {
                    requests: [
                        {
                            addSheet: {
                                properties: {
                                    title: "Users",
                                },
                            },
                        },
                    ],
                },
            });

            await sheets.spreadsheets.values.batchUpdate({
                spreadsheetId,
                resource: {
                    data: [
                        {
                            range: "Users!A1",
                            values: [
                                ["ID", "Name", "Email", "College Name", "College Roll Number", "Phone Number"],
                                ...userRows,
                            ],
                        },
                    ],
                    valueInputOption: "RAW",
                },
            });
        }

        return new Response(
            JSON.stringify({
                message: "Data successfully exported to Google Sheets!",
                spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error exporting to Google Sheets:", error);
        return new Response(
            JSON.stringify({ message: "Internal server error", error: error.message }),
            { status: 500 }
        );
    }
}
