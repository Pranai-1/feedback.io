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
    console.log(session)
    return(
      <div className="relative h-[90.3vh] md:h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-[100%] bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
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