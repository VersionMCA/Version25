import { prisma } from "@/db/index.mjs";

export async function GET(req) {
  try {
    const userId = req.headers.get("userId");
    console.log(userId);
    if (!userId) {
      return new Response(
        JSON.stringify({ error: "Login to register the events" }),
        { status: 401 },
      );
    }

    const registeredEvents = await prisma.registration.findMany({
      where: { userId: userId },
      select: { eventId: true },
    });

    return new Response(JSON.stringify(registeredEvents), { status: 200 });
  } catch (error) {
    console.error("Error fetching registered events:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
