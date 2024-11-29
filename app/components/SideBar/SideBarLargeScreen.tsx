import { sideBarNav } from "@/app/static/simpleData";
import React from "react";

export default function SideBarLarge(){
    return(
        <div className="md:flex hidden overflow-x-hidden flex-col  gap-4
        w-64 h-full px-5 pt-3 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
      {sideBarNav.map((data)=>(
        <div key={data.id} className="flex justify-start items-center gap-2 hover:bg-[#19191A] cursor-pointer
        font-medium px-4 py-1 text-[#B2B2B3] rounded-lg ">
             <span className="text-2xl text-white bg-black">{React.createElement(data.icon)}</span>
            <span className="px-4">{data.label} </span>
           
        </div>
      ))}
        </div>
    )
}