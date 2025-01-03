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
             <div className="flex flex-col justify-center items-center gap-4 text-white h-full w-full">
                <TypingAnimation className="text-4xl text-white">Hold on Taking you to feedback page</TypingAnimation>
            </div>
        ):(
        <div className="flex flex-col justify-center items-center gap-4 text-white h-full">
          <CiMail className="text-4xl"/>
          <p className="text-2xl">No testimonials yet</p>
          <div className="flex justify-center items-center gap-6"
          onClick={()=>{
            setClicked(true)
            router.push(`http://localhost:3000/space/${spaceName}`)
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