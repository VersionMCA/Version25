import { prisma } from "@/db/index.mjs";

//check if user is registered for an event
export async function POST(req) {
  try {
    const { userId, eventId } = await req.json();
    const data = await prisma.registration.findFirst({
      where: { userId: userId, eventId: eventId },
    });
    if (data) {
      return new Response(JSON.stringify({ message: "YES" }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ message: "NO" }), {
        status: 200,
      });
    }
  } catch (error) {
    console.error("Error fetching event registeration status", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
