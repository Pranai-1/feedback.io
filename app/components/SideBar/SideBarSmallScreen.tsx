"use client"
import { memo, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import BarMap from "./BarMap";
import FeedbackSideBar from "../Feedback/FeedbackSideBar";


 function SideBarSmallScreen(){
    const[toggleSidebar,setToggleSidebar]=useState(false)
    console.log(toggleSidebar)
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
            className="absolute top-4 right-24 sm:right-20 text-gray-500 hover:text-black text-lg"
            onClick={(e)=>{
               
                setToggleSidebar(false)
                e.stopPropagation()
                }}>
          
            &#10005;
          </button>
                <div className="mt-20 flex flex-col gap-6 px-2 text-black">
               <BarMap text={"black"} />
               </div>
               </div>
            </div>
           
        ):null}
        </div>
    )
}

export default memo(SideBarSmallScreen)