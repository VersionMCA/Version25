import { prisma } from "@/db/index.mjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await req.json();

    // Check user in db
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Fetch the name of events registered by the user
    const registeredEventIds = await prisma.registration.findMany({
      where: {
        userId: userId,
      },
      select: {
        event: {
          select: {
            name: true,
          },
        },
      },
    });

    // Extract event names from the results
    const myEvents = await prisma.event.findMany({
      where: {
        name: {
          in: registeredEventIds.map((x) => x?.event?.name), // Matches any name in the array
        },
      },
    });

    return new NextResponse(JSON.stringify(myEvents || []), {
      status: 200,
    });
  } catch (err) {
    console.log("Fetch events error", err);

    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      {
        status: 500,
      },
    );
  }
}
