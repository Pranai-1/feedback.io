"use client";

import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import { useRef, useState } from "react";
import FeedbackSideBar from "./FeedbackSideBar";
import NoFeedback from "./NoFeedback";
import FeedbackTextDisplay from "./FeedbackTextDisplay";
import EmbedWallOfLove from "../EmbedWidgets/EmbedWallOfLove";
import NotImplemented from "./NotImplemented";

export default function FeedbackHome({
  feedbacks,
  spaceName,
  wallOfLove,
  likedFeedbacks
}: {
  feedbacks: FeedbackPropType[];
  spaceName: string;
  wallOfLove: WallOfLoveProp[];
  likedFeedbacks:FeedbackPropType[]
}) {


  const [display, setDisplay] = useState("All"); 
  const contentRef = useRef<HTMLDivElement>(null);


  const handleSidebarClick = (section: string) => {
    setDisplay(section);

   
    if (window.innerWidth < 768) {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const renderContent = () => {
    switch (display) {
      case "All":
        return  <FeedbackTextDisplay
        feedbacks={feedbacks}
        spaceName={spaceName}
        wallOfLove={wallOfLove}
        performActions={true}
      />
      case "Text":
        return  <FeedbackTextDisplay
        feedbacks={feedbacks}
        spaceName={spaceName}
        wallOfLove={wallOfLove}
        performActions={true}
      />
      case "Video":
        return <NoFeedback spaceName={spaceName} />;
      case "Liked":
        return <FeedbackTextDisplay 
        wallOfLove={wallOfLove}
        feedbacks={likedFeedbacks}
        spaceName={spaceName}
        performActions={false}
        />;
        case "Wall of Love":
          return <EmbedWallOfLove
          likedFeedbacks={likedFeedbacks}
          spaceName={spaceName}/>
          case "Badge":
            return <NotImplemented/>
      default:
        return (
         <NotImplemented/>
        );
    }
  };

  return (
    <div className="w-full h-full md:flex md:flex-row justify-start items-center gap-2 pb-4">
   
      <div className="w-full md:w-[330px] h-auto md:h-full">
        <FeedbackSideBar handleSidebarClick={handleSidebarClick} />
      </div>

  
      <div ref={contentRef} className="w-full md:w-[80%] h-auto md:h-full flex justify-center items-center">
        {renderContent()}
      </div>
    </div>
  );
}
