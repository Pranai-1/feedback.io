
"use client"
import { useEffect, useState } from "react"
import { FeedbackPropType } from "../api/types"
import { reviewData } from "../static/reviewData"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import "./styles.css";
export default function Slider(){
const[reviews,setReviews]=useState<FeedbackPropType[]>(reviewData.slice(4) as FeedbackPropType[])

console.log(reviews)
useEffect(()=>{
const interval=setInterval(()=>{
  if(reviews.length<6)
    setReviews((prev)=>[...prev,...reviews])
},2000)
return ()=>clearInterval(interval)
})

    return (
        <div className="h-max w-[95%] flex justify-center items-center m-2 ml-8 mr-0 p-2 overflow-hidden">
            
        <div className="h-[300px] bg-black rounded-md w-[85%] flex items-center gap-4 overflow-hidden">
            <div className="flex gap-4 animate-x ml-2  w-[90%]">
                {reviews.map((review, i) => (
                    <div key={i} className="min-w-[25%] flex justify-center">
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
};

// const[review,setReviews]=useState<FeedbackPropType[]>()

// useEffect(()=>{
   
// },[])

// function reviewFilter(){
//     if(reviewData.length<=3){
//         setReviews(reviewData as FeedbackPropType[])
//     }else{
        
//     }
// }


    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
    //     }, 3000); // Change every 3 seconds

    //     return () => clearInterval(interval);
    // }, [reviewData]);