"use server";


import { SpaceInputsIncludingQuestions, spaceSchemaBackend } from "../zodSchema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";

export async function handleUpdateSpace(spaceId: string,spaceDetails:SpaceInputsIncludingQuestions) {
   const session=await auth()
   if(!session){
    throw new Error("Login and try again")
   }
   const {user}=await fetchUserData(session?.user?.email || "")
   if(!user){
    throw new Error("User not found")
   }
     
    
        try {
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
      
          } catch (dbError) {
            return { success: false };
            
          }
        }
      
    
    

