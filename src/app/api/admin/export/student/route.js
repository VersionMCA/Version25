import { google } from "googleapis";
import { prisma } from "@/db/index.mjs";

export async function POST(req) {
    try {

        const credentials = JSON.parse(
            Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, "base64").toString("utf8")
        );

        // Authenticate with Google Sheets API
        const auth = await new google.auth.GoogleAuth({
            credentials,
            scopes: ["https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/drive"]
        });

        const sheets = google.sheets({ version: "v4", auth });
        const drive = google.drive({ version: "v3", auth });

        // Create a new spreadsheet Version25
        const createResponse = await sheets.spreadsheets.create({
            resource: {
                properties: {
                    title: "Version25",
                },
            },
        });


        const spreadsheetId = createResponse.data.spreadsheetId;
        // console.log("Spreadsheet created:", spreadsheetId);

        // Create a new sheet Students in Version25 spreadsheet
        const addSheetResponse = await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            resource: {
                requests: [
                    {
                        addSheet: {
                            properties: {
                                title: "Students", // Explicitly add a sheet named "Students"
                            },
                        },
                    },
                ],
            },
        });


        // grant the permission to the admin by the service account
        const userEmail = process.env.GOOGLE_USER
        await drive.permissions.create({
            fileId: spreadsheetId,
            requestBody: {
                role: "writer", // You can set "reader" for read-only access
                type: "user",
                emailAddress: userEmail,
            },
        });


        const students = await prisma.user.findMany();

        // student data to be added to the sheet
        const studentRows = students.map((student) => [
            student.id,
            student.name,
            student.email,
            student.collegeName,
            student.collegeRollNumber,
            student.phoneNumber,

        ]);

        // Add values to the Students sheet
        const res = await sheets.spreadsheets.values.batchUpdate({
            spreadsheetId,
            resource: {
                data: [
                    {
                        range: "Students", // Add students data to a new sheet called "Students"
                        values: [["ID", "Name", "Email", "collegeName", "collegeRollNumber", "phoneNumber"], ...studentRows],
                    },
                ],
                valueInputOption: "RAW",
            },
        });
        // console.log("Response created:", res);  
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

