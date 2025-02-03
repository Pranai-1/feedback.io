"use client";
import { useEffect, useState, useRef } from "react";
import { FeedbackPropType } from "../api/types";
import { reviewData } from "../static/reviewData";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Slider() {
    const [reviews, setReviews] = useState<FeedbackPropType[]>(
        reviewData as FeedbackPropType[]
    );
    console.log(reviews)
    const [position, setPosition] = useState(0); 
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(reviews.length<8){
            setReviews((prev)=>[...prev,...reviews])
        }
    },[reviews])

    useEffect(() => {

       //Approach 1
        // const interval = setInterval(() => {
        //     if (!isPaused) { 
        //         setPosition((prev) => prev >= -500 ? prev - 1 : 0); // Move left smoothly
        //     }
        // }, 50); 
        // return () => clearInterval(interval);


         //Approach 2
        let animationFrameId: number;
        const updatePosition = () => {
            if (!isPaused) {
                setPosition((prev) => prev - 0.5); // Smooth translation rate (adjust as needed)
            }
            animationFrameId = requestAnimationFrame(updatePosition); // Repeat update at next frame
        };


        updatePosition(); // Start the animation loop

        return () => cancelAnimationFrame(animationFrameId); // Clean up on unmount
    
    }, [isPaused]);
console.log(position)
    return (
        <div className="h-max w-[95%] flex justify-center items-center m-2 ml-8 mr-0 p-2 overflow-hidden">
            <div className="h-[300px] bg-black rounded-md w-[85%] flex items-center gap-4 overflow-hidden relative">
                <div
                    ref={scrollRef}
                    className="flex gap-4"
                    style={{
                        transform: `translateX(${position}px)`, // Smooth translation
                        whiteSpace: "nowrap",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {reviews.map((review, i) => ( // Duplicate for infinite loop
                        <div key={i} className="w-[200px] flex justify-center">
                            <NeonGradientCard>
                                <div>
                                    <p className="font-bold text-orange-600">{review.reviewText}</p>
                                </div>
                            </NeonGradientCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
