"use client";

import { SetStateAction, useEffect, useRef, useState } from "react"
import CreateSpaceButton from "./CreateSpaceButton";
import SpaceCard from "./spaces/SpaceCard";
import { SpacePropType } from "../../api/types";
import SpaceCreationHome from "../SpaceCreationHome";
import SearchSpaces from "./SearchSpaces";
import DeleteSpaceCard from "./spaces/DeleteSpaceCard";

export default function SpacesDisplay({ spaces,createStateToggle, setCreateSpaceToggle}:
  {spaces:SpacePropType[] | [],createStateToggle:number, setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>}){
     const[spacesData,setSpacesData]=useState(spaces)
     const[clickedOnSearch,setClickedOnSearch]=useState(false)
     const[searchText,setSearchText]=useState("")
     const[deleteSpace,setDeleteSpace]=useState("")
     const[openDetailsCard,setOpenDetailsCard]=useState<string>("")
     const timerRef = useRef<NodeJS.Timeout | null>(null);
     const deleteCardRef = useRef<HTMLDivElement>(null);

     const Search = (text: string) => spaces.filter((space) =>
       space.spaceName.toLowerCase().includes(text.toLowerCase())
     );
   useEffect(()=>{setSpacesData(spaces)},[spaces])
     const handleSpaceSearch = (text: string) => {
       if (timerRef.current) clearTimeout(timerRef.current);
     
       if (!text.trim()) {
         setSpacesData(spaces);
         return;
       }
     
       timerRef.current = setTimeout(() => setSpacesData(Search(text)), 300);
     };
     
    return(
        <>
        {createStateToggle==-1 ? (
            <div className=" sm:pl-8 h-full flex flex-col justify-start items-center" onClick={()=>setClickedOnSearch(false)}>
            <div className="w-[98%] flex justify-between px-2 bg-gray-200 p-2 md:py-4 rounded-md items-center">
            <p className="text-black text-xl sm:text-2xl font-bold from-neutral-50">Spaces</p>

            <div className="hidden md:flex w-1/2  justify-center items-center">
           <SearchSpaces handleSpaceSearch={handleSpaceSearch} clickedOnSearch={clickedOnSearch} setClickedOnSearch={setClickedOnSearch}
           searchText={searchText} setSearchText={setSearchText}/>
           </div>

           <CreateSpaceButton spaceCount={spacesData.length} setCreateSpaceToggle={setCreateSpaceToggle}/>

           
            </div>
            <div className="md:hidden mt-6 w-full flex justify-center items-center">
           <SearchSpaces handleSpaceSearch={handleSpaceSearch} clickedOnSearch={clickedOnSearch} setClickedOnSearch={setClickedOnSearch}
           searchText={searchText} setSearchText={setSearchText}/>
           </div>
            <div className="flex justify-center  items-center w-[100%] my-10 pb-4 flex-wrap gap-8 relative">
             {spacesData.length>0 ?
              <>
              {spacesData.map((space)=>(

                <SpaceCard
                  key={space.id}
                space={space} 
                setCreateSpaceToggle={setCreateSpaceToggle} 
                setDeleteSpace={setDeleteSpace}
                openDetailsCard={openDetailsCard}
                setOpenDetailsCard={setOpenDetailsCard}
                deleteCardRef={deleteCardRef}
                />
                ))}

              </>
              :<p className="text-gray-200 font-medium">No Spaces found</p>}
            
            {deleteSpace.length!=0 ? (
                <DeleteSpaceCard 
                deleteCardRef={deleteCardRef}
                deleteSpace={deleteSpace}
                setDeleteSpace={setDeleteSpace}
                />
            ):null}
            </div>
            
          </div>
        ) : (
           <SpaceCreationHome 
           setCreateSpaceToggle={setCreateSpaceToggle}
           createSpaceToggle={createStateToggle}
           />
        )}
        </>
        
    )
}