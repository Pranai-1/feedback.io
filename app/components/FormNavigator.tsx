"use client"

import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";

const tabs = [
    { label: "Basic", icon: <IoSettingsOutline />, id: 0 },
    { label: "Thank you page", icon: <CiHeart />, id: 1 },
    { label: "Extra settings", icon: <GiSettingsKnobs />, id: 2 },
  ];

export default function FormNavigator({setDisplayPage,displayPage}:{setDisplayPage:React.Dispatch<React.SetStateAction<number>>,displayPage:number}){
   
    return(
        <div className="border-[1px] border-gray-500 w-full rounded-lg flex justify-between items-center">
  {tabs.map((tab, index) => (
    <button
      key={tab.id}
      className={`${
        displayPage === tab.id
          ? "bg-[#5D5DFF] font-bold text-black text-xs sm:text-base"
          : "font-normal text-[#46393A] text-xs sm:text-base"
      } 
      flex-grow py-2 w-max flex justify-center items-center gap-2 
      ${index === 0 ? "rounded-l-lg" : ""} 
      ${index === tabs.length - 1 ? "rounded-r-lg" : ""} 
      ${index !== tabs.length - 1 ? "border-r" : ""}
      border-gray-500`}

    onClick={()=>{setDisplayPage(index)}}  
    >
      {tab.icon}
      {tab.label}
    </button>
  ))}
</div>
    )
}