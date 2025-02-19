
import React from "react";
import BarMap from "./BarMap";

export default function SideBarLarge(){
    return(
        <div className="md:flex hidden overflow-x-hidden flex-col  gap-6 fixed
        w-72 h-[100%] px-5 pt-20 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
     <BarMap text={"white"} />
        </div>
    )
}
