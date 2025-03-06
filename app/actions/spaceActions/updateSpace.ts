"use server";


import { SpaceInputsIncludingQuestions } from "../../zodSchema";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { fetchUserData } from "@/lib/dataFetch";


export async function handleUpdateSpace(spaceId: string,spaceDetails:SpaceInputsIncludingQuestions) {
  
     
    
        try {
               const {user}= await fetchUserData()
                if(!user)
                 return { success: false, message:"User doesn't exist" };
            const updatedSpace=await prisma.space.update({
                where:{
                    id:spaceId
                },
                data:spaceDetails
            })
 
            if (!updatedSpace) {
               return {success:false}
              }else{
               
                revalidatePath("/dashboard")
                return {success:true}
              }
      
          } catch (error: unknown) {
            console.error("Error in handleCreateSpace:", error);
            return { success: false, error: (error as Error).message || "Unknown error occurred" };
          }
        }
      
    
    

