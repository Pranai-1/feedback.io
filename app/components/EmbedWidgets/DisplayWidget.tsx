import { FeedbackPropType } from "@/app/api/types";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

export default function DisplayWidget({spaceName,likedFeedbacks,widgetType}:{spaceName:string,likedFeedbacks:FeedbackPropType[],widgetType:string}){
    
    const embedCode = `
    <script src="https://feedback-io-xi.vercel.app/iframeResizer.min.js"></script>
    
    <iframe
      id="feedback-io-widget"
      src="https://feedback-io-xi.vercel.app/${widgetType === "Manual" ? "manualSlider" : "slider"}/${spaceName}"
      frameborder="0"
      scrolling="no"
      width="100%"
      style="border: none; min-height: 300px; width: 100%; display: block;">
    </iframe>
    
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        iFrameResize({ 
          log: false, 
          checkOrigin: ['https://feedback-io-xi.vercel.app'], 
          heightCalculationMethod: 'max' 
        }, "#feedback-io-widget");
      });
    </script>`;
    
      const [copied, setCopied] = useState(false);
    
      const handleCopy = () => {
        navigator.clipboard.writeText(embedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };


    
    return(
        <div className="bg-[#FFFFFF] rounded-md h-max w-[90%]  flex flex-col justify-center items-center gap-8 p-4 ">
            <p className="text-gray-100 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg shadow-lg text-center w-full animate-pulse">
                    🎉 Congratulations! Your widget has been successfully generated. 🚀
            </p>
            <div className="w-[90%] bg-gray-200 overflow-x-auto p-3 flex flex-col justify-center items-center relative">
        
                <div className="flex justify-center items-center flex-wrap w-[90%] ">
                <p className="text-center text-green-500 p-2 font-medium">Your {widgetType} Widget code</p>
                <div className="flex justify-between items-center mb-2 ">
              
                </div>
                <div className="relative overflow-x-auto p-2 bg-gray-100 rounded-md ">

                <p
                    className="flex justify-center items-center gap-2 bg-gray-200 p-2 rounded-md absolute z-20 top-2 right-1 cursor-pointer"
                    onClick={handleCopy}
                    >
                    {copied ? "Copied!" : (
                        <>
                        <MdContentCopy className="text-gray-600" /> Copy
                        </>
                    )}
                </p>

                    <pre className="whitespace-pre-wrap break-words text-sm">
                    <code>{embedCode}</code>
                    </pre>
             </div>
                </div>
                
            </div>

        </div>
    )
}