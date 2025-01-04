"use client";

import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import { useState } from "react";
import FeedbackSideBar from "./FeedbackSideBar";
import NoFeedback from "./NoFeedback";
import FeedbackLiked from "./FeedbackLiked";
import FeedbackTextDisplay from "./FeedbackTextDisplay";

export default function FeedbackHome({
  feedbacks,
  spaceName,
  wallOfLove,
}: {
  feedbacks: FeedbackPropType[];
  spaceName: string;
  wallOfLove:WallOfLoveProp[]
}) {
  const [display, setDisplay] = useState("");

  const renderContent = () => {
    switch (display) {
      case "Video":
        return <NoFeedback spaceName={spaceName} />;
      case "Liked":
        return <FeedbackLiked />;
      default:
        return <FeedbackTextDisplay
         feedbacks={feedbacks} 
         spaceName={spaceName} 
         wallOfLove={wallOfLove}
         />;
    }
  };

  return (
    <div className="w-full h-full md:flex md:flex-row  justify-start items-start gap-2">
  
  <div className="w-full md:w-1/4 h-auto md:h-full">
    <FeedbackSideBar setDisplay={setDisplay} />
  </div>


  <div className="w-full md:w-3/4 h-auto ">
    {renderContent()}
  </div>
</div>

  );
}
