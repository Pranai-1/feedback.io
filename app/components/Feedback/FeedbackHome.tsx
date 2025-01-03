"use client";

import { FeedbackPropType } from "@/app/api/types";
import { useState } from "react";
import FeedbackSideBar from "./FeedbackSideBar";
import NoFeedback from "./NoFeedback";
import FeedbackLiked from "./FeedbackLiked";
import FeedbackTextDisplay from "./FeedbackTextDisplay";

export default function FeedbackHome({
  feedbacks,
  spaceName,
}: {
  feedbacks: FeedbackPropType[];
  spaceName: string;
}) {
  const [display, setDisplay] = useState("");

  const renderContent = () => {
    switch (display) {
      case "Video":
        return <NoFeedback spaceName={spaceName} />;
      case "Liked":
        return <FeedbackLiked />;
      default:
        return <FeedbackTextDisplay feedbacks={feedbacks} spaceName={spaceName} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-start items-center gap-2">
      <FeedbackSideBar setDisplay={setDisplay} />
      <div className="w-full h-full">{renderContent()}</div>
    </div>
  );
}
