"use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreateButton from "../components/CreateButton";



export default async function Dashboard(){

  
    const session=await auth()
    if(!session)
      return redirect("/")
    return(
      <div className="relative h-screen w-[100%]">
      <p className="w-max">you are in dashboard</p>
   
     <CreateButton/>
      </div>
        
    )
}