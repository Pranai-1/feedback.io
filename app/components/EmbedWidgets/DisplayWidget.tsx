"use client";
import { FeedbackPropType } from "@/app/api/types";
import embeddedData from "@/app/static/embeddedData";
import { SetStateAction, useState } from "react";
import { MdContentCopy, MdCheckCircle } from "react-icons/md";

export default function DisplayWidget({
  spaceName,
  likedFeedbacks,
  widgetType,
  setSubmitted
}: {
  spaceName: string;
  likedFeedbacks: FeedbackPropType[];
  widgetType: string;
  setSubmitted:React.Dispatch<SetStateAction<number>>
}) {

  const pageName=widgetType=="Manual" ? "manualSlider" : "slider"

  const embedCode = embeddedData(pageName,"HTML",spaceName)


  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
console.log(likedFeedbacks)
  return (
    <div className="bg-white rounded-xl shadow-lg w-[90%] lg:w-[70%] flex flex-col justify-center items-center gap-6 p-6 border border-gray-200">
    
      <p className="text-gray-100 text-sm lg:text-base bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg shadow-lg text-center w-full animate-pulse">
        🎉 Your widget has been successfully generated! 🚀
      </p>

     
      <div className="w-full bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col items-center relative">
        <p className="text-center text-sm lg:text-lg font-medium text-indigo-600 mb-2">
          Your {widgetType} Widget Code
        </p>

     
        <button
          className="absolute  text-xs lg:top-3 lg:right-3 top-1 right-1 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white md:text-sm font-medium py-1.5 px-1 md:px-3 rounded-lg transition-all shadow-md"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <MdCheckCircle className="text-green-300" /> Copied!
            </>
          ) : (
            <>
              <MdContentCopy className="text-white" /> Copy
            </>
          )}
        </button>

        {/* Code Block */}
        <div className="w-full bg-gray-900 text-green-400 font-mono text-sm rounded-lg p-4 overflow-x-auto shadow-inner">
          <pre className="whitespace-pre-wrap break-words">
            <code>{embedCode}</code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-full gap-8">
      <button className=" bg-indigo-600 p-2 px-4 text-gray-100 font-medium rounded-md"
      onClick={()=>setSubmitted(-1)}>Back</button>
     <button
       className="bg-green-600 p-2 px-4 text-gray-100 font-medium rounded-md"
      onClick={() => window.open(`/${pageName}/${spaceName}`, "_blank")}
    >
      Live Demo
    </button>

      </div>
    </div>
  );
}
