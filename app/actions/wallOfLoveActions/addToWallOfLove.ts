"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { fetchUserData } from "@/lib/dataFetch";

export default async function addToWallOfLove(spaceId:string,reviewId:string){
    try{
        const {user}= await fetchUserData()
        if(!user)
        return { success: false, message:"User doesn't exist" };
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









