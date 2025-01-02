import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";
import feedbackCheck from "../feedbackCheck";
import spaceCheck from "../spaceCheck";

export default async function deleteFeedback(id:string,spaceId:string){
    try{
        const user=await userCheck()
      
         const isFeedbackOfSpace=await feedbackCheck(spaceId,id)
      
      
         if(!isFeedbackOfSpace)
          return { success: false, message:"Feedback doesn't belong to this space"};
      
         const isSpaceOfUser=await spaceCheck(spaceId,user.id)
            
          if(!isSpaceOfUser)
          return { success: false, message:"Space doesn't belong to this user"};
            
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