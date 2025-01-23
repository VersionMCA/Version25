import { prisma } from "@/db/index.mjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      include: {
        eventDetails: true, // Include related event details
      },
    });

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Error fetching events" },
      { status: 500 },
    );
  }
}
