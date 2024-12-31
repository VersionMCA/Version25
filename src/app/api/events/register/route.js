import { prisma } from "@/db/index.mjs";

export async function POST(req) {
  try {
    console.log("Request received for registration");

    const { userId, eventId, teamName, participants } = await req.json();
    console.log(userId, eventId, teamName, participants);
    // user validation
    if (!userId) {
      return new Response(
        JSON.stringify("Login to register the events", { status: 401 }),
      );
    }

    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    // event validation
    if (!event) {
      console.log("Event not found");
      return new Response(JSON.stringify({ message: "Event not found" }), {
        status: 404,
      });
    }

    if (event.type === "team") {
      const members = [];
      // check if all participants are valid(registered)
      for (const gmail of participants) {
        const participant = await prisma.user.findFirst({
          where: { email: gmail },
        });

        if (!participant) {
          return new Response(
            JSON.stringify(`${gmail} not registered!`, { status: 404 }),
          );
        }

        // check if participant is already registered in the event
        const checkRegistration = await prisma.registration.findFirst({
          where: { userId: participant.id, eventId: event.id },
        });

        if (checkRegistration) {
          return new Response(
            JSON.stringify(`${gmail} is already registered!`, { status: 400 }),
          );
        }
        members.push(participant.id);
      }

      members.push(userId);

      // create Team in the database
      const team = await prisma.team.create({
        data: {
          teamName: teamName,
          leaderId: userId,
          eventId: eventId,
        },
      });
      console.log(team);

      // create team members data
      const membersData = members.map((member) => {
        return {
          userId: member,
          teamId: team.id,
          eventId: eventId,
        };
      });

      // do team registration
      const teamRegistration = await prisma.registration.createMany({
        data: membersData,
        skipDuplicates: true,
      });
      console.log(teamRegistration);
      return new Response(
        JSON.stringify(teamRegistration, {
          status: 201,
          message: "Team Successfully registered",
        }),
      );
    } else {
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

      const individualRegistration = await prisma.registration.create({
        data: {
          userId: userId,
          eventId: eventId,
        },
      });
      console.log(individualRegistration);
      return new Response(
        JSON.stringify(individualRegistration, {
          status: 201,
          message: "Successfully registered",
        }),
      );
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
