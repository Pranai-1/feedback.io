import "server-only"

import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import { fetchUserData } from "./dataFetch";
import { prisma } from "./prisma";

export async function fetchFeedbacks(spaceName: string) {
     const {user}= await fetchUserData()
  
            if(!user)
              return {feedbacks:[],likedFeedbacks:[],wallOfLove:[]};
    const spaceDetails=await prisma.space.findUnique({
      where:{
        spaceName
      },
      include:{
        reviews:true,
        wallOfLove:true
      }
    })
  

    if(!spaceDetails)
      return {feedbacks:[],likedFeedbacks:[],wallOfLove:[]};

  const feedbacks: FeedbackPropType[] =
  spaceDetails.reviews && Array.isArray(spaceDetails.reviews) ? spaceDetails.reviews as FeedbackPropType[] : [];

  const wallOfLove: WallOfLoveProp[] =
  spaceDetails.wallOfLove && Array.isArray(spaceDetails.wallOfLove) ? spaceDetails.wallOfLove as WallOfLoveProp[]: [];

  if (wallOfLove.length === 0 || feedbacks.length === 0) {
    return {feedbacks,likedFeedbacks:[],wallOfLove};
  }

  const likedFeedbacks= feedbacks.filter((feedback) =>
    wallOfLove.some(
      (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
    )
  );
  return {feedbacks,likedFeedbacks,wallOfLove}
}
