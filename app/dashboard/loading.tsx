import { Meteors } from "@/components/magicui/meteors";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Loading(){
    return(
        <div className="w-[100%] h-max md:h-[87vh] pt-2  flex flex-col gap-12 justify-center items-center overflow-hidden relative">
           <Meteors ></Meteors>
            <p className="text-center text-gray-800 text-xl font-bold absolute z-50 top-1/2 ">Loading your spaces...</p>
         <div className="w-[100%] flex flex-col md:flex-row  justify-center items-center gap-8 "> 
            <div className="w-[67%] md:w-[20%] h-[180px] md:h-[360px] ">
            
            <NeonGradientCard />
            </div>  
            <div className="w-[67%] md:w-[20%] h-[180px] md:h-[360px]">
            <NeonGradientCard />
            </div>  
            <div className="w-[67%] md:w-[20%] h-[180px] md:h-[360px]">
            <NeonGradientCard />
            </div>  
       
       
         </div>
        </div>
      
    )
}
