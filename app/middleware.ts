import { auth } from "@/auth";

import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function middleware(request:any){
   
    const session=await auth()
    if (request.url.startsWith("/slider/") || (request.url.startsWith("/manualSlider/"))) {
        return NextResponse.next();
      }

    if(!session)
        return NextResponse.redirect("/login",request.url)
  return NextResponse.next()
}

export const config={
    matcher:["/dashboard"]
}