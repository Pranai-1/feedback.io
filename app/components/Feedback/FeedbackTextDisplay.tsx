import { FeedbackPropType } from "@/app/api/types";
import NoFeedback from "./NoFeedback";

export default function FeedbackTextDisplay({feedbacks,spaceName}:{feedbacks:FeedbackPropType[],spaceName:string}){
    return(
       <div className="w-full h-full">
             {feedbacks.length === 0 ? (
               <NoFeedback spaceName={spaceName} />
             ) : (
              <p className="textr-4xl text-white">Showing text feedback</p>
             )}
           </div>
    )
}