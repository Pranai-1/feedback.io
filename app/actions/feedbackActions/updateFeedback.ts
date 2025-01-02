import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";


export default async function updateFeedback(feedbackDetails:any){
    try{
     await userCheck()

//    const isFeedbackOfSpace=await feedbackCheck(feedbackDetails.spaceId)


//    if(!isFeedbackOfSpace)
//     return { success: false, message:"Feedback doesn't belong to this space"};

//    const isSpaceOfUser=await spaceCheck(isFeedbackOfSpace.spaceName,user)
      
//     if(!isSpaceOfUser)
//     return { success: false, message:"Space doesn't belong to this user"};
      
//If you want to check fior feeback then follow this process,
//extract the user (id) from db and find a space from the spaceId of feedbackdetails and check the userId of the space is same as id of user
             
        const updatedFeedback=await prisma.review.update({
            where:{
                id:feedbackDetails.id
            },
            data:feedbackDetails
        })
        if(updatedFeedback)
            return {success:true , message:"Updated Successfully"}
        else
        return {success:false , message:"Couldn't update the review"}
    }catch(error:unknown){
       return {
        success:false,
        message:(error as Error).message || "Couldn't update the review"
       }
    }
}