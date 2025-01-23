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
      type: "INDIVIDUAL",
      minTeamSize: 1,
      maxTeamSize: 1,
      image:
        "https://res.cloudinary.com/dpe22xmml/image/upload/v1736941321/jgsigccq18dyu8rlevpe.jpg",
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
      type: "TEAM",
      minTeamSize: 2,
      maxTeamSize: 5,
      image:
        "https://res.cloudinary.com/dpe22xmml/image/upload/v1736941321/iieoll5cmy8if1hluklp.jpg",
    },
  });

  const workshopEvent = await prisma.event.create({
    data: {
      name: "AI Workshop",
      description:
        "An interactive workshop on Artificial Intelligence and its applications in real-world scenarios.",
      date: new Date("2025-02-20"),
      startTime: new Date("2025-02-20T10:00:00"),
      endTime: new Date("2025-02-20T13:00:00"),
      venue: "Auditorium B",
      type: "INDIVIDUAL",
      minTeamSize: 1,
      maxTeamSize: 1,
      image:
        "https://res.cloudinary.com/dpe22xmml/image/upload/v1736941321/hebo9fht6yhtdzvmxvmw.jpg",
    },
  });

  const quizEvent = await prisma.event.create({
    data: {
      name: "Tech Quiz 2025",
      description:
        "A fun and competitive quiz event to test your technical knowledge.",
      date: new Date("2025-02-25"),
      startTime: new Date("2025-02-25T14:00:00"),
      endTime: new Date("2025-02-25T16:00:00"),
      venue: "Room 301",
      type: "TEAM",
      minTeamSize: 1,
      maxTeamSize: 3,
      image:
        "https://res.cloudinary.com/dpe22xmml/image/upload/v1736942341/egbtrnve6quk5rqf0z8o.jpg",
    },
  });

  // Add event details for all events
  const eventDetails = [
    {
      eventId: individualEvent.id,
      details: [
        {
          title: "Event Rules",
          content: "Follow coding standards and no plagiarism.",
        },
        {
          title: "Judging Criteria",
          content:
            "Evaluation based on correctness, efficiency, and clarity of code.",
        },
        {
          title: "Contact",
          content: "John Doe: +91-9876543210, email@example.com",
        },
      ],
    },
    {
      eventId: teamEvent.id,
      details: [
        {
          title: "Event Rules",
          content:
            "Max 5 members per team. Use of open-source libraries is allowed.",
        },
        {
          title: "Judging Criteria",
          content: "Creativity, functionality, and teamwork.",
        },
        {
          title: "Contact",
          content: "Jane Smith: +91-9876543211, hackathon@example.com",
        },
      ],
    },
    {
      eventId: workshopEvent.id,
      details: [
        {
          title: "Event Rules",
          content: "Bring your laptop and have Python installed.",
        },
        {
          title: "Agenda",
          content: "AI basics, practical demos, and Q&A session.",
        },
        {
          title: "Contact",
          content: "Alice Brown: +91-9876543212, workshop@example.com",
        },
      ],
    },
    {
      eventId: quizEvent.id,
      details: [
        {
          title: "Event Rules",
          content:
            "No internet use during the quiz. Decisions of the quizmaster are final.",
        },
        {
          title: "Quiz Topics",
          content: "Programming, algorithms, and tech trends.",
        },
        {
          title: "Contact",
          content: "Bob Green: +91-9876543213, quiz@example.com",
        },
      ],
    },
  ];

  for (const { eventId, details } of eventDetails) {
    for (const detail of details) {
      await prisma.eventDetail.create({
        data: {
          ...detail,
          eventId,
        },
      });
    }
  }

  console.log("Seeding completed successfully.");
}

main().catch((error) => {
  console.error("An unexpected error occurred during seeding:", error);
  process.exit(1);
});
