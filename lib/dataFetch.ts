import "server-only";


import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export const fetchUserData = async ()=>{
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/")
  }

  const email = session.user.email;

  if (!email || email.length === 0) return { user: null, spaces: [] };

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      spaces: true,
    },
  });
  
  if (!user) return  redirect("/")
    const spaces = await prisma.space.findMany({
      where: { userId: user.id },
      include: {
        wallOfLove: true,
        reviews:true
      },
    });

  return { user,spaces };
};
