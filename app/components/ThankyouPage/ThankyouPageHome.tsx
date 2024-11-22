
import { useState } from "react"
import cheersImage from "../../../public/cheers.webp"

export default function ThankyouPageHome(){
const[imageSource,setImageSource]=useState(cheersImage.src)

    return(
        <div>
        <p className="mt-10 font-bold text-center text-black text-3xl">Customize thank you page</p>
        <p className="text-[#707D86]  text-md text-center mt-4 "> Add your personalized message to show your appreciate</p>
        <div className="flex justify-center items-center gap-2 w-max mt-4">
            <div className="flex justify-start items-center gap-2">
                    <label htmlFor="cheersImage" className="text-[#1a1b1c]  flex items-center gap-1">
                    Image
                    <p className="text-red-600">*</p>
                    </label>
                    <input
                    className="mt-1"
                    type="checkbox"
                    name="cheersImage"
                    id="cheersImage"
                    />
            </div>
                <p className="text-sm text-gray-700">Hide the image?</p>
        </div>
        <div className="mt-4">
        <img src={imageSource} className="w-[80px]"/>
        </div>

 <div className="flex flex-col justify-start items-start mt-4 gap-2">
    <label htmlFor="thankyouTitle" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Thank you title
            <p className="text-red-600">*</p></label>
            <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1" type="text" name="thankyouTitle" id="thankyouTitle"
            placeholder="Thank you!"
          />

    <label htmlFor="thankyouMessage" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Thank you message
            <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-1 h-24 rounded-lg mt-1"  name="thankyouMessage" id="thankyouMessage"
            placeholder="Thank you so much for your shoutout! It means a ton for us! 🙏"
          ></textarea>

   </div>
        </div>
    )
}