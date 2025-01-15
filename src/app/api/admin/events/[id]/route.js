import { prisma } from "@/db/index.mjs";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = await params;
  try {
    const body = await request.json();
    const eventDate = body.date ? new Date(body.date) : null;
    const eventStartTime = eventDate ? new Date(body.date) : null;
    const eventEndTime = eventDate ? new Date(body.date) : null;
    if (body.date) {
      if (body.startTime) {
        eventStartTime.setHours(body.startTime.split(":")[0]);
        eventStartTime.setMinutes(body.startTime.split(":")[1]);
      }
      if (body.endTime) {
        eventEndTime.setHours(body.endTime.split(":")[0]);
        eventEndTime.setMinutes(body.endTime.split(":")[1]);
      }
    }

    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
        description: body.description,
        date: body.date ? new Date(body.date) : null,
        startTime: body.date && body.startTime ? eventStartTime : null,
        endTime: body.date && body.endTime ? eventEndTime : null,
        venue: body.venue,
        type: body.type,
        minTeamSize: body.minTeamSize,
        maxTeamSize: body.maxTeamSize,
        image: body.image,
        eventDetails: {
          deleteMany: {}, // Delete existing details
          create: body.eventDetails.map((detail) => ({
            title: detail.title,
            content: detail.content,
          })),
        },
      },
    });

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (error) {
    console.log("Error updating event:", error.stack);
    return NextResponse.json(
      { error: "Error updating event" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    await prisma.event.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Event deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log("Error deleting event:", error.stack);
    return NextResponse.json(
      { error: "Error deleting event" },
      { status: 500 },
    );
  }
}
