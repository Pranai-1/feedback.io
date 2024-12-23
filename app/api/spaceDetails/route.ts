import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"
import { SpaceInputs } from "../types";

const spaceSchema = z.object({
  userId:z.string().min(1, "Please login and try again."),
  spaceName: z.string().min(1, "Space name is required."),
  description:z.string().min(1, "Space description is required."),
  title: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  image: z.string().url("Invalid URL format for space logo."),
  questions:z.string().array().min(3, { message: "At least three questions are required." }) 
});


export async function POST(req:NextRequest){
    const body=await req.json()

    try{
        spaceSchema.safeParse(body)
    }catch(error){
         if (error instanceof z.ZodError) {
            return NextResponse.json({message:"failed",error:error.errors[0].message})   
        }
        return NextResponse.json({message:"failed",error:"Error occured while creating space"})
    }
    
    const { userId, spaceName, image, title, description, questions,customMessage } = body;
    try{
        const newSpace=await prisma.space.create({
            data: {
                spaceName,
                userId,
                image,
                title,
                description,
                customMessage,
                questions,
              },
        })
    }catch(error){
     console.log(error)
    }
   
    return NextResponse.json({message:"success"})
}