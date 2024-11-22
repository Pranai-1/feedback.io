
import { useContext } from "react";
import { BiSolidLike  } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";

import { MdModeEditOutline } from "react-icons/md";
import { SpaceCreationDetails } from "./SpaceCreationProvider";



export default function LivePreview(){
    const {spaceInputs,questions,extraFields}=useContext(SpaceCreationDetails)

    return(
        <div className={`md:w-[400px]  px-6 border-[1px] border-gray-500 rounded-lg flex flex-col justify-center items-center flex-wrap py-4  ${spaceInputs.darkTheme ? 'bg-[#25282C]':''}`}>
        <p className="bg-[#A7F3D0] rounded-full w-max text-[#059669] font-medium py-1 px-4 absolute top-[82px] left-8">Live preview - Testimonial page</p>
        <div className=" bg-blue-600 text-white p-2 rounded-full w-max text-3xl my-8"><BiSolidLike  /></div>
        <p className={`text-3xl font-bold  text-center mb-4 ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-[#55595F]'}`}>{spaceInputs.headerTitle.length==0 ? 'Header goes here...':spaceInputs.headerTitle}</p>
        <p className={` p-2 ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-[#747D86]'}`}>{spaceInputs.customMessage.length==0 ? 'Your custom message goes here...':spaceInputs.customMessage}</p>
        <div className="flex flex-col justify-start items-start w-full p-2">
        <p className={` font-bold text-left ${spaceInputs.darkTheme ? ' text-[#D9E3EA]':'text-black'}`}>QUESTIONS</p>
        {questions.map((question,index)=>(
            <li className={` font-[500] mt-1 ${spaceInputs.darkTheme ? ' text-[#9BA9B4]':'text-[#707D86]'}`} key={index}>{question.label}</li>
        ))}
        <div className="w-full mt-16 flex flex-col gap-2">
            
            <button className="bg-[#5D5DFF] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <CiVideoOn className="text-2xl"/>Record a video</button>
                <button className="bg-[#33363A] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <MdModeEditOutline className="text-2xl"/>Send in text</button>
        </div>
       
        </div>
       
        </div>
    )
}