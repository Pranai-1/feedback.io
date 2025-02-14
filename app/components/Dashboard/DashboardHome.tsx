"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { fetchUserData } from "@/lib/dataFetch";
import SpacesContent from "../SpaceContent";
import { SpacePropType } from "@/app/api/types";
import SideBarLarge from "../SideBar/SideBarLargeScreen";




export default async function DashboardHome() {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }
const spaces: SpacePropType[]=[]
  // const { user, spaces } = await fetchUserData(session.user?.email || "");

  // if (!user) {
  //   return redirect("/");
  // }

  return (
    <div className="relative h-[90.3vh] md:h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-[100%] bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
    <SideBarLarge />
    <SpacesContent spaces={spaces}/>
  </div>
  );
}
