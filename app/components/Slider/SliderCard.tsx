import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import FeedbackStarsDisplay from "../../components/Feedback/FeedbackStarsDisplay";
import Image from "next/image";
import { AiFillTruck } from "react-icons/ai";
import { SetStateAction } from "react";
import { FeedbackPropType } from "@/app/api/types";


export default function SliderCard({i,hover,setHover,review}:{i:number,hover:number,setHover:React.Dispatch<SetStateAction<number>>,
    review:FeedbackPropType
}){
    return(
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
    )
}