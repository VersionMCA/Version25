import { prisma } from "@/db/index.mjs";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(req) {
  const { eventId } = await req.json();

  //   User Validation
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new Response(
      JSON.stringify({ message: "Login to unregister for events" }),
      {
        status: 401,
      },
    );
  }

  // Validate if eventId exists
  if (!eventId) {
    return new Response(JSON.stringify({ message: "Event ID is required" }), {
      status: 400,
    });
  }

  try {
    // Event validation
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return new Response(JSON.stringify({ message: "Event not found" }), {
        status: 404,
      });
    }

    // Check event type
    if (event.type == "TEAM") {
      return new Response(
        JSON.stringify({ message: "Cannot unregister for team events" }),
        {
          status: 404,
        },
      );
    }

    // User Validation
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Unregister user from the event
    const response = await prisma.registration.deleteMany({
      where: { userId: user.id, eventId: event.id },
    });

    // Handle case where the user wasn't registered for the event
    if (response.count === 0) {
      return new Response(
        JSON.stringify({ message: "You are not registered for this event" }),
        { status: 400 },
      );
    }

    return new Response(
      JSON.stringify({ message: "Unregistered Successfully" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("here");
    console.error("Error unregistering for event:", error); // Log the error for debugging
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
