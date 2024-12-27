
"use client";

import { SpacePropType } from "@/app/api/types";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import SpaceNavigation from "../SpaceNavigation";
import DeleteSpaceCard from "../DeleteSpaceCard";
import EditSpace from "../EditSpace";



export default function SpaceCard({space,setCreateSpaceToggle}:
    {space:SpacePropType,setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>}){
    
    const[openDetailsCard,setOpenDetailsCard]=useState<string>("")
    const[deleteSpace,setDeleteSpace]=useState("")
    const[editSpace,setEditSpace]=useState("")
  
    return(
        <div className="flex flex-col justify-start items-start w-full md:max-w-96 rounded-md
        py-4 border border-white/20 hover:border-white/50 relative"
        key={space.id}>
      
       <div className="  px-2 flex justify-between items-center w-full">
       <Link href={"/dashboard"} className="flex justify-start items-center gap-4 ">
        <Image src={space.spaceLogo} alt="logo" height={18} width={18} className=" border border-white rounded-md"/>
        <p className="text-md text-gray-300">{space.headerTitle}</p>
        </Link>
       <PiDotsThreeCircleLight className="text-white text-2xl cursor-pointer"
      onClick={() => setOpenDetailsCard(openDetailsCard === space.id ? "" : space.id)}
      />
       </div>
        {openDetailsCard===space.id ? (
          <SpaceNavigation 
          space={space}
          setCreateSpaceToggle={setCreateSpaceToggle}
          setDeleteSpace={setDeleteSpace}
          headerTitle={space.headerTitle}
          setOpenDetailsCard={setOpenDetailsCard}
          />
        ):null}
        
        {/* {editSpace.length>0 ? (
            <EditSpace
            setEditSpace={setEditSpace}
            space={space}
            />
        ):null} */}


        {deleteSpace.length!=0 ? (
            <DeleteSpaceCard 
            headerTitle={space.headerTitle}
            setDeleteSpace={setDeleteSpace}
            />
        ):null}
       <p className="w-full border-b border-b-white/30 mt-4"></p>
       <p className="text-xs text-gray-300 pt-3 pl-2">{space.customMessage}</p>
       <p className="text-sm text-gray-300 mt-6 pl-2 text-center w-full">Feedbacks : 0</p>
        </div>
    )
}