import { prisma } from "@/lib/prisma";

export default async function feedbackCheck(spaceId:string){
    try{
     const space=await prisma.space.findUnique({
        where:{
            id:spaceId
        }
      })

     return space
    }catch (error: unknown) {
        console.log(error)
        return null;
      }
}