"use client";

import { useState } from "react"
import CreateSpaceButton from "./CreateSpaceButton";
import SpaceCard from "./SpaceComponenets/SpaceCard";
import { SpacePropType } from "../api/types";
import SpaceCreationHome from "./SpaceCreationHome";
import SearchSpaces from "./SearchSpaces";

export default function SpacesDisplay({ spaces }:{spaces:SpacePropType[] | []}){
     const[createStateToggle,setCreateSpaceToggle]=useState(false)
     const[clickedOnSearch,setClickedOnSearch]=useState(false)
     const[searchText,setSearchText]=useState("")
    return(
        <>
        {!createStateToggle ? (
            <div className="w-full pl-8 h-full" onClick={()=>setClickedOnSearch(false)}>
            <div className="w-full flex justify-between px-2 bg-gray-200 p-2 py-4 rounded-md items-center">
            <p className="text-black text-2xl font-bold from-neutral-50">Spaces</p>

            <div className="w-1/2 flex justify-center items-center">
           <SearchSpaces clickedOnSearch={clickedOnSearch} setClickedOnSearch={setClickedOnSearch}
           searchText={searchText} setSearchText={setSearchText}/>
           </div>

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