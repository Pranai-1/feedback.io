
"use client";

import { SpacePropType } from "@/app/api/types";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import SpaceNavigation from "../SpaceNavigation";





export default function SpaceCard({space,setCreateSpaceToggle,setDeleteSpace}:
    {space:SpacePropType,setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>,
        setDeleteSpace:React.Dispatch<SetStateAction<string>>}){
    
    const[openDetailsCard,setOpenDetailsCard]=useState<string>("")
    
  
    return(
        <div className="flex flex-col justify-start items-start w-[90%] md:w-full md:max-w-96 rounded-md
        xl:py-4 border border-white/20 hover:border-white/50 relative"
        key={space.id}>
      <p className="text-white font-bold p-2 w-full text-center">{space.spaceName}</p>
       <div className="  px-2 flex justify-between items-center w-full mt-4 md:mt-1">
       <Link href={"/dashboard"} className="flex justify-start items-center gap-4 h-full">
        <Image src={space.spaceLogo} alt="logo" height={32} width={32} 
        className=" border border-white rounded-md bg-white text-center"/>
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


     
       <p className="w-full border-b border-b-white/30 mt-4"></p>
       <p className="text-xs text-gray-300 pt-3 pl-2">{space.customMessage}</p>
       <p className="text-sm text-gray-300 mt-6 pl-2 text-center w-full">Feedbacks : 0</p>
        </div>
    )
}