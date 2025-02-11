"use server";
"use server";
import { prisma } from "@/lib/prisma";

export default async function getWallOfLove(spaceName:string){
    try{
      const space=await prisma.space.findUnique({
        where:{
            spaceName
        }
      })
      if(!space)
        return {success:false,wallOfLove:[]}
     const wallOfLove=await prisma.wallOfLove.findMany({
        where:{
            spaceId:space.id
        }
     })
     if(wallOfLove)
        return {success:true,wallOfLove}
    else
    return {success:false,wallOfLove:[]}
    }catch (error: unknown) {
            console.error("Error in getWallOfLove:", error);
            return { success: false, error: (error as Error).message || "Unknown error occurred" };
          }
}