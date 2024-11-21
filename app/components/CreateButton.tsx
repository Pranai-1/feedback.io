"use client";

import { useState } from "react";
import LivePreview from "./LivePreview";
import CreateSpace from "./CreateSpace";

export default function CreateButton() {
  const [spaceToggle, setSpaceToggle] = useState(false);

  return (
    <>
      {!spaceToggle ? (
        <button
          className="bg-indigo-500 p-2 rounded-md text-white hover:bg-[#4B4ACF]"
          onClick={() => setSpaceToggle(true)}
        >
          + Create a new space
        </button>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="bg-white w-max h-max rounded-md shadow-lg p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSpaceToggle(false)}
            >
              &#10005; {/* Unicode for a cross mark */}
            </button>
         <div className="flex flex-wrap justify-center items-center md:gap-4 my-10">
             <LivePreview/>
             <CreateSpace/>
         </div>
            
          </div>
        </div>
      )}
    </>
  );
}
