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

  if (display === "Video") {
    return (
      <div className="w-full h-full flex justify-start items-center gap-2">
        <FeedbackSideBar setDisplay={setDisplay} />
        <div className="w-full h-full">
          <NoFeedback spaceName={spaceName} />
        </div>
      </div>
    );
  }

  if (display === "Liked") {
    return (
      <div className="w-full h-full flex justify-start items-center gap-2">
        <FeedbackSideBar setDisplay={setDisplay} />
        <div className="w-full h-full">
          <FeedbackLiked />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-start items-center gap-2">
      <FeedbackSideBar setDisplay={setDisplay} />
      <div className="w-full h-full">
        <FeedbackTextDisplay feedbacks={feedbacks} spaceName={spaceName} />
      </div>
    </div>
  );
}
