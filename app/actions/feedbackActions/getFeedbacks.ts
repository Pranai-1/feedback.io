import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";


export default async  function getFeedback(spaceName:string){
    try{
   
     const space=await prisma.space.findUnique({
        where:{
            spaceName
        }
     })
    if(!space)
        return { success: false, message:"Space doesn't exist"};

     const reviews=await prisma.review.findMany({
        where:{
            spaceId:space.id
        }
     })

        if(reviews)
        return { success: true, message:"Reviews fetched successfully",reviews};
        else
        return { success: false, message:"Couldn't fetch the feedbacks"};

    }catch (error: unknown) {
        console.error("Error in handleCreateSpace:", error);
        return { success: false, message: (error as Error).message || "Unknown error occurred" };
      }
}