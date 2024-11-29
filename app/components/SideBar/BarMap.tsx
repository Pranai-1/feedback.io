import { sideBarNav } from "@/app/static/simpleData";
import React from "react";


export default function BarMap({text}:{text:string}){
    
    return(
        <>
         {sideBarNav.map((data)=>(
        <div key={data.id} className="flex justify-start items-center gap-1 hover:bg-[#19191A] cursor-pointer
         border border-zinc-700 font-medium px-4 py-2 text-[#B2B2B3] rounded-lg text-base">
             <span className="text-2xl text-white bg-black">{React.createElement(data.icon)}</span>
            <span className={`px-4 text-${text} hover:text-white`}>{data.label} </span>
           
        </div>
      ))}
     
        </>
    )
}