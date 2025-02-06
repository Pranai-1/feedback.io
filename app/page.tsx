// import { auth } from "@/auth";
// import axios from "axios";
// import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import { Particles } from "@/components/particles";
import Header from "./components/HomePage/Header";
import { ScrollProgress } from "@/components/scroll-progress";



export default async function Home() {
  const session=await auth()
  if(session)
    return redirect("/dashboard")
  // const userDetails = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userDetails`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => res.json());

  // console.log(userDetails);
  return (
  <div>
    <Navbar/>
     <div className="w-[100%] h-screen bg-black relative">
    
     <Particles className="absolute z-80 h-full w-full"/> 
     <ScrollProgress className="top-[85px] z-10 rounded-lg" />
     <Header/>
     
    
     </div>
  </div>
  );
}
