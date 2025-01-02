import { prisma } from "@/lib/prisma"

export default async function spaceCheck(spaceName:string,user:{id:string}){
    try{
        const space=await prisma.space.findUnique({
            where:{
                spaceName
            },
            select:{
                id:true,
                userId:true
            }
          })
    
          if(!(user.id==space?.userId))
            return null
        return space
    }catch (error) {
        console.log(error)
        return null;
      }
      
}