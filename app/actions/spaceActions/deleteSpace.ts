"use server";

import { auth } from "@/auth";
import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import userCheck from "../userCheck";

export default async function deleteSpaceAction(spaceName:string){

    try{
       await userCheck()
      const deleteSpace=await prisma.space.delete({
        where:{
            spaceName
        }
      })
      if(deleteSpace){
          revalidatePath("/dashboard")
          return {success:true}
      }
        
    else
    return {success:false}

    }catch (error: unknown) {
      console.error("Error in handleCreateSpace:", error);
      return { success: false, error: (error as Error).message || "Unknown error occurred" };
    }
}