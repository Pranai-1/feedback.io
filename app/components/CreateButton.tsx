"use client";

import { useState } from "react";
import LivePreview from "./LivePreview";
import CreateSpace from "./CreateSpace";
import SpaceCreationProvider from "./SpaceCreationProvider";

export default function CreateButton() {
  const [spaceToggle, setSpaceToggle] = useState(false);
  const[displayPage,setDisplayPage]=useState(0)
  return (
    <div>
      {!spaceToggle ? (
        <button
          className="bg-indigo-500 p-2 rounded-md text-white hover:bg-[#4B4ACF]"
          onClick={() => setSpaceToggle(true)}
        >
          + Create a new space
        </button>
      ) : (
        <div className=" absolute top-4 sm:top-0 left-0 w-full z-50 flex justify-center items-center">
        <div className="bg-white rounded-md shadow-lg md:p-4 relative">
         
          <button
            className="absolute top-2 sm:top-6 right-10 text-gray-500 hover:text-black text-lg"
            onClick={() => setSpaceToggle(false)}
          >
            &#10005;
          </button>
        
          <div className="w-[100%] flex flex-wrap justify-center items-center  lg:justify-start lg:items-start gap-4 my-10 pt-4">
            <SpaceCreationProvider>
            <LivePreview displayPage={displayPage} />
            <CreateSpace displayPage={displayPage} setDisplayPage={setDisplayPage}/>
            </SpaceCreationProvider>
          </div>
        </div>
      </div>
      
      
      )}
    </div>
  );
}
