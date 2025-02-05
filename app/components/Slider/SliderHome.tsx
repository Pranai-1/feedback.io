"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { FeedbackPropType } from "../../api/types";

import SliderCard from "./SliderCard";



export default function SliderHome({wallOfLove,width='full'}:{wallOfLove:FeedbackPropType[],width:string}){


    const reviews:FeedbackPropType[] = useMemo(() => {
        return wallOfLove.length < 8 
            ? Array.from({ length: Math.ceil(8 / wallOfLove.length) }, () => wallOfLove).flat()
            : wallOfLove;
    }, [wallOfLove]);


 
    const [position, setPosition] = useState(0); 
    const [isPaused, setIsPaused] = useState(false);
    const[isSmallScreen,setIsSmallScreen]=useState<boolean>(false) 

    const handleResize=()=>{
        setIsSmallScreen(window.innerWidth<768)
    }
    
   useEffect(()=>{
       
   handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)

   },[])

    

    const frameRef = useRef<number | null>(null); // Store animation frame ID

    useEffect(() => {
        const updatePosition = () => {
            setPosition((prev) => (prev >= -500 ? prev - 0.5 : 0));
            frameRef.current = requestAnimationFrame(updatePosition);
        };

        if (!isPaused) {
            frameRef.current = requestAnimationFrame(updatePosition);
        }

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [isPaused]); // Depend only on `isPaused`

    return (
        <div className={` ${isSmallScreen ? 'h-[400px] flex justify-start items-center'  :'h-max flex justify-start items-center'} w-${width}  overflow-hidden`}>
            <div className="h-[95%] bg-black rounded-md w-[100%] flex items-start justify-center md:justify-start gap-4 overflow-hidden relative p-2">
                <div
                   
                    className={`flex gap-4 justify-center items-center flex-col md:flex-row`}
                    style={{
                        transform: isSmallScreen ? `translateY(${position}px)` : `translateX(${position}px)`, // Smooth translation
                        whiteSpace: "nowrap",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => {
                        setIsPaused(false)
                    }}
                >
                    {reviews.map((review, i) => ( // Duplicate for infinite loop
                        <SliderCard
                        key={i}
                        i={i}
                        review={review}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}



    //useEffect(() => {

   
        // const interval = setInterval(() => {
        //     if (!isPaused) { 
        //         setPosition((prev) => prev >= -500 ? prev - 1 : 0); // Move left smoothly
        //     }
        // }, 50); 
        // return () => clearInterval(interval);



 