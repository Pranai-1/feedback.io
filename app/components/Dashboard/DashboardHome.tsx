"use server";

import { fetchUserData } from "@/lib/dataFetch";
import SpacesContent from "./SpaceContent";
import SideBarLarge from "../SideBar/SideBarLargeScreen";
import {  SpacePropType } from "@/app/api/types";


export default async function DashboardHome() {
  const {spaces}  = await fetchUserData();

  return (
    <div className="relative h-max  min-h-[87.5vh] bg-[#09090B] flex  py-4 items-start md:justify-start justify-center">
      <SideBarLarge />
  
      <div className=" w-[95%] sm:w-full  md:ml-72  bg-[#09090B]">
        <SpacesContent spaces={spaces as SpacePropType[]} />
      </div>
    </div>
  );
}
