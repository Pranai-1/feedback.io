"use server";

import { Suspense } from "react";
import DashboardHome from "@/app/components/Dashboard/DashboardHome";
import { fetchUserData } from "@/lib/dataFetch";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};


export default async function Dashboard() {
  fetchUserData() //prefetching the data
  return (
    
   <Suspense fallback={<Loading/>}>
    <DashboardHome/>
   </Suspense>
  );
}
