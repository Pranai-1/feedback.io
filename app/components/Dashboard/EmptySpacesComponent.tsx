"use client"


import { SetStateAction, useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import SpaceCreationHome from "../SpaceCreationHome";
import CreateSpaceButton from "./CreateSpaceButton";



export default function EmptySpaces({createStateToggle,setCreateSpaceToggle}:{createStateToggle:number, setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>}){
   
    return(
        <div className="flex justify-center items-center h-[80vh] overflow-auto overflow-x-hidden w-[90%] sm:w-[100%]">
        {createStateToggle==-1 ?
        (
           
            <div className="flex flex-col gap-2 justify-center items-center w-[95%] sm:w-[80%]  bg-[#FFFFFF] border-2 border-gray-100 p-4 py-10
            rounded-lg">
            <FiFolderPlus className="text-4xl"/>
            <p className="text-black font-medium  sm:text-xl ">No spaces yet</p>
            <p className="text-gray-500 w-full text-center text-wrap text-xs sm:text-sm">Create your first space to start collecting testimonials</p>
            <p  className="mt-8"></p>
          <CreateSpaceButton spaceCount={0} setCreateSpaceToggle={setCreateSpaceToggle}/>
            </div>
           
        ):(
        <SpaceCreationHome 
        setCreateSpaceToggle={setCreateSpaceToggle}
        createSpaceToggle={createStateToggle}
        />
        )}
      
      </div>
    )
}