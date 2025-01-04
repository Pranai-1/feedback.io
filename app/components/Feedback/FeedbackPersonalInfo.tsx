import { FeedbackPropType } from "@/app/api/types";
import Image from "next/image";

export default function FeedbackPersonalInfo({feedback}:{feedback:FeedbackPropType}){
    return(
      <div className="w-full flex justify-center items-center gap-12">
        <div className="flex flex-col gap-4 justify-start items-center">
          <p className="text-gray-600 font-medium text-sm">Name</p>
          <div className="flex gap-4">
          {feedback.photo.length>0 ? (
              <Image src={feedback.photo} alt="Profile photo" height={64} width={64} className=" rounded-xl"/>
          ):(
              <span className="rounded-xl bg-gray-600 h-16 w-16"></span>
          )}
          <p className="text-gray-800 text-xs">{feedback.name}</p>
          </div>
         <p className="text-gray-600 font-medium text-sm">Submitted at</p>
         <p>{feedback.submittedAt || new Date().toLocaleString()}</p>

        </div>
      </div>
    )
}