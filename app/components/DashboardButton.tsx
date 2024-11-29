"use client"

import { useRouter } from "next/navigation"

export default function DashboardButton(){
    const router=useRouter()
    return(
        <>
         <button className="hover:bg-[#27272A] border border-gray-100 py-2 px-1 sm:p-2 rounded-lg  font-medium sm:px-4 text-xs sm:text-sm"
           onClick={()=>router.push("/dashboard")} >Dashboard</button>
        </>
    )
}