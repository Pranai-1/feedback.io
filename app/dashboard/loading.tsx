import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Loading(){
    return(
        <div className="w-full h-full flex justify-center items-center gap-8 ">   
        <NeonGradientCard className="w-[20%] h-[40%]"/>
        <NeonGradientCard className="w-[20%] h-[40%]"/>
        <NeonGradientCard className="w-[20%] h-[40%]"/>
         </div>
    )
}
