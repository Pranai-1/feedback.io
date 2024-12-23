import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"

const spaceSchema = z.object({
  userId:z.string().min(1, "userId is required."),
  spaceName: z.string().min(1, "Space name is required."),
  description:z.string().min(1, "Space description is required."),
  title: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  image: z.string().url("Invalid URL format for space logo."),
});


export async function POST(req:NextRequest){
    const body=await req.json()
    const { userId, spaceName, image, title, description, questions } = body;
    try{
        const newSpace=await prisma.space.create({
            data: {
                spaceName,
                userId,
                image,
                title,
                description,
                questions,
              },
        })
    }catch(error){
     console.log(error)
    }
   
    return NextResponse.json({message:"success"})
}