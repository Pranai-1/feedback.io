import { CiCircleCheck, CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa6"
import FeedbackImagesDisplay from "./FeedbackImagesDisplay"
import FeedbackPersonalInfo from "./FeedbackPersonalInfo"
import FeedbackStarsDisplay from "./FeedbackStarsDisplay"
import { FeedbackPropType } from "@/app/api/types"
import { SetStateAction } from "react"

export default function FeedbackCard(
    {feedback,showConsentMessage,idx,setShowConsentMessage,liked,loading,handleWallOfLove,performActions}:
    {feedback:FeedbackPropType,showConsentMessage:number | null,idx:number,setShowConsentMessage:React.Dispatch<SetStateAction<number | null>>,
        liked:string[],loading:boolean,handleWallOfLove:(reviewId:string,spaceId:string)=>void,performActions:boolean
    }
){
    console.log(performActions)
    return(
        <div
                  className={` p-4 rounded-md w-[90%] h-max flex flex-col gap-4 bg-white hover:bg-[#FAF5FF]`}
                  key={feedback.id}
                >
                  <div className="flex justify-between items-center relative w-full px-4">
                    <p className="p-1 px-6 rounded-xl bg-blue-100 text-blue-600 font-bold">
                      Text
                    </p>

                    {feedback.consent && (
                      <>
                        {showConsentMessage === idx && (
                          <p className="text-white bg-gray-500 px-4 p-1 rounded-lg text-xs absolute -top-6 left-4">
                            User gave the permission
                          </p>
                        )}
                        <CiCircleCheck
                          className="absolute top-0 left-4 text-green-600 font-bold text-xl"
                          onMouseEnter={() => setShowConsentMessage(idx)}
                          onMouseLeave={() => setShowConsentMessage(null)}
                        />
                      </>
                    )}

                    {liked.includes(feedback.id) ? (
                      <FaHeart
                      className={`text-2xl text-red-600 ${
                        performActions
                          ? loading
                            ? "cursor-wait"
                            : "cursor-pointer"
                          : "cursor-default"
                      }`}
                      
                        onClick={() =>{
                          if(loading || !performActions)
                            return
                          handleWallOfLove(feedback.id, feedback.spaceId)
                        }
                         
                        }
                      />
                    ) : (
                      <CiHeart
                      className={`text-3xl text-red-600  ${loading ? " cursor-wait":"cursor-pointer"}`}
                        onClick={() =>{
                          if(loading)
                            return
                          handleWallOfLove(feedback.id, feedback.spaceId)
                        }
                         
                        }
                      />
                    )}
                  </div>
                 <FeedbackStarsDisplay starRating={feedback.starRating}/>
                 <p className="text-gray-600 pl-4">{feedback.reviewText}</p>
                 <FeedbackImagesDisplay images={feedback.images}/>
                 <FeedbackPersonalInfo feedback={feedback}/>
                </div>
    )
}