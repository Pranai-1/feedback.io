"use client"
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import dashboardImage from "../../../public/Images/HomeScreenImages/dashboard.png"
import feedbackImage from "../../../public/Images/HomeScreenImages/feedbacks.png"
import widgetTypeImage from "../../../public/Images/HomeScreenImages/widgetType.png"
import ReactWidgetImage from "../../../public/Images/HomeScreenImages/ReactWidget.png"
import { useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
const images=[dashboardImage,feedbackImage,widgetTypeImage,ReactWidgetImage]
export default function HomePageImages(){
    const[index,setIndex]=useState(0)
    let time=0.25

    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prev) => (prev < 3 ? prev + 1 : 0));
          }, 1000);
      
          return () => clearInterval(interval);
    },[])
   
    return(
      
        <div className="h-[400px] w-[90vw] bg-black flex justify-center items-center overflow-hidden">
  <BlurFade delay={time * 5} inView>
    <ShineBorder>
      <div className="relative w-[800px] h-[600px] flex justify-center items-center overflow-hidden">
        <Image
          src={images[index].src}
          width={1200}
          height={900}
          alt="Images"
          className="object-contain h-full w-full"
        />
      </div>
    </ShineBorder>
  </BlurFade>
</div>

     
    )
}