"use client";

import { FeedbackPropType } from "@/app/api/types";
import { useEffect, useState, useCallback } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import SliderCard from "./SliderCard";

export default function ManualSliderHome({ wallOfLove }: { wallOfLove: FeedbackPropType[] }) {
  const [reviewsToDisplay, setReviewsToDisplay] = useState<FeedbackPropType[]>([]);
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Handle window resizing
  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (wallOfLove.length === 0) {
      setReviewsToDisplay([]);
      return;
    }

    if (isSmallScreen) {
      setReviewsToDisplay([wallOfLove[index]]);
    } else {
      setReviewsToDisplay(wallOfLove.slice(index, index + 2));
    }
  }, [index, isSmallScreen, wallOfLove]);


  const handleClick = useCallback(
    (type: "left" | "right") => {
      const incrementIndex = isSmallScreen ? 1 : 2;
  
      setIndex((prevIndex) => {
        if (type === "right" && prevIndex + incrementIndex < wallOfLove.length) {
          return prevIndex + incrementIndex;
        } else if (type === "left" && prevIndex - incrementIndex >= 0) {
          return prevIndex - incrementIndex;
        }
        return prevIndex;
      });
    },
    [isSmallScreen, wallOfLove.length] // Dependencies
  );
  

  return (
    <div className="w-full h-max mt-4 bg-black flex justify-center items-center relative">
      <div className="w-full xl:w-[70%] flex justify-center items-center gap-2 sm:gap-4 lg:gap-2">
        
        {index > 0 && wallOfLove.length > 0 && (
          <div
            className="w-max h-max bg-gray-200 rounded-xl p-1 md:p-2 cursor-pointer"
            onClick={() => handleClick("left")}
          >
            <FaArrowCircleLeft className="text-xl md:text-2xl" />
          </div>
        )}

        {reviewsToDisplay.length > 0 ? (
          <div className="w-[80%] md:w-[60%] md:m-2 p-2 flex justify-center items-center gap-8">
            {reviewsToDisplay.map((review, i) => (
              <SliderCard key={i} i={i} review={review} />
            ))}
          </div>
        ) : (
          <p className="text-white text-center w-full h-screen flex justify-center items-center">
            No feedbacks to display
          </p>
        )}

        {reviewsToDisplay.length > 0 && index + (isSmallScreen ? 1 : 2) < wallOfLove.length && (
          <div
            className="w-max h-max bg-gray-200 rounded-xl p-1 md:p-2 cursor-pointer"
            onClick={() => handleClick("right")}
          >
            <FaArrowCircleRight className="text-xl md:text-2xl" />
          </div>
        )}

      </div>
    </div>
  );
}
