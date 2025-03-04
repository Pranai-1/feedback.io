import React from "react";
import BarMap from "./BarMap";
import UserProfile from "./UserProfile";


export default async function SideBarLarge() {

  return (
    // Outer container is fixed relative to the viewport.
    <div className="hidden md:fixed top-12 left-0 w-72 h-full px-5 pt-20 md:flex justify-center items-center border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-black">
      {/* Inner container is absolutely positioned within the fixed container. */}
      <div className="absolute h-[90%] w-[100%] top-16  overflow-x-hidden overflow-y-auto flex flex-col justify-start gap-40 items-center">
        <div className="flex flex-col justify-start items-center gap-6  w-[100%]">
        <BarMap text="white" />
        </div>
       
        <div className="w-[100%]">
         <UserProfile/>
        </div>
      </div>
    </div>
  );
}
