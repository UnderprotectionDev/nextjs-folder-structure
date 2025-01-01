import { PrismaClient } from "@prisma/client";
import { examples } from "./data";

const prisma = new PrismaClient();

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started ...");

  await prisma.example.deleteMany();

  await prisma.example.createMany({
    data: examples,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
