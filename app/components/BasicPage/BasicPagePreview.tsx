import { useContext } from "react";
import { BiSolidLike  } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";

import { MdModeEditOutline } from "react-icons/md";
import { SpaceCreationDetails } from "../SpaceCreationProvider";


export default function BasicPagePreview(){
    const {spaceInputs,questions}=useContext(SpaceCreationDetails)
    return(
        <>
        <div className=" bg-blue-600 text-white p-2 rounded-full w-max text-3xl my-8"><BiSolidLike  /></div>
        <p className={`text-3xl font-bold  text-center mb-4 ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-[#55595F]'}`}>{spaceInputs.headerTitle.length==0 ? 'Header goes here...':spaceInputs.headerTitle}</p>
        <p className={` sm:p-2 ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-[#747D86]'}`}>{spaceInputs.customMessage.length==0 ? 'Your custom message goes here...':spaceInputs.customMessage}</p>
        <div className="flex flex-col justify-start items-start w-full p-2">
        <p className={` font-bold text-left ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-black'}`}>QUESTIONS</p>
        {questions.map((question,index)=>(
            <li className={` font-[500] mt-1 ${spaceInputs.darkTheme ? ' text-[#9BA9B4]':'text-[#707D86]'}`} key={index}>{question.label}</li>
        ))}
        <div className="w-full mt-16 flex flex-col gap-2">
            
            <button className="bg-[#5D5DFF] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <CiVideoOn className="text-2xl"/>{spaceInputs.videoButtonText.length==0 ? 'Record a video':spaceInputs.videoButtonText}</button>
                <button className="bg-[#33363A] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <MdModeEditOutline className="text-2xl"/>{spaceInputs.textButtonText.length==0 ? 'Send in text':spaceInputs.textButtonText}</button>
        </div>
       
        </div>
        </>
    )
}