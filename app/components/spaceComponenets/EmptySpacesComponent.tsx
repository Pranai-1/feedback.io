"use client"

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import SpaceCreationHome from "./SpaceCreationHome";



export default function EmptySpaces(){
    const[createStateToggle,setCreateSpaceToggle]=useState(false)
    return(
        <div className="relative flex justify-center items-center h-[80vh] overflow-auto overflow-x-hidden">
        {!createStateToggle ?
        (
           
            <div className="flex flex-col gap-2 justify-center items-center w-[95%] sm:w-[80%]  bg-[#FFFFFF] border-2 border-gray-100 p-4 py-10
            rounded-lg">
            <FiFolderPlus className="text-4xl"/>
            <p className="text-black font-medium  sm:text-xl ">No spaces yet</p>
            <p className="text-gray-500 w-full text-center text-wrap text-xs sm:text-sm">Create your first space to start collecting testimonials</p>
            <RainbowButton className="mt-6"  onClick={()=>setCreateSpaceToggle(true)}>+ Create a new space </RainbowButton>
            </div>
           
        ):(
        <SpaceCreationHome setCreateSpaceToggle={setCreateSpaceToggle}/>
        )}
      
      </div>
    )
}