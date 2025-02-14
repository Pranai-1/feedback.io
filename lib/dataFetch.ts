"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function fetchUserData() {

   const session = await auth();
  
    if (!session || !session.user) {
      return { user: null, spaces: [] };
    }
  const email=session.user.email
  

  if (!email || email.length==0) return { user: null, spaces: [] };

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
