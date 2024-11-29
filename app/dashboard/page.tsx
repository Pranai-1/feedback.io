"use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import EmptySpaces from "../components/spaceComponenets/EmptySpacesComponent";



export default async function Dashboard(){
const spaces=0
  
    const session=await auth()
    if(!session)
      return redirect("/")
    return(
      <div className="relative h-[85vh] w-[100%] bg-[#09090B]">
      <p className="w-max">you are in dashboard</p>
    {spaces==0 ? (
      <>
      <EmptySpaces/>
      </>
    ):(
    <>
    </>
  )}
      </div>
        
    )
}