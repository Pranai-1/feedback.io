
import { memo, useState } from "react";
import ChooseWidget from "./ChooseWidget";
import DisplayWidget from "./DisplayWidget";
import { FeedbackPropType } from "@/app/api/types";



 function EmbedWallOfLove({spaceName,likedFeedbacks}:{spaceName:string,likedFeedbacks:FeedbackPropType[]}){

  const[submitted,setSubmitted]=useState(-1)
  
  if(likedFeedbacks.length==0)
    return <p className="w-[90%] flex justify-center items-center text-wrap text-center text-gray-200 text-xl font-medium p-2">
      Please add some feedbacks to wall of love to generate the widget</p>
      
    return(
        <div className="flex flex-col gap-4 justify-center items-center md:w-[90%] w-full md:ml-10 rounded-md py-2 ">
          {submitted==-1 ? 
          <ChooseWidget  setSubmitted={setSubmitted}/> :
          <DisplayWidget spaceName={spaceName} likedFeedbacks={likedFeedbacks} widgetType={submitted==1 ? "Auto Play":"Manual"}
          setSubmitted={setSubmitted}/>
          }
        </div>
    )
}

export default memo(EmbedWallOfLove)