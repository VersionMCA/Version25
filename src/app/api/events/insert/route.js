import { prisma } from "@/db/index.mjs";

export async function POST(req) {
  try {
    const { eventName, description, type } = await req.json();

    const existingEvent = await prisma.event.findUnique({
      where: { eventName: eventName },
    });

    if (existingEvent) {
      return new Response(JSON.stringify({ error: "Event already exists" }), {
        status: 400,
      });
    }

    const newEvent = await prisma.event.create({
      data: {
        eventName: eventName,
        description: description,
        type: type,
      },
    });
    return new Response(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
