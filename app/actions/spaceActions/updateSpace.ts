"use server";


import { SpaceInputsIncludingQuestions, spaceSchemaBackend } from "../../zodSchema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";

export async function handleUpdateSpace(spaceId: string,spaceDetails:SpaceInputsIncludingQuestions) {
  
     
    
        try {
          await userCheck()
            const updatedSpace=await prisma.space.update({
                where:{
                    id:spaceId
                },
                data:spaceDetails
            })
        console.log(updatedSpace)
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
      
    
    

