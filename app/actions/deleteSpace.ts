"use server";

import { auth } from "@/auth";
import { fetchUserData } from "@/lib/dataFetch";
import { prisma } from "@/lib/prisma";

export default async function deleteSpace(spaceName:string){
  const session=await auth()
    if(!session){
     throw new Error("Login and try again")
    }
    const {user}=await fetchUserData(session?.user?.email || "")
    if(!user){
     throw new Error("User not found")
    }
      
    try{
      const deleteSpace=await prisma.space.delete({
        where:{
            spaceName
        }
      })
      if(deleteSpace)
        return {success:true}
    else
    return {success:false}
    }catch(error){
      if(error instanceof Error)
        throw new Error(error.message)
    else
     throw new Error("Couldn't delete the space")
    }
}