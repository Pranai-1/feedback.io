import { prisma } from "@/lib/prisma";

export default async function feedbackCheck(spaceId:string,feedbackId:string){
    try{
     const review=await prisma.review.findUnique({
        where:{
            spaceId,
            id:feedbackId
        }
      })

     return review
    }catch (error: unknown) {
        console.log(error)
        return null;
      }
}