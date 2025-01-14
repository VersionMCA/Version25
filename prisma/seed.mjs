import { prisma } from "../src/db/index.mjs";
async function main() {
  // Create some events
  const individualEvent = await prisma.event.create({
    data: {
      name: "Solo Coding Challenge",
      description:
        "A coding competition where individuals can participate and showcase their skills.",
      date: new Date("2025-02-15"),
      startTime: new Date("2025-02-15T09:00:00"),
      endTime: new Date("2025-02-15T12:00:00"),
      venue: "Conference Hall A",
      type: "INDIVIDUAL", // Individual event
      minTeamSize: 1,
      maxTeamSize: 1,
      image: "https://example.com/solo-event-image.jpg",
    },
  });

  const teamEvent = await prisma.event.create({
    data: {
      name: "Hackathon 2025",
      description:
        "A team-based hackathon where developers, designers, and creators come together to build amazing projects.",
      date: new Date("2025-03-20"),
      startTime: new Date("2025-03-20T10:00:00"),
      endTime: new Date("2025-03-20T18:00:00"),
      venue: "Tech Park",
      type: "TEAM", // Team-based event
      minTeamSize: 2,
      maxTeamSize: 5,
      image: "https://example.com/hackathon-event-image.jpg",
    },
  });

  // Create event details for the events
  await prisma.eventDetail.create({
    data: {
      title: "Event Rules",
      content:
        "Read the event rules and guidelines carefully before participating.",
      eventId: individualEvent.id,
    },
  });

  await prisma.eventDetail.create({
    data: {
      title: "Judging Criteria",
      content:
        "The judging will be based on creativity, functionality, and presentation.",
      eventId: teamEvent.id,
    },
  });

  console.log("Seeding completed successfully.");
}

main().catch((error) => {
  console.error("An unexpected error occurred during seeding:", error);
  process.exit(1);
});
