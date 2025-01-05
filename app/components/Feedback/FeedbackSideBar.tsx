"use client";

import {  useState } from "react";
import { feedbackSideBarExtension, feedbackSideBarExtensionValues, feedbackSideBarInbox } from "@/app/static/simpleData";
import React from "react";
import { FeedbackSideBarNavElement } from "@/app/api/types";
import { IoIosArrowDown } from "react-icons/io";

export default function FeedbackSideBar({handleSidebarClick}:{handleSidebarClick:(section:string)=>void}){
    const[extend,setExtend]=useState(-1)

    return(
        <div className="md:fixed   md:overflow-x-hidden flex flex-col  gap-4 text-[#B2B2B3]
        w-[95%] md:w-80 h-[84%]  px-3 py-3 md:overflow-y-auto  md:border-r md:rtl:border-r-0 md:rtl:border-l dark:bg-black dark:border-balck">
            <div>
            <p className="text-2xl text-center w-full text-white">Inbox</p>
            <div className="flex flex-col justify-start items-center gap-4 mt-4 w-[100%]">
            {feedbackSideBarInbox.map((data:FeedbackSideBarNavElement)=>
            <div key={data.id} className={`flex justify-start items-center gap-1 w-full hover:bg-[#19191A] cursor-pointer
                    border border-zinc-700 font-medium px-4 py-2 text-[#B2B2B3] rounded-lg text-base hover:text-white`}
                    onClick={()=>{handleSidebarClick(data.label)}}>
                        <span className="text-2xl text-white bg-black">{React.createElement(data.icon)}</span>
                       <span className={`px-4 `}>{data.label} </span>
                      
                   </div>
            )}
            </div>
            </div>
            <div className="flex flex-col mt-4 gap-2">
            {feedbackSideBarExtension.map((data:FeedbackSideBarNavElement)=>
            <div key={data.id}>
             <div className={`flex justify-between items-center w-full cursor-pointer p-2 rounded-md hover:border
              border-gray-500 hover:text-white ${extend==data.id ? "text-blue-600" :""}`} key={data.id}
              onClick={()=>{
                setExtend((prev)=>prev==data.id ? -1 :data.id)
                }}>
             <span className="text-lg">{data.label}</span>
             {extend==data.id ? <IoIosArrowDown className="text-2xl"/> :  <span className="text-2xl">{React.createElement(data.icon)}</span>}
            
             </div>
             {extend==data.id ? (
                <div className="flex flex-col gap-2 w-full mt-2">
                   
                    {feedbackSideBarExtensionValues[extend].map((value:FeedbackSideBarNavElement)=>
                    <div className="flex justify-start items-center w-full gap-2 hover:bg-[#19191A] cursor-pointer
                    border border-zinc-700 font-medium px-4 py-2 text-[#B2B2B3] rounded-lg text-base hover:text-white"
                    onClick={()=>{handleSidebarClick(value.label)}}
                    key={value.id}
                    >
                        <span className="text-xl">{React.createElement(value.icon)}</span>
                         <span className="text-md">{value.label}</span>
                         
                    </div>
                    )}
                </div>
             ):null}
             </div>
            )}
            </div>
            
        </div>
    )
}