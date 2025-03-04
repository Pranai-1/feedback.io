// import { auth } from "@/auth";
// import axios from "axios";
// import { redirect } from "next/navigation";

import Navbar from "./components/HomePage/Navbar";
import { Particles } from "@/components/particles";
import Header from "./components/HomePage/Header";
import { ScrollProgress } from "@/components/scroll-progress";
import Footer from "./components/Footer";



export default async function Home() {


  return (
  <div className="bg-black">
     
    <Navbar/>
  
     <div className="w-[100%] h-screen bg-black relative">
    
     <Particles className="absolute z-80 h-full w-full"/> 
     <ScrollProgress className="top-[85px] z-10 rounded-lg" />
     <Header/>
     
    
     </div>
  </div>
  );
}
