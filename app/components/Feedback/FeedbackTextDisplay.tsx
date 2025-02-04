import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import NoFeedback from "./NoFeedback";
import { useState } from "react";
import removeFromWallOfLove from "@/app/actions/wallOfLoveActions/removeFromWallOfLove";
import { toast } from "react-toastify";
import addToWallOfLove from "@/app/actions/wallOfLoveActions/addToWallOfLove";
import FeedbackCard from "./FeedbackCard";


export default function FeedbackTextDisplay({
  feedbacks,
  spaceName,
  wallOfLove,
  performActions
}: {
  feedbacks: FeedbackPropType[];
  spaceName: string;
  wallOfLove: WallOfLoveProp[];
  performActions:boolean
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
       
            <div className={`flex flex-col gap-4 justify-center items-center w-[90%] ml-10 rounded-md py-2 flex-wrap`}>
              {feedbacks.map((feedback, idx) => (
                <FeedbackCard
                feedback={feedback}
                idx={idx}
                setShowConsentMessage={setShowConsentMessage}
                liked={liked}
                loading={loading}
                showConsentMessage={showConsentMessage}
                handleWallOfLove={handleWallOfLove}
                key={idx}
                performActions={performActions}
                />
              ))}
            </div>
          )}
        
    </div>
  );
}
