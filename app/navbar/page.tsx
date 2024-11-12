"use client"
import { useRouter } from "next/navigation"

export default function Navbar(){
    const router=useRouter()
    return(
        <>
        <nav className="flex justify-between m-2 p-2 bg-black">
            <h1 className="text-white font-medium text-xl p-3">Feedback.io</h1>
           <div className="flex justify-center items-center gap-5 m-2 text-white">
            <button className="bg-[#212126]  p-2 rounded-lg font-medium px-4">Sign in</button>
            <button className="bg-[#4B4ACF] p-2 rounded-lg font-medium px-4"
            onClick={() => router.push('/signup')}>Signup</button>
           </div>
        </nav>
        </>
    )
}