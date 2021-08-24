import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function readAllUsersFromDB(include: {
  posts: boolean;
  profile: boolean;
}) {
  const allUsers = await prisma.user.findMany({ include });
  return allUsers;
}

async function createUser() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });
}

async function updatePost() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true, content: "First post" },
  });
  console.log(post);
}

async function createPost() {
  const post = await prisma.post.create({
    data: {
      title: "Join us for prisma day 2020",
      author: {
        connect: { email: "alice@prisma.io" },
      },
    },
  });
  console.log(post);
}

async function main() {
  // await createUser();
  // const allUsers = await readAllUsersFromDB({ posts: true, profile: true });
  // await updatePost();
  await createPost();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
