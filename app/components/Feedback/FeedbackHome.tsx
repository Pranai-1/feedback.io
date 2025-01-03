"use client"

import { FeedbackPropType } from "@/app/api/types";
import { useState } from "react";
import FeedbackSideBar from "./FeedbackSideBar";

export default function FeedbackHome({feedbacks}:{feedbacks:FeedbackPropType[]}){
    const[display,setDisplay]=useState("")
    console.log(feedbacks)
    return(
        <div className="w-full h-full">
        <FeedbackSideBar setDisplay={setDisplay}/>
        </div>
    )
}