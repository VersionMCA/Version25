import { prisma } from "@/db/index.mjs";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = await params;
  try {
    const body = await request.json();

    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
        description: body.description,
        date: body.date ? new Date(body.date) : null,
        startTime: body.startTime ? new Date(body.startTime) : null,
        endTime: body.endTime ? new Date(body.endTime) : null,
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
    console.error("Error updating event:", error);
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
