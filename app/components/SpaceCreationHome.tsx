import { SetStateAction, useState } from "react";
import LivePreview from "./LivePreview";

import SpaceCreationProvider from "./SpaceCreationProvider";

import SpaceDetailsForm from "./SpaceDetailsForm";

export default function SpaceCreationHome({setCreateSpaceToggle,createSpaceToggle}:
  {setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>,createSpaceToggle:number}){
    const[displayPage,setDisplayPage]=useState(0)

    return(
       
          <div className=" absolute top-4  left-0 w-full  z-50 flex justify-center items-center ">
        <div className="bg-gray-50 rounded-md shadow-lg flex justify-center w-[105%] md:w-[99%]">
         
          <button
            className="absolute top-2 right-4 sm:right-12 text-gray-500 hover:text-black text-lg"
            onClick={() => setCreateSpaceToggle(-1)}
          >
            &#10005;
          </button>
        
          <div className="w-[100%] flex flex-wrap justify-center items-center  md:items-start gap-8  md:gap-20 mb-10  py-10">
            <SpaceCreationProvider>
            <LivePreview displayPage={displayPage} />
            <SpaceDetailsForm 
            displayPage={displayPage}
             setDisplayPage={setDisplayPage}
              createSpaceToggle={createSpaceToggle}
              setCreateSpaceToggle={setCreateSpaceToggle}
              />
            </SpaceCreationProvider>
          </div>
        </div>
      </div>
       
    )
}