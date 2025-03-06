"use server";
import { prisma } from "@/lib/prisma";

export default async function deleteFeedback(id:string,spaceId:string){
    try{
            
        const deletedFeedback=await prisma.review.delete({
            where:{
                id
            }
        })
        if(deletedFeedback)
            return {success:true , message:"Deleted Successfully"}
        else
        return {success:false , message:"Couldn't delete the review"}
    }catch(error:unknown){
       return {
        success:false,
        message:(error as Error).message || "Couldn't delete the review"
       }
    }
}