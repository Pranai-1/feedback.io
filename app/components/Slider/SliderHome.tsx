"use client";
import { useEffect, useState } from "react";
import { FeedbackPropType } from "../../api/types";

import SliderCard from "./SliderCard";


export default function SliderHome({wallOfLove}:{wallOfLove:FeedbackPropType[]}){

    const [reviews, setReviews] = useState<FeedbackPropType[]>(wallOfLove)
 
    const [position, setPosition] = useState(0); 
    const [isPaused, setIsPaused] = useState(false);
    const[isSmallScreen,setIsSmallScreen]=useState<boolean>(false) 
    const[hover,setHover]=useState<number>(-1)


   useEffect(()=>{
        const handleResize=()=>{
            setIsSmallScreen(window.innerWidth<768)
        }
   handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)

   },[])

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
                setPosition((prev) =>prev >= -500 ? prev - 0.5 : 0); // Smooth translation rate (adjust as needed)
            }
            animationFrameId = requestAnimationFrame(updatePosition); // Repeat update at next frame
        };


        updatePosition(); // Start the animation loop

        return () => cancelAnimationFrame(animationFrameId); // Clean up on unmount
    
    }, [isPaused]);



    return (
        <div className={` ${isSmallScreen ? 'h-[400px] flex justify-start items-center'  :'h-max flex justify-center items-center'} w-[95%]  sm:m-2  sm:ml-8 mr-0 sm:p-2 overflow-hidden`}>
            <div className="h-[95%] bg-black rounded-md w-[90%] flex items-start justify-center md:justify-start gap-4 overflow-hidden relative p-2">
                <div
                   
                    className={`flex gap-4 justify-center items-center flex-col md:flex-row ${hover !=-1 ? ' md:bg-gray-200':''}`}
                    style={{
                        transform: isSmallScreen ? `translateY(${position}px)` : `translateX(${position}px)`, // Smooth translation
                        whiteSpace: "nowrap",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => {
                        setIsPaused(false)
                        setHover(-1)
                    }}
                >
                    {reviews.map((review, i) => ( // Duplicate for infinite loop
                        <SliderCard
                        key={i}
                        i={i}
                        review={review}
                        hover={hover}
                        setHover={setHover}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}