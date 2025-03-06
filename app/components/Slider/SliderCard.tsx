import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import FeedbackStarsDisplay from "../../components/Feedback/FeedbackStarsDisplay";
import Image from "next/image";
import { AiFillTruck } from "react-icons/ai";
import { FeedbackPropType } from "@/app/api/types";
import { memo } from "react";

 function SliderCard({i,review,}:{i:number,review:FeedbackPropType,
}){
    return(
        <div key={i} className={` flex  justify-center  h-[300px] w-[270px] md:w-[300px]}`}
                        >
                            <NeonGradientCard>
                                <div className={`flex flex-col  justify-center items-start gap-2 w-[100%] overflow-hidden `}>
                                <div className={`flex ${review.images.length>1 ?'justify-start' : 'justify-center'} items-center  w-[100%] my-2 overflow-x-auto`}>
                                    {review.images.length > 0 ? (
                                        <>
                                        {review.images.map((image, index) => (
                                            <Image key={index} src={image} alt="Images" width={100} height={50} 
                                            style={{ objectFit: "cover" }}
                                            className="bg-gray-200 rounded-md mr-2 h-16"/>
                                        ))}
                                        </>
                                    ) : (
                                        <div className="h-16 w-32 bg-gray-200 rounded-md flex justify-center items-center">
                                        <p className="text-gray-600 font-medium text-xs">No Images Available</p>
                                        </div>
                                    )}
                                </div>

                                    <div className="flex justify-start items-start gap-2 ">
                                        {review.photo ? 
                                        <Image src={review.photo} alt="Profile Photo" width={40} height={40}   style={{ objectFit: "cover" }}
                                        className="bg-gray-200 rounded-full"/>  :
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
    )
}


export default memo(SliderCard)