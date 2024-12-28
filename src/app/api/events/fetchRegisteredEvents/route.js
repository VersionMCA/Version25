import { getServerSession } from "next-auth";
import { prisma } from "@/db/index.mjs";
import { authOptions } from "@/lib/auth.js";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    // console.log(session);
    if (!session || !session.user) {
      return new Response(
        JSON.stringify({ error: "Login to register the events" }),
        { status: 401 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const registeredEvents = await prisma.registration.findMany({
      where: { userId: user.id },
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
