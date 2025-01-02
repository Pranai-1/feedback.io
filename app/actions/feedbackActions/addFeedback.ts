"use server";

import { InitialStateType } from "@/app/api/types";
import { prisma } from "@/lib/prisma";

export default async function addFeedback(feedbackDetails: InitialStateType, spaceName: string) {
    console.log("bjbknk")
  try {
    const space = await prisma.space.findUnique({
      where: {
        spaceName,
      },
      select: {
        id: true,
      },
    });

    if (!space?.id) {
      throw new Error("Space doesn't exist");
    }

    // Prepare feedback object
    const feedbackObj = { ...feedbackDetails, spaceId: space.id };

    // Create feedback entry
    const feedback = await prisma.review.create({
      data:feedbackObj
    });

    if (!feedback) {
        return { success: false, message:"Failed to submit feedback" };
    }

    return { success: true, message:"Feedback submitted successfully" };
  } catch (error: unknown) {
    console.error("Error in addFeedback:", error);
    return { success: false, error: (error as Error).message || "Unknown error occurred" };
  }
}
