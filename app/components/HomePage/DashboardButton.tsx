"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardButton(){
    const router=useRouter()
    return(
        <>
        <Link href="/dashboard" className="hidden sm:flex hover:bg-[#27272A] border border-gray-100 py-2 px-1 sm:p-2 rounded-lg  font-medium sm:px-4 text-xs sm:text-sm"
        >Dashboard</Link>
         {/* <button className="hidden sm:flex hover:bg-[#27272A] border border-gray-100 py-2 px-1 sm:p-2 rounded-lg  font-medium sm:px-4 text-xs sm:text-sm"
           onClick={()=>router.push("/dashboard")} >Dashboard</button> */}
        </>
    )
}