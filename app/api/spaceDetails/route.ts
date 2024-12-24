import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { spaceSchema } from "@/app/zodSchema";

export async function POST(req: NextRequest) {
  try {
   
    const body = await req.json();
    const validationResult = spaceSchema.safeParse(body);
    if (!validationResult.success) {
      console.error("Validation Errors:", validationResult.error.errors);
      return NextResponse.json(
        { message: "Validation failed", error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }
  
    try {
      const newSpace = await prisma.space.create({
        data: validationResult.data,
      });

     

      return NextResponse.json(
        { message: "success", space: newSpace },
        { status: 200 }
      );
    } catch (dbError) {
      console.error("Database Error:", dbError);
      return NextResponse.json(
        { message: "failed", error: "Error occurred while creating the space. Contact admin!" },
        { status: 500 }
      );
    }
  } catch (unexpectedError) {
    console.error("Unexpected Error:", unexpectedError);
    return NextResponse.json(
      { message: "failed", error: "Unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}


