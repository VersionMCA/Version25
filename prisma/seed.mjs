import { prisma } from "../src/db/index.mjs";

async function seedEvents() {
  const events = [
    {
      eventName: "CodeFest",
      description:
        "A competitive coding event to test your algorithmic skills.",
      type: "Individual",
    },
    {
      eventName: "Hackathon",
      description: "A 24-hour hackathon for building innovative solutions.",
      type: "Team",
    },
    {
      eventName: "TechQuiz",
      description: "A quiz event to challenge your tech knowledge.",
      type: "Individual",
    },
    {
      eventName: "DesignSprint",
      description: "A UI/UX design challenge for creative minds.",
      type: "Team",
    },
    {
      eventName: "AI Workshop",
      description: "A hands-on workshop on Artificial Intelligence.",
      type: "Individual",
    },
    {
      eventName: "WebDev Marathon",
      description: "A competition to create stunning web applications.",
      type: "Team",
    },
    {
      eventName: "DataDive",
      description: "A data analysis event to showcase your analytical skills.",
      type: "Individual",
    },
    {
      eventName: "CyberStrike",
      description: "A cybersecurity event to defend against attacks.",
      type: "Team",
    },
  ];

  for (const event of events) {
    await prisma.event.create({ data: event });
  }
}

async function seedDatabase() {
  try {
    await seedEvents();
    console.log("Database seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase().catch((error) => {
  console.error("An unexpected error occurred during seeding:", error);
  process.exit(1);
});
