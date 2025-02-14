import { auth } from "@/auth";

import { NextResponse } from "next/server";

export default async function middleware(request:any){
    console.log("inside middleware")
    const session=await auth()
    if(!session)
        return NextResponse.redirect("/login",request.url)
  return NextResponse.next()
}

export const config={
    matcher:["/dashboard"]
}