"use server";

import axios from "axios";
import { SpaceInputsIncludingQuestions, spaceSchemaBackend } from "../zodSchema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";

export async function handleCreateSpace(spaceDetails: SpaceInputsIncludingQuestions) {
   const session=await auth()
   if(!session){
    throw new Error("Login and try again")
   }
   const {user}=await fetchUserData(session?.user?.email || "")
   if(!user){
    throw new Error("User not found")
   }
      const validationResult = spaceSchemaBackend.safeParse({...spaceDetails,userId:user.id});
      if (!validationResult.success ) {
        console.error("Validation Errors:", validationResult.error.errors);
        throw new Error(validationResult.error.errors[0].message)
       
      }
     
    if(validationResult.data){
        try {
            const newSpace = await prisma.space.create({
              data:validationResult.data
            });
         console.log(newSpace)
            if (!newSpace) {
                throw new Error("Invalid data");
              }else{
                revalidatePath("/dashboard")
                return {success:true}
              }
      
          } catch (dbError) {
            return { success: false };
            
          }
    }else{
        throw new Error("Error occured contact Admin!");
    }
      
    
    
}
