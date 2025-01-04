import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import FeedbackTextDisplay from "./FeedbackTextDisplay";
// import getWallOfLove from "@/app/actions/wallOfLoveActions/getWallOfLove";

export default  function  FeedbackLiked({wallOfLove,feedbacks,spaceName}:
    {wallOfLove:WallOfLoveProp[],feedbacks:FeedbackPropType[],spaceName:string}){
    // const likedFeedbacks=feedbacks.map((feedback)=>{
    //     let isLiked=false
    //     wallOfLove.map((loved)=>{
    //         if(loved.reviewId==feedback.id && loved.spaceId==feedback.spaceId)
    //             isLiked=true
    //         else
    //         isLiked=false
    //     })
    //     if(isLiked)
    //         return feedback
    //     else
    //     return null
    // }
       
    // )
    // const likedFeedbacks = feedbacks.map((feedback) => {
    //     const isLiked = wallOfLove.some(
    //         (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
    //     );
    //     return isLiked ? feedback : null;
    // });
//     let wallOfLove=
// const liked=await getWallOfLove(spaceName)
//     if (liked.success && Array.isArray(liked.wallOfLove)) {
//       wallOfLove = liked.wallOfLove as WallOfLoveProp[]; 
//     }
    const likedFeedbacks = feedbacks.filter((feedback) =>
        wallOfLove.some(
            (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
        )
    );
    
    console.log(likedFeedbacks)
    return(
         <FeedbackTextDisplay
                    feedbacks={likedFeedbacks}
                    spaceName={spaceName}
                    wallOfLove={wallOfLove}
                    performActions={false}
        />
    )
}