import { prisma } from "@/db/index.mjs";

export async function POST(req) {
  try {
    const { userId } = await req.json();

    // Check user in db
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Fetch the name of events registered by the user
    const registeredEventIds = await prisma.registration.findMany({
      where: {
        userId: userId,
      },
      select: {
        event: {
          select: {
            eventName: true,
          },
        },
      },
    });

    // Extract event names from the results
    const registeredEvents = registeredEventIds.map(
      (registration) => registration.event.eventName,
    );
    return new Response(JSON.stringify(registeredEvents), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
