"use client";

import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import { useRef, useState } from "react";
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
  wallOfLove: WallOfLoveProp[];
}) {
  const [display, setDisplay] = useState(""); 
  const contentRef = useRef<HTMLDivElement>(null);


  const handleSidebarClick = (section: string) => {
    setDisplay(section);

   
    if (window.innerWidth < 768) {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const renderContent = () => {
    switch (display) {
      case "Video":
        return <NoFeedback spaceName={spaceName} />;
      case "Liked":
        return <FeedbackLiked 
        wallOfLove={wallOfLove}
        feedbacks={feedbacks}
        spaceName={spaceName}
        />;
      default:
        return (
          <FeedbackTextDisplay
            feedbacks={feedbacks}
            spaceName={spaceName}
            wallOfLove={wallOfLove}
            performActions={true}
          />
        );
    }
  };

  return (
    <div className="w-full h-full md:flex md:flex-row justify-start items-start gap-2 pb-4">
   
      <div className="w-full md:w-1/4 h-auto md:h-full">
        <FeedbackSideBar handleSidebarClick={handleSidebarClick} />
      </div>

  
      <div ref={contentRef} className="w-full md:w-3/4 h-auto md:h-full">
        {renderContent()}
      </div>
    </div>
  );
}
