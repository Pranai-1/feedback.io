"use client";

import { FeedbackPropType } from "@/app/api/types";
import Image from "next/image";

export default function FeedbackPersonalInfo({feedback}:{feedback:FeedbackPropType}){

    return(
      <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between items-start gap-12 px-4 pt-4">
        <div className="flex flex-col gap-4 justify-start items-center w-full">
          <p className="text-gray-800 font-medium  self-start">Name :</p>
          <div className="flex gap-2 justify-start items-center w-full">
          {feedback.photo.length>0 ? (
              <Image src={feedback.photo} alt="Profile photo" height={32} width={32} className=" rounded-full"/>
          ):(
              <span className="rounded-full bg-gray-600 h-8 w-8"></span>
          )}
          <p className="text-gray-800 ">{feedback.name}</p>
          </div>
          <div className="flex flex-col gap-2 justify-start items-center w-full">
         <p className="text-gray-800 font-medium  w-full">Submitted at :</p>
         <p className="w-full  text-gray-600">{feedback.submittedAt ?  new Date(feedback.submittedAt).toLocaleString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }) : "Date not available"}</p>
         </div>

        </div>
        <div className="flex flex-col gap-2">
        <p className="text-gray-800 font-medium ">Email :</p>
        <p className="text-gray-800 ">{feedback.email}</p>
        </div>
      </div>
    )
}