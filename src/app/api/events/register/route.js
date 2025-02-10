import { prisma } from "@/db/index.mjs";

export async function POST(req) {
  try {
    const { userId, eventId, teamName, teamMembers } = await req.json();

    // User validation
    if (!userId) {
      return new Response(JSON.stringify("Login to register the events"), {
        status: 401,
      });
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return new Response(JSON.stringify("User not found"), {
        status: 404,
      });
    }

    // Event validation
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    // Check is registration open
    if (event.status !== "REGISTRATION_STARTED") {
      return new Response(
        JSON.stringify("Registration for this event is not open"),
        { status: 400 },
      );
    }

    if (event.status !== "REGISTRATION_STARTED") {
      return new Response(
        JSON.stringify("Registration for this event not yet started"),
      );
    }

    if (!event) {
      return new Response(JSON.stringify({ message: "Event not found" }), {
        status: 404,
      });
    }

    // Check if user is already registered for the event
    const checkRegistration = await prisma.registration.findFirst({
      where: { userId: userId, eventId: event.id },
    });
    if (checkRegistration) {
      return new Response(
        JSON.stringify({
          message: "You are already registered for this event!",
        }),
        { status: 400 },
      );
    }

    // Individual event registration
    if (event.type === "INDIVIDUAL") {
      const individualRegistration = await prisma.registration.create({
        data: {
          userId: userId,
          eventId: eventId,
        },
      });
      if (!individualRegistration) {
        return new Response(
          JSON.stringify({ message: "Failed to register for the event" }),
          { status: 500 },
        );
      }
      return new Response(
        JSON.stringify({ message: "Registered successfully" }),
        { status: 201 },
      );
    }

    // Team event registration
    if (event.type === "TEAM") {
      if (!teamName || !teamMembers || !Array.isArray(teamMembers)) {
        return new Response(JSON.stringify({ message: "Invalid team data" }), {
          status: 400,
        });
      }

      const members = [];
      // Check if all teamMembers are valid (registered)
      for (const email of teamMembers) {
        const member = await prisma.user.findFirst({
          where: { email: email },
        });
        if (!member) {
          return new Response(JSON.stringify(`${email} not registered!`), {
            status: 404,
          });
        }

        // Check if participant is already registered in the event
        const checkRegistration = await prisma.registration.findFirst({
          where: { userId: member.id, eventId: event.id },
        });
        if (checkRegistration) {
          return new Response(
            JSON.stringify(`${email} is already registered for this event`),
            { status: 400 },
          );
        }

        members.push(member.id);
      }
      members.push(userId); // Add leader to the team

      // Create Team in the database
      const team = await prisma.team.create({
        data: {
          teamName: teamName,
          leaderId: userId,
          eventId: eventId,
        },
      });

      // Create team members data
      const membersData = members.map((member) => {
        return {
          userId: member,
          teamId: team.id,
          eventId: eventId,
        };
      });

      // Register team members
      const teamRegistration = await prisma.registration.createMany({
        data: membersData,
        skipDuplicates: true,
      });

      return new Response(
        JSON.stringify({
          message: "Team Successfully registered",
          data: teamRegistration,
        }),
        { status: 201 },
      );
    }
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
