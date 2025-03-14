"use server";


import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function removeFromWallOfLove(spaceId:string,reviewId:string){
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
           const wallOfLove=await prisma.wallOfLove.delete({
            where:{
                spaceId,
                reviewId
            }
           })
    
           if (!wallOfLove) {
            return { success: false, message:"Failed to remove from wall of love" };
        }
    revalidatePath(`/feedbacks/${space.spaceName}`)
        return { success: true, message:"✅ Removed from Wall of Love successfully." };
             
    
        }catch (error: unknown) {
            console.error("Error in removeFromWallOfLove:", error);
            return { success: false, error: (error as Error).message || "Unknown error occurred" };
          }
}