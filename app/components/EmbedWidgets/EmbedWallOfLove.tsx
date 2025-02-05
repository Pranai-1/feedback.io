
import { memo, useState } from "react";
import ChooseWidget from "./ChooseWidget";
import DisplayWidget from "./DisplayWidget";
import { FeedbackPropType } from "@/app/api/types";



 function EmbedWallOfLove({spaceName,likedFeedbacks}:{spaceName:string,likedFeedbacks:FeedbackPropType[]}){

  const[submitted,setSubmitted]=useState(false)
  
      
    return(
        <div className="flex flex-col gap-4 justify-center items-center md:w-[90%] w-full md:ml-10 rounded-md py-2 ">
          {!submitted ? 
          <ChooseWidget  setSubmitted={setSubmitted}/> :
          <DisplayWidget spaceName={spaceName} likedFeedbacks={likedFeedbacks}/>
          }
        </div>
    )
}

export default memo(EmbedWallOfLove)