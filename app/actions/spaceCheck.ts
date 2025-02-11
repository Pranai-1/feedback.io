"use server";
import { prisma } from "@/lib/prisma"

export default async function spaceCheck(spaceName:string,userId:string){
    try{
        const space=await prisma.space.findUnique({
            where:{
                spaceName,
                userId
            }
          })
        if(space)
        return space
    return null
    }catch (error) {
        console.log(error)
        return null;
      }
      
}