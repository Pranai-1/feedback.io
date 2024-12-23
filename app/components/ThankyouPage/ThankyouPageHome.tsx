

import { useContext, useState } from "react"
import cheersImage from "../../../public/cheers.webp"
import { SpaceCreationDetails } from "../SpaceCreationProvider"
import InputComponent from "../InputComponent"
import Image from "next/image"

export default function ThankyouPageHome(){
    const{spaceInputs,handleSpaceInputs}=useContext(SpaceCreationDetails)
const[selected,setSelected]=useState(-1)

console.log(selected)
    return(
        <div onClick={(e)=>{
            e.stopPropagation()
            setSelected(-1)
           
            }}>
        <p className="text-[#25282C] p-2 text-xl sm:text-3xl font-bold my-4 sm:my-6 w-full text-center">Customize thank you page</p>
        <p className="text-[#55595F] text-center w-full text-xs sm:text-base"> Add your personalized message to show your appreciate</p>
        <div className="flex justify-center items-center gap-2 w-max mt-4">
            <div className="flex justify-start items-center gap-2">
                    <label htmlFor="cheersImage" className="text-[#1a1b1c]  flex items-center gap-1">
                    Image
                    <p className="text-red-600">*</p>
                    </label>
                    <input
                    onChange={(e)=>{
                        handleSpaceInputs("disableCheersImage",e.target.checked)
                    }}
                    checked={spaceInputs.disableCheersImage}
                    className="mt-1"
                    type="checkbox"
                    name="cheersImage"
                    id="cheersImage"
                    />
            </div>
                <p className="text-sm text-gray-700">Hide the image?</p>
        </div>
        <div className="mt-4">
        <Image
  src={cheersImage.src}
  className="w-[80px]"
  alt="cheers image"
  width={80}  
  height={80}  
/>
        </div>

       


 <div className="flex flex-col justify-start items-start mt-4 gap-2">
  
              <InputComponent title="Thank you title" 
                placeholder="Thank you!" 
                id={1} 
                clicked={selected} 
                setClicked={setSelected} 
                type="text"
                name="thankyouTitle"
                 required={false}
                 value={spaceInputs.thankyouTitle}
                 handleSpaceInputs={handleSpaceInputs}
                 /> 

    <label htmlFor="thankyouMessage" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2  text-sm sm:text-base font-medium"

    >Thank you message
            <p className="text-red-600">*</p></label>
            <textarea
                onClick={(e)=>{
                    e.stopPropagation()
                    setSelected(2)
                    
                }}

             className=
             {`p-1 h-24 rounded-lg mt-1 w-full text-xs sm:text-base  ${
                selected === 2 ? "border-2 border-blue-500 outline-none" : "border-2 border-gray-300"
              }`}
            name="thankyouMessage" id="thankyouMessage"
            placeholder="Thank you so much for your shoutout! It means a ton for us! 🙏"
            value={spaceInputs.thankyouDescription}
            onChange={(e)=>{
                e.stopPropagation()
                handleSpaceInputs("thankyouDescription",e.target.value)
            }}
          ></textarea>

   </div>
        </div>
    )
}