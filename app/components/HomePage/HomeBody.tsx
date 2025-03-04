


import Header from "./Header";
import { ScrollProgress } from "@/components/scroll-progress";

export default function HomeBody(){
    return(
        <div className="w-[100%] h-screen bg-black relative">
    
        {/* <Particles className="absolute z-80 h-full w-full"/>  */}
        <ScrollProgress className="top-[85px] z-10 rounded-lg" />
        <Header/>
        
       
        </div>
    )
}