import { auth } from "@/auth";
import { NextApiRequest } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default async function middleware(){
    console.log("inside middleware")
    const session=await auth()
    if(!session)
        return redirect("/login")
  return NextResponse.next()
}

export const config={
    matcher:["/dashboard"]
}