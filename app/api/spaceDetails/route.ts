import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import {  spaceSchemaBackend } from "@/app/zodSchema";
import { fetchUserData } from "@/lib/dataFetch";
import { auth } from "@/auth";

export async function POST(req: NextRequest) {
  try {
   
    const body = await req.json();
    const session=await auth()
    if(!session)
      return NextResponse.json(
        { message: "Validation failed", error: "User doesn't exist" },
        { status: 400 }
      );

    const {user}=await fetchUserData(session?.user?.email || "")
    if(!user)
      return NextResponse.json(
        { message: "Validation failed", error: "User doesn't exist" },
        { status: 400 }
      );

      let helperObj={...body,userId:user.id}
      console.log(body)
    const validationResult = spaceSchemaBackend.safeParse(helperObj);
    if (!validationResult.success) {
      console.error("Validation Errors:", validationResult.error.errors);
      return NextResponse.json(
        { message: "Validation failed", error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }
  
    try {
      const newSpace = await prisma.space.create({
        data:validationResult.data
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


export async function DELETE(req: NextRequest) {
 //This is Deleting with query params,if you want to delete with route params then we need to create a dynmaic route for id 
 // itself{i didn't try)}
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  if(!id)
    return NextResponse.json({ message: `Resource not found` },{status:404});
try{
   await prisma.space.delete({
    where:{
      id
    }
   })
}catch(error){
  console.log(error)
  return NextResponse.json({ message: `Error occured while deleting` },{status:404});
}

  return NextResponse.json({ message: `Space deleted successfully` },{status:200});
}

