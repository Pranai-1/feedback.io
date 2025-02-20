"use server";

import { fetchUserData } from "@/lib/dataFetch";
import SpacesContent from "./SpaceContent";
import SideBarLarge from "../SideBar/SideBarLargeScreen";
import { SpacePropType } from "@/app/api/types";

export default async function DashboardHome() {
  const   spacePromise  =  fetchUserData();

  return (
    <div className="relative h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-full bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
      <SideBarLarge />
  
      <div className=" w-[95%] sm:w-full  md:ml-72 mt-[650px] xl:mt-0">
        <SpacesContent spacePromise={spacePromise} />
      </div>
    </div>
  );
}
