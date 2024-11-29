import { SetStateAction, useState } from "react";
import LivePreview from "../LivePreview";
import CreateSpace from "../SpaceCreationHome";
import SpaceCreationProvider from "../SpaceCreationProvider";

export default function SpaceCreationHome({setCreateSpaceToggle}:{setCreateSpaceToggle:React.Dispatch<SetStateAction<boolean>>}){
    const[displayPage,setDisplayPage]=useState(0)
    return(
        <>
          <div className=" absolute top-4 sm:top-0 left-0 w-full z-50 flex justify-center items-center ">
        <div className="bg-gray-50 rounded-md shadow-lg flex justify-center w-[95%]">
         
          <button
            className="absolute top-2 sm:top-6 right-10 text-gray-500 hover:text-black text-lg"
            onClick={() => setCreateSpaceToggle(false)}
          >
            &#10005;
          </button>
        
          <div className="w-[100%] flex flex-wrap justify-center items-center  lg:justify-start lg:items-start gap-4 mb-10 pt-4">
            <SpaceCreationProvider>
            <LivePreview displayPage={displayPage} />
            <CreateSpace displayPage={displayPage} setDisplayPage={setDisplayPage}/>
            </SpaceCreationProvider>
          </div>
        </div>
      </div>
        </>
    )
}