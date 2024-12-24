import { prisma } from "@/lib/prisma";

export async function fetchUserData(email: string) {
  if (!email) return { user: null, spaces: [] };

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (!user) return { user: null, spaces: [] };

  const spaces = await prisma.space.findMany({
    where: {
      userId: user.id,
    },
  });

  return { user, spaces };
}
