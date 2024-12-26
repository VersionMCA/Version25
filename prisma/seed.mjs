import { prisma } from "../src/db/index.mjs";

async function seedEvents() {
  await prisma.event.create({
    data: {
      eventName: "Event 1",
      description: "Event 1 Description",
      type: "Individual",
    },
  });
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
