import { prisma } from "@/db/index.mjs";

export async function GET() {
  try {
    const eventList = await prisma.event.findMany();
    return new Response(JSON.stringify(eventList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
