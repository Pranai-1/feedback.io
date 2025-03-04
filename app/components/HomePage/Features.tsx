import { BlurFade } from "@/components/magicui/blur-fade";
import Accordian from "../Accordian";
import FeatureSections from "../FeatureSection";
import { FeedbackWidget } from "feedback.io-widget";

export default function Features(){
    let time=0.25
    return(
        <div>
             <BlurFade
          delay={time * 6}
          inView
          className="flex md:hidden items-center justify-center"
        >
          <FeatureSections />
        </BlurFade>
        <BlurFade
          delay={time * 1}
          inView
          className="md:flex hidden  items-center justify-center"
        >
          <FeatureSections />
       
        </BlurFade>
        <BlurFade
          delay={time * 1}
          inView
          className="flex justify-center md:mb-10 mb-5"
        >
          <FeedbackWidget pageName="slider" spaceName="Feedback.io"/>
          </BlurFade>
                  <BlurFade
          delay={time * 1}
          inView
          className="flex justify-center md:mb-10 mb-5"
        >
          <Accordian />
        </BlurFade>
    
        </div>
    )
}