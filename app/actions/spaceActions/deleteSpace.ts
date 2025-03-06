"use server";

import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export default async function deleteSpaceAction(spaceName:string){
const {user}=await fetchUserData()
if(!user){
  return {success:false}
}
    try{
      const deleteSpace=await prisma.space.delete({
        where:{
            spaceName
        }
      })
      revalidatePath("/dashboard")
     
       
          return {success:deleteSpace ? true : false}
  
  

    }catch (error: unknown) {
      console.error("Error in handleCreateSpace:", error);
      return { success: false, error: (error as Error).message || "Unknown error occurred" };
    }
}