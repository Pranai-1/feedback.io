"use server";

import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";
import { revalidatePath } from "next/cache";

export default async function addToWallOfLove(spaceId:string,reviewId:string){
    try{
        const user= await userCheck()
        const space=await prisma.space.findUnique({
            where:{
                id:spaceId,
                userId:user.id
            }
        })
        if (!space) {
            throw new Error("Space doesn't exist");
          }
       const wallOfLove=await prisma.wallOfLove.create({
        data:{
            spaceId,
            reviewId
        }
       })

       if (!wallOfLove) {
        return { success: false, message:"Failed to add into wall of love" };
    }
revalidatePath(`/feedbacks/${space.spaceName}`)
    return { success: true, message:"✅ Added to the Wall of Love successfully." };
         

    }catch (error: unknown) {
        console.error("Error in addWallOfLove:", error);
        return { success: false, error: (error as Error).message || "Unknown error occurred" };
      }
}









