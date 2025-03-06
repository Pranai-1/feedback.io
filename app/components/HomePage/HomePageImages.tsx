"use client"
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import dashboardImage from "../../../public/Images/HomeScreenImages/dashboard.png"
import feedbackImage from "../../../public/Images/HomeScreenImages/feedbacks.png"
import widgetTypeImage from "../../../public/Images/HomeScreenImages/widgetType.png"
import ReactWidgetImage from "../../../public/Images/HomeScreenImages/ReactWidget.png"
import HtmlWidgetImage from "../../../public/Images/HomeScreenImages/HtmlWidget.png"
import { useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
const images=[dashboardImage,feedbackImage,widgetTypeImage,ReactWidgetImage,HtmlWidgetImage]
export default function HomePageImages(){
    const[index,setIndex]=useState(0)
    const time=0.25

    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prev) => (prev < 4 ? prev + 1 : 0));
          }, 1500);
      
          return () => clearInterval(interval);
    },[])
   
    return(
      
        <div className="h-max md:h-[450px] w-[90vw] bg-black flex justify-center items-center overflow-hidden">
  <BlurFade delay={time * 2} inView>
    <ShineBorder>
      <div className="relative w-max md:w-[800px] bg-black h-max md:h-[400px] flex justify-center items-center overflow-hidden">

      <Image
        src={images[index].src}
        alt="Images"
        width={0} // Ignored when using layout="responsive"
        height={0} // Ignored when using layout="responsive"
        layout="responsive"
        className="w-full h-full object-contain"
      />
      </div>
    </ShineBorder>
  </BlurFade>
</div>

     
    )
}