import { prisma } from "@/db/index.mjs";

export async function POST(req) {
  const { teamName, eventId } = await req.json();
  try {
    const team = await prisma.team.findFirst({
      where: {
        teamName: teamName,
        eventId: eventId,
      },
    });
    if (team)
      return new Response(JSON.stringify({ available: false }), {
        status: 200,
      });
    else
      return new Response(JSON.stringify({ available: true }), { status: 200 });
  } catch (error) {
    console.log("Error during team name availiability check", error.stack);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
