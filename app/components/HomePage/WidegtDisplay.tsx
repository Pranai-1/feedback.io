"use client"

import { BlurFade } from "@/components/magicui/blur-fade";
import {FeedbackWidget} from "feedback.io-widget"
export default function WidgetDisplay(){
    const time=0.5
    return(
        <div className="w-[100%]">
        
        <BlurFade
          delay={time * 1}
          inView
          className="w-[100%] h-[300px]  overflow-y-hidden"
        >
          <FeedbackWidget pageName="slider" spaceName="Feedback.io"/>
          </BlurFade>
        </div>
    )
}