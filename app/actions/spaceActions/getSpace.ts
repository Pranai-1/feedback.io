"use server";

import { prisma } from "@/lib/prisma";

export default async function getSpace(spaceName:string){
  try{
    const space = await prisma.space.findUnique({
      where: {
        spaceName,
      },
    });
    return space
  }catch(error){
    console.log(error)
    throw new Error("Error Occured")
  }
  
}