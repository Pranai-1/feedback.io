"use client";
import { useEffect, useState, useRef } from "react";
import { FeedbackPropType } from "../api/types";
import { reviewData } from "../static/reviewData";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import FeedbackStarsDisplay from "../components/Feedback/FeedbackStarsDisplay";
import Image from "next/image";
import { AiFillTruck } from "react-icons/ai";

export default function Slider() {
    const [reviews, setReviews] = useState<FeedbackPropType[]>(
        reviewData as FeedbackPropType[]
    );
 
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
console.log(hover,isSmallScreen)
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
                        <div key={i} className={` flex  justify-center  h-[100%] ${hover==i ? 'w-[300px] md:w-[400px] md:border-8 bg-[##A6E0E6] rounded-xl':'w-[270px] md:w-[300px]'}`}
                        onMouseEnter={()=>setHover(i)}
                        onMouseLeave={() => setHover(-1)}
                        >
                            <NeonGradientCard>
                                <div className={`flex flex-col  justify-center items-start w-[100%] overflow-hidden `}>
                                <div className={`flex ${review.images.length>1 ?'justify-start' : 'justify-center'} items-center  w-[100%] my-2  overflow-x-auto`}>
                                    {review.images.length > 0 ? (
                                        <>
                                        {review.images.map((image, index) => (
                                            <Image key={index} src={image} alt="Images" width={100} height={50} className="bg-gray-200 rounded-md mr-2 h-20"/>
                                        ))}
                                        </>
                                    ) : (
                                        <div className="h-20 w-32 bg-gray-200 rounded-md flex justify-center items-center">
                                        <p className="text-black text-xs">No Images Available</p>
                                        </div>
                                    )}
                                </div>

                                    <div className="flex justify-start items-start gap-4 mt-4 mb-2">
                                        {review.photo ? 
                                        <Image src={review.photo} alt="Profile Photo" width={40} height={40} className="bg-gray-200 rounded-full"/>  :
                                         <AiFillTruck  className="h-10 w-10 bg-gray-200 rounded-full"/>}
                                       <p className="text-gray-800 pt-2 font-medium">{review.name}</p>
                                       
                                    </div>
                                    <div className="w-[100%] ml-8 flex flex-col justify-center items-center">
                                    <FeedbackStarsDisplay starRating={review.starRating}/>
                                    </div>
                                    <div className="w-full mt-4 mb-6 max-h-[80px] overflow-y-auto border border-gray-300 p-2 rounded-lg">
                                    <p 
                                     className="text-sm text-orange-600 whitespace-pre-wrap break-words text-center">

                                        {review.reviewText || "No review provided."}
                                        </p>
                                    </div>
                                    
                                </div>
                            </NeonGradientCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
