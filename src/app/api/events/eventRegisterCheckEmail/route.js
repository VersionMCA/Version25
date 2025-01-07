import { prisma } from "@/db/index.mjs";
//check if user is registered for an event
export async function POST(req) {
  try {
    const { email, eventId } = await req.json();
    //check user from db
    const user = await prisma.user.findFirst({ where: { email: email } });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found with given email" }),
        {
          status: 400,
        },
      );
    }
    //check event from db
    const event = await prisma.event.findFirst({ where: { id: eventId } });
    if (!event) {
      return new Response(JSON.stringify({ error: "Event not found" }), {
        status: 400,
      });
    }

    //check if user is registered for an event
    const data = await prisma.registration.findFirst({
      where: { userId: user.id, eventId: eventId },
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
