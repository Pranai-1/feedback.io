"use server";
import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";
import { FeedbackPropType } from "@/app/api/types";
import feedbackCheck from "../feedbackCheck";
import spaceCheck from "../spaceCheck";



export default async function updateFeedback(feedbackDetails:FeedbackPropType){
    try{
   const user= await userCheck()
         const isFeedbackOfSpace=await feedbackCheck(feedbackDetails.spaceId,feedbackDetails.id)
      
      
         if(!isFeedbackOfSpace)
          return { success: false, message:"Feedback doesn't belong to this space"};
      
         const isSpaceOfUser=await spaceCheck(feedbackDetails.spaceId,user.id)
            
          if(!isSpaceOfUser)
          return { success: false, message:"Space doesn't belong to this user"};
      
//If you want to check fior feeback then follow this process,
//extract the user (id) from db and find a space from the spaceId of feedbackdetails and check the userId of the space is same as id of user
       
//no need of this check because this has been finished while checking for isFeedbackSpace
const findFeedback=await prisma.review.findUnique({
            where:{
                email:feedbackDetails.email
            }
        })

        if(!findFeedback) 
            return {success:false , message:"Couldn't find the review"}

     

        const updatedFeedback=await prisma.review.update({
            where:{
                id:feedbackDetails.id
            },
            data:feedbackDetails
        })
        if(updatedFeedback)
            return {success:true , message:"✅ Feedback updated Successfully"}
        else
        return {success:false , message:"Couldn't update the review"}
    }catch(error:unknown){
       return {
        success:false,
        message:(error as Error).message || "Couldn't update the review"
       }
    }
}