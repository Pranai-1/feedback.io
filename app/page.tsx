// import { auth } from "@/auth";
// import axios from "axios";
// import { redirect } from "next/navigation";

import { Particles } from "@/components/magicui/particles";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/HomePage/Navbar";


export default async function Home() {
  return (
  <div className="bg-black relative">
    <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
    <Navbar/>
    <HomePage/>
   
 
  </div>
  );
}
