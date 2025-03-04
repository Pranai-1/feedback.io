import React from "react";
import BarMap from "./BarMap";

export default function SideBarLarge() {
  return (
    // Outer container is fixed relative to the viewport.
    <div className="hidden md:fixed top-12 left-0 w-72 h-full px-5 pt-20 md:flex justify-center items-center border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-black">
      {/* Inner container is absolutely positioned within the fixed container. */}
      <div className="absolute h-[100%] w-[100%] top-16 flex flex-col justify-start items-center gap-6 overflow-x-hidden overflow-y-auto ">
        <BarMap text="white" />
      </div>
    </div>
  );
}
