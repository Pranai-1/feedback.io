"use server";

import { InitialStateType } from "@/app/api/types";
import userCheck from "../userCheck";
import { prisma } from "@/lib/prisma";

export default async function addFeedback(feedbackDetails: InitialStateType, spaceName: string) {
    console.log("bjbknk")
  try {
    
    await userCheck();


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
      throw new Error("Failed to create feedback");
    }

    return { success: true, feedback };
  } catch (error: unknown) {
    console.error("Error in addFeedback:", error);
    return { success: false, error: (error as Error).message || "Unknown error occurred" };
  }
}
