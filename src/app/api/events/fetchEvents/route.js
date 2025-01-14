import { prisma } from "@/db/index.mjs";

export async function GET() {
  try {
    const eventList = await prisma.event.findMany();
    console.log(eventList);
    return new Response(JSON.stringify(eventList), { status: 200 });
  } catch (error) {
    console.log("e", error.message);
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
