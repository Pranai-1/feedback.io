
import React from "react";
import BarMap from "./BarMap";

export default function SideBarLarge(){
    return(
        <div className="md:flex hidden overflow-x-hidden flex-col  gap-4
        w-64 h-full px-5 pt-3 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
     <BarMap/>
        </div>
    )
}