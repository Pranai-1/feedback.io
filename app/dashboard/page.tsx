"use server";

import { Suspense } from "react";
import DashboardHome from "@/app/components/Dashboard/DashboardHome";
import { LoadingSpaces } from "../components/LoadingComponent";




export default async function Dashboard() {
 

  return (
   <Suspense fallback={<LoadingSpaces/>}>
    <DashboardHome/>
   </Suspense>
  );
}
