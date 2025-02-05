import { FeedbackPropType } from "@/app/api/types";
import { useState } from "react";
import { MdContentCopy, MdCheckCircle } from "react-icons/md";

export default function DisplayWidget({
  spaceName,
  likedFeedbacks,
  widgetType,
}: {
  spaceName: string;
  likedFeedbacks: FeedbackPropType[];
  widgetType: string;
}) {
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

  return (
    <div className="bg-white rounded-xl shadow-lg w-[90%] md:w-[70%] flex flex-col justify-center items-center gap-6 p-6 border border-gray-200">
      {/* 🎉 Success Message */}
      <p className="text-gray-100 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg shadow-lg text-center w-full animate-pulse">
        🎉 Your widget has been successfully generated! 🚀
      </p>

      {/* Code Display Box */}
      <div className="w-full bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col items-center relative">
        <p className="text-center text-lg font-medium text-indigo-600 mb-2">
          Your {widgetType} Widget Code
        </p>

        {/* Copy Button */}
        <button
          className="absolute top-3 right-3 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-all shadow-md"
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
    </div>
  );
}
