"use client"
import { memo, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import BarMap from "./BarMap";
import Link from "next/link";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import React from "react";


 function SideBarSmallScreen(){
    const[toggleSidebar,setToggleSidebar]=useState(false)
 
    return(
        <div className="flex sm:hidden text-4xl cursor-pointer bg-[#09090b]"
       >
           <span className="text-white" onClick={(e)=>{
            setToggleSidebar(true)
            e.stopPropagation()
            }}><IoReorderThree/></span>
           {toggleSidebar ? (
            
                <div className="absolute inset-y-0 left-0 top-0 w-[100%] h-[100vh] z-50 bg-black cursor-default"
                onClick={(e)=>{
               
                    setToggleSidebar(false)
                    e.stopPropagation()
                    }}>
                    <div className="w-[80%] bg-white h-[100vh] border-r border-zinc-700 py-4">
                 <button
            className="absolute top-4 right-32 sm:right-20 text-gray-500 hover:text-black text-lg border border-gray-700 rounded-full px-[6px]"
            onClick={(e)=>{
               
                setToggleSidebar(false)
                e.stopPropagation()
                }}>
          
            &#10005;
          </button>
                <div className="mt-20 flex flex-col gap-6 px-2 text-black">
               <BarMap text={"black"} />
               <Link key={4} className={`flex justify-start items-center gap-2 hover:bg-[#19191A] cursor-pointer w-[90%]
         border border-zinc-700 font-medium px-4 py-2  rounded-lg text-base  text-black hover:text-white`}
         href="/dashboard">
             <span className="text-2xl text-white bg-black">{React.createElement(RiDashboardHorizontalFill)}</span>
            <span className={`px-4 `}>Dashboard </span>
           
        </Link>
               </div>
               </div>
            </div>
           
        ):null}
        </div>
    )
}

export default memo(SideBarSmallScreen)