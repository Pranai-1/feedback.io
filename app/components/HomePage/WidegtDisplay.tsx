"use client"

import {FeedbackWidget} from "feedback.io-widget"
export default function WidgetDisplay(){

    return(
        <div className="w-[100%]">
        
     
          <FeedbackWidget pageName="slider" spaceName="Feedback.io"/>
         
        </div>
    )
}