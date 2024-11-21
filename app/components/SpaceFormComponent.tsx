import { Fragment, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import ExtraInformation from "./ExtraInformation";


export default function SpaceForm(){
    const [showInformationForm, setShowInformationForm] = useState(false);


    const[questions,setQuestions]=useState([
        {label:"Who are you / what are you working on?",id:0},
        {label:"How has [our product / service] helped you?",id:1},
        {label: "What is the best thing about [our product / service]?",id:2}
        ])
console.log(showInformationForm)

    return(
        <div >
        <p className="text-[#25282C] p-2 text-3xl font-bold mt-6 w-full text-center">Create a new Space</p>
        <p className="text-[#55595F] text-center w-full">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
        <div className="flex flex-col justify-start items-start mt-10 w-full">

            <label htmlFor="spaceName" className="flex justify-center items-center gap-2 text-[#1a1b1c]">Space name
                <p className="text-red-600">*</p></label>
            <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-2" type="text" name="spaceName" id="spaceName"/>
            <p className="text-[#55595F] text-[12px]">Public URL is:https://feedback-io-bice.vercel.app/your-space</p>

            <label htmlFor="spaceLogo" className="flex justify-center items-center gap-2 text-[#1a1b1c]  mt-2">Space logo
                <p className="text-red-600">*</p></label>
            <input className="w-full p-1 rounded-lg mt-1" type="file" name="spaceLogo" id="spaceLogo"/>
           
            <label htmlFor="headerTitle" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Header title 
                <p className="text-red-600">*</p></label>
            <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1" type="text" name="headerTitle" id="headerTitle"/>

            <label htmlFor="customMsg" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Your custom message
                <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1"  name="customMsg" id="customMsg"></textarea>

           <p className="flex justify-center items-center gap-2 mt-4 mb-2">Questions<FaExclamationCircle /></p> 
           {questions.map((question,index)=>(
            <div className="flex justify-center items-center gap-2 w-full mb-4" key={question.id}>
                <BsThreeDotsVertical/><input className="p-2 border-[1px] border-gray-500 w-full rounded-lg" 
                placeholder={question.label}/><MdDeleteForever className="text-2xl"/>
            </div>
           )

           )}
           <p className="flex justify-center items-center gap-2 text-[#25282C]"><IoIosAddCircleOutline/>Add one (up to 5)</p>
           <p className="flex justify-center items-center gap-2 my-4 ">Collect extra information <FaExclamationCircle/></p>
           <p className={`flex justify-center items-center gap-6 p-2 border-2 border-gray-500 mt-2 px-4 cursor-pointer
           ${showInformationForm ?'border-blue-600':''}`}
           onClick={(e)=>{setShowInformationForm((prev)=>!prev)
            e.stopPropagation()
           }}>Name,email,social link etc.. <IoIosArrowDown/></p>
           {showInformationForm ? (
          
          <ExtraInformation/>
        ):null}
        <p className="mt-40">erfer</p>
        </div>
        </div>
    )
}