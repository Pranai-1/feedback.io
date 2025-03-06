// import { auth } from "@/auth";
// import axios from "axios";
// import { redirect } from "next/navigation";

import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/HomePage/Navbar";


export default async function Home() {
  return (
  <div className="bg-black relative">
    <Navbar/>
    <HomePage/>
   
 
  </div>
  );
}
