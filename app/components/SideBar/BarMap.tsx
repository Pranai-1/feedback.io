"use client"
import { sideBarNav } from "@/app/static/simpleData";
import Link from "next/link";
import React, { memo } from "react";



 function BarMap({text}:{text:string}){
    
    return(
        <>
         {sideBarNav.map((data)=>(
        <Link key={data.id} className={`flex justify-start items-center gap-2 hover:bg-[#19191A] cursor-pointer
         border border-zinc-700 font-medium px-4 py-2 text-[#B2B2B3] rounded-lg text-base  text-${text} hover:text-white`}
         href={data.path}>
             <span className="text-2xl text-white bg-black">{React.createElement(data.icon)}</span>
            <span className={`px-4 `}>{data.label} </span>
           
        </Link>
      ))}
     
        </>
    )
}

export default memo(BarMap)