import "server-only"

import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import { fetchUserData } from "./dataFetch";
import { prisma } from "./prisma";

export async function fetchFeedbacks(spaceName: string) {
     const {user}= await fetchUserData()
    
            if(!user)
            return [];
    const reviews=await prisma.space.findUnique({
      where:{
        spaceName
      },
      include:{
        reviews:true,
        wallOfLove:true
      }
    })
 
    if(!reviews)
      return [];

  const feedbacks: FeedbackPropType[] =
   reviews.reviews && Array.isArray(reviews.reviews) ? reviews.reviews as FeedbackPropType[] : [];

  const wallOfLove: WallOfLoveProp[] =
  reviews.wallOfLove && Array.isArray(reviews.wallOfLove) ? reviews.wallOfLove as WallOfLoveProp[]: [];

  if (wallOfLove.length === 0 || feedbacks.length === 0) {
    return [];
  }

  const likedFeedbacks= feedbacks.filter((feedback) =>
    wallOfLove.some(
      (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
    )
  );
  return {feedbacks,likedFeedbacks,wallOfLove}
}
