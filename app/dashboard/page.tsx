"use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import EmptySpaces from "../components/SpaceComponenets/EmptySpacesComponent";
import SideBarLarge from "../components/SideBar/SideBarLargeScreen";



export default async function Dashboard(){
const spaces=0
  
    const session=await auth()
    if(!session)
      return redirect("/")
    return(
      <div className="relative h-[87.5vh] w-[100%] bg-[#09090B] flex flex-col">
    <SideBarLarge/>
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