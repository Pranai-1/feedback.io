
import { fetchFeedbacks } from "@/lib/fetchFeedbackDetails";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { FetchFeedbackDetails } from "../../types";


export  async function GET(req:NextRequest){
try{
    const spaceName = req.headers.get("spaceName") || "";

   
    
          try{
           const {likedFeedbacks}=await fetchFeedbacks(spaceName) as FetchFeedbackDetails
          return NextResponse.json({message:"Retrieved liked feedbacks successfully",likedFeedbacks},{status:200})
          }catch(error){
            console.log(error)
            return NextResponse.json({message:"Couldn't fetch the data",likedFeedbacks:[]},{status:400})
          }

        }catch(error){
            console.log(error)
            return NextResponse.json({message:"Internal Server Error",likedFeedbacks:[]},{status:500})
        }finally{
            prisma.$disconnect()
        }
}