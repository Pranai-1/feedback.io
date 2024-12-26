
"use client";

import { SpacePropType } from "@/app/api/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";


export default function SpaceCard({space,id}:{space:SpacePropType,id:Number}){
     
    const[openDetailsCard,setOpenDetailsCard]=useState<Number>(-1)

    return(
        <div className="flex flex-col justify-start items-start w-full md:max-w-96 rounded-md
        py-4 border border-white/20 hover:border-white/50 relative">
      
       <div className="  px-2 flex justify-between items-center w-full">
       <Link href={"/dashboard"} className="flex justify-start items-center gap-4 ">
        <Image src={space.spaceLogo} alt="logo" height={18} width={18} className=" border border-white rounded-md"/>
        <p className="text-md text-gray-300">{space.headerTitle}</p>
        </Link>
       <PiDotsThreeCircleLight className="text-white text-2xl cursor-pointer"
      onClick={() => setOpenDetailsCard(openDetailsCard === id ? -1 : id)}
      />
       </div>
        {openDetailsCard==id ? (
           <div
           className="absolute top-12 right-4  bg-[#FFFFFF] text-white p-4 rounded-md z-20 flex flex-col gap-4"
           style={{ minHeight: "150px" }} 
         >
                <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md">
                    <MdOutlineManageSearch className="text-2xl"/>  
                    Manage testimonials</p>
                <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md">
                    <FaLink className="text-2xl"/>
                    Get the link
                    </p>
                <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md">
                    <MdEdit className="text-2xl"/>
                    Edit the space
                    </p>
                <p className="flex justify-start items-center gap-4 text-black hover:bg-red-500 cursor-pointer p-2 rounded-md">
                    <RiDeleteBack2Line className="text-2xl"/>
                    Delete the space
                    </p>
            </div>
        ):null}
       <p className="w-full border-b border-b-white/30 mt-4"></p>
       <p className="text-xs text-gray-300 pt-3 pl-2">{space.customMessage}</p>
       <p className="text-sm text-gray-300 mt-6 pl-2 text-center w-full">Feedbacks : 0</p>
        </div>
    )
}