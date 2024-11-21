
import { BiSolidLike  } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";

import { MdModeEditOutline } from "react-icons/md";


const questions=["Who are you / what are you working on?",
    "How has [our product / service] helped you?",
    "What is the best thing about [our product / service]?"
]
export default function LivePreview(){
    
    return(
        <div className="md:w-[400px] px-6 border-[1px] border-gray-500 rounded-lg flex flex-col justify-center items-center flex-wrap py-4">
        <p className="bg-[#A7F3D0] p-2 rounded-lg w-max text-[#059669] font-medium py-1 absolute top-10 left-6">Live preview - Testimonial page</p>
        <div className=" bg-blue-600 text-white p-2 rounded-full w-max text-3xl mt-8"><BiSolidLike  /></div>
        <p className="text-3xl font-bold text-[#55595F] text-center">Header goes here...</p>
        <p className="text-[#747D86] p-2">Your custom message goes here...</p>
        <div className="flex flex-col justify-start items-start w-full p-2">
        <p className="text-black font-bold text-left">QUESTIONS</p>
        {questions.map((question)=>(
            <li className="text-[#707D86] font-[500] mt-1">{question}</li>
        ))}
        <div className="w-full mt-10 flex flex-col gap-2">
            <button className="bg-[#5D5DFF] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <CiVideoOn className="text-2xl"/>Record a video</button>
                <button className="bg-[#33363A] flex text-white p-2 rounded-lg justify-center items-center gap-4 w-full" >
                <MdModeEditOutline className="text-2xl"/>Send in text</button>
        </div>
       
        </div>
       
        </div>
    )
}