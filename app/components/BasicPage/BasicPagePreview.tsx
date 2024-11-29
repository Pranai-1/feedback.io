import { useContext } from "react";
import { BiSolidLike  } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";

import { MdModeEditOutline } from "react-icons/md";
import { SpaceCreationDetails } from "../SpaceCreationProvider";
import Image from "next/image";


export default function BasicPagePreview(){
    const {spaceInputs,questions}=useContext(SpaceCreationDetails)
    return(
        <div className="w-[100%] flex flex-col justify-center">
        <div className="flex justify-center items-center  w-full  my-4">
            {spaceInputs.spaceLogo.length==0 ? (
               <BiSolidLike  className="bg-blue-600 text-white p-2 rounded-full w-max text-6xl"/>
            ):(
                <Image 
                src={spaceInputs.spaceLogo} 
                alt="Logo..." 
                className="w-[80px] sm:w-[240px] rounded-full" 
                width={240} 
                height={120}
              />
              
            )}
           
            </div>
        <p className={`text-lg sm:text-3xl font-bold  text-center mb-4 max-w-[95%] break-words  ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-black'}`}>{spaceInputs.headerTitle.length==0 ? 'Header goes here...':spaceInputs.headerTitle}</p>
        <p className={` sm:p-2  max-w-[95%] break-words text-xs sm:text-base ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-[#747D86]'}`}>{spaceInputs.customMessage.length==0 ? 'Your custom message goes here...':spaceInputs.customMessage}</p>
        <div className="flex flex-col justify-start items-start w-full p-2">
        <p className={` font-bold text-left text-sm sm:text-base ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-black'}`}>QUESTIONS</p>
        {questions.map((question,index)=>(
            <li className={` font-[500] mt-1 text-xs sm:text-base max-w-[95%] break-words ${spaceInputs.darkTheme ? ' text-[#9BA9B4]':'text-[#707D86]'}`} key={index}>{question.label}</li>
        ))}
        <div className="w-full mt-10 flex flex-col gap-2">
            
            <button className="bg-[#5D5DFF] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <CiVideoOn className="text-2xl"/>{spaceInputs.videoButtonText.length==0 ? 'Record a video':spaceInputs.videoButtonText}</button>
                <button className="bg-[#33363A] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <MdModeEditOutline className="text-2xl"/>{spaceInputs.textButtonText.length==0 ? 'Send in text':spaceInputs.textButtonText}</button>
        </div>
       
        </div>
        </div>
    )
}