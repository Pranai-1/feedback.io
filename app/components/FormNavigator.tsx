"use client"

import { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";

const tabs = [
    { label: "Basic", icon: <IoSettingsOutline />, id: 0 },
    { label: "Thank you page", icon: <CiHeart />, id: 1 },
    { label: "Extra settings", icon: <GiSettingsKnobs />, id: 2 },
  ];

export default function FormNavigator(){
    const[clicked,setClicked]=useState(0)
    return(
        <div className="border-[1px] border-gray-500 w-full rounded-lg flex justify-between items-center">
  {tabs.map((tab, index) => (
    <button
      key={tab.id}
      className={`${
        clicked === tab.id
          ? "bg-[#5D5DFF] font-bold text-black"
          : "font-normal text-[#46393A]"
      } 
      flex-grow py-2 w-max flex justify-center items-center gap-2 
      ${index === 0 ? "rounded-l-lg" : ""} 
      ${index === tabs.length - 1 ? "rounded-r-lg" : ""} 
      ${index !== tabs.length - 1 ? "border-r" : ""}
      border-gray-500`}

    onClick={()=>setClicked(index)}  
    >
      {tab.icon}
      {tab.label}
    </button>
  ))}
</div>
    )
}