import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      public_id: "ba1c753d-0da5-45ab-9001-72065c5a623d",
      title: "Teste 1",
      slug: "teste-1",
      details: "Um evento para quem é apaixonado por testes",
      maximumAttendees: 100,
    },
  });

  await prisma.attendee.create({
    data: {
      name: "João",
      email: "joao@gmail.com",
      eventId: "ba1c753d-0da5-45ab-9001-72065c5a623d",
    },
  });
  
  await prisma.attendee.create({
    data: {
      name: "Maria",
      email: "maria@gmail.com",
      eventId: "ba1c753d-0da5-45ab-9001-72065c5a623d",
    },
  });
  
  await prisma.attendee.create({
    data: {
      name: "Carlos",
      email: "carlos@gmail.com",
      eventId: "ba1c753d-0da5-45ab-9001-72065c5a623d",
    },
  });

  await prisma.attendee.create({
    data: {
      name: "Renata",
      email: "renata@gmail.com",
      eventId: "ba1c753d-0da5-45ab-9001-72065c5a623d",
    },
  });
}

seed().then(() => {
  console.log("Database seeded.");
  prisma.$disconnect();
});
