"use client"
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import BarMap from "./BarMap";


export default function SideBarSmallScreen(){
    const[toggleSidebar,setToggleSidebar]=useState(false)
    console.log(toggleSidebar)
    return(
        <div className="flex sm:hidden text-4xl cursor-pointer bg-[#09090b]">
           <span className="text-white" onClick={()=>setToggleSidebar(true)}><IoReorderThree/></span>
           {toggleSidebar ? (
            <div className="absolute left-0 top-0 w-3/5  h-[100vh] z-50 border-r border-zinc-700 py-4">
                <div className="mt-10 flex flex-col gap-4 px-2">
               <BarMap/>
               </div>
            </div>
        ):null}
        </div>
    )
}