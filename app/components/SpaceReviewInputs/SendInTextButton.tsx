"use client";

import { SpacePropType } from "@/app/api/types";
import { useState } from "react";
import SendReviewInText from "./SendReviewInText";

export default function SendInTextButton({space}:{space:SpacePropType}){
    const[sendInText,setSendInText]=useState(false)
    return(
        <>
             <div className="w-full flex justify-center items-center gap-4 text-white mt-4">
          <button
            className="p-2 sm:px-6 rounded-md bg-blue-600"
            onClick={() => {
              setSendInText(true)
            }}
          >
            {space.textButtonText}
          </button>
          <button className="p-2 sm:px-4 rounded-md bg-red-600">
            {space.videoButtonText}
          </button>
          {sendInText ? (
            <SendReviewInText
            setSendInText={setSendInText}
            space={space}
            />
            ):null}
        </div>
        </>
    )
}