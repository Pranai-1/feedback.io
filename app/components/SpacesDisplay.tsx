"use client";

import { useState } from "react"
import CreateSpaceButton from "./CreateSpaceButton";
import SpaceCard from "./SpaceComponenets/SpaceCard";
import { SpacePropType } from "../api/types";
import SpaceCreationHome from "./SpaceCreationHome";

export default function SpacesDisplay({ spaces }:{spaces:SpacePropType[] | []}){
     const[createStateToggle,setCreateSpaceToggle]=useState(false)
    return(
        <>
        {!createStateToggle ? (
            <div className="w-full pl-8 h-full">
            <div className="w-full flex justify-between px-2 bg-gray-200 p-2 py-4 rounded-md items-center">
            <p className="text-black text-2xl font-bold from-neutral-50">Spaces</p>
           <CreateSpaceButton setCreateSpaceToggle={setCreateSpaceToggle}/>
            </div>
           
            <div className="flex justify-start items-center w-full mt-10">
            {spaces.map((space,idx)=><SpaceCard space={space} id={idx}/>)}
            </div>
            
          </div>
        ) : (
           <SpaceCreationHome setCreateSpaceToggle={setCreateSpaceToggle}/>
        )}
        </>
        
    )
}