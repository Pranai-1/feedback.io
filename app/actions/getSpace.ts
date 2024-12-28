"use server";

import { prisma } from "@/lib/prisma";

export default async function getSpace(spaceName:string){
    const space = await prisma.space.findUnique({
        where: {
          spaceName,
        },
      });
      return space
}