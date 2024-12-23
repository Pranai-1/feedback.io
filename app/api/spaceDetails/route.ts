import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"

const spaceSchema = z.object({
  spaceName: z.string().min(1, "Space name is required."),
  headerTitle: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  spaceLogo: z.string().url("Invalid URL format for space logo."),
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