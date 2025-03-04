"use client";


import TypingAnimation from "@/components/ui/typing-animation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";



export default function NoFeedback({spaceName}:{spaceName:string}){
    const[clicked,setClicked]=useState(false)
    const router=useRouter()
    return(
        <>
        {clicked ? (
             <div className="flex flex-col justify-center items-center gap-4 text-white h-full border-2 py-4 border-gray-400 ml-[26px] mt-10 w-[90%] md:w-full  md:py-0 md:border-0 md:ml-0 md:mt-0">
                <TypingAnimation className="text-4xl text-white flex justify-center items-center">Hold on Taking you to feedback page</TypingAnimation>
            </div>
        ):(
        <div className="flex flex-col justify-center items-center gap-4 text-white h-full border-2 py-4 border-gray-400 ml-[26px] mt-10 w-[90%] md:w-full md:border-0 md:ml-0 md:mt-0 md:py-0">
          <CiMail className="text-4xl"/>
          <p className="text-2xl">No testimonials yet</p>
          <div className="flex justify-center items-center gap-6"
          onClick={()=>{
            setClicked(true)
            router.push(`/space/${spaceName}`)
          }}>
            <button className="flex justify-center items-center gap-2 p-2 rounded-md bg-[#4B4ACF] text-white">
                <CiVideoOn className="text-xl"/> Add a video</button>
            <button className="flex justify-center items-center gap-2 p-2 rounded-md bg-[#4B4ACF] text-white">
                <FaEdit className="text-xl"/> Add a Text</button>
          </div>
        </div>
    )}
    </>
    )
}