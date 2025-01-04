import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import NoFeedback from "./NoFeedback";
import { CiCircleCheck } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import removeFromWallOfLove from "@/app/actions/wallOfLoveActions/removeFromWallOfLove";
import { toast } from "react-toastify";
import addToWallOfLove from "@/app/actions/wallOfLoveActions/addToWallOfLove";
import FeedbackStarsDisplay from "./FeedbackStarsDisplay";
import FeedbackImagesDisplay from "./FeedbackImagesDisplay";
import FeedbackPersonalInfo from "./FeedbackPersonalInfo";


export default function FeedbackTextDisplay({
  feedbacks,
  spaceName,
  wallOfLove,
}: {
  feedbacks: FeedbackPropType[];
  spaceName: string;
  wallOfLove: WallOfLoveProp[];
}) {
  const [liked, setLiked] = useState<string[]>(
    wallOfLove?.map((item) => item.reviewId) || []
  );
  const [loading, setLoading] = useState(false);
  
  const [showConsentMessage, setShowConsentMessage] = useState<number | null>(
    null
  );

  async function handleWallOfLove(reviewId: string, spaceId: string) {
    setLoading(true);


    const isRemoving = liked.includes(reviewId);
    const apiAction = isRemoving ? removeFromWallOfLove : addToWallOfLove;
    const successMessage = isRemoving
      ? "Removed from wall of love successfully"
      : "Added to wall of love successfully";
    const errorMessage = isRemoving
      ? "Failed to remove from wall of love"
      : "Failed to add to wall of love";

    try {
   
      const response = await apiAction(spaceId, reviewId);

      if (response.success) {
        setLiked((prev) =>
          isRemoving
            ? prev.filter((id) => id !== reviewId)
            : [...prev, reviewId]
        );
        toast.success(response.message || successMessage);
      } else {
        toast.error(response.message || errorMessage);
      }
    } catch (error) {
      console.error(error);
      toast.error(errorMessage);
    } finally {
    
     setLoading(false)
    }
  }

  return (
    <div className="w-full h-full">
      {feedbacks.length === 0 ? (
        <NoFeedback spaceName={spaceName} />
      ) : (
       
            <div className={`flex flex-col gap-4 justify-center items-center w-full rounded-md py-2`}>
              {feedbacks.map((feedback, idx) => (
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
                        className={`text-2xl text-red-600  ${loading ? " cursor-wait":"cursor-pointer"}`}
                        onClick={() =>{
                          if(loading)
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
              ))}
            </div>
          )}
        
    </div>
  );
}
