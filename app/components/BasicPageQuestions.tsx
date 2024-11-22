import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";


export default function BasicPageQuestions(){
    const[questions,setQuestions]=useState([
        {label:"Who are you / what are you working on?",id:0},
        {label:"How has [our product / service] helped you?",id:1},
        {label: "What is the best thing about [our product / service]?",id:2}
        ])
    return(
        <>
           <p className="flex justify-center items-center gap-2 mt-4 mb-2">Questions<FaExclamationCircle /></p> 
           {questions.map((question,index)=>(
            <div className="flex justify-center items-center gap-2 w-full mb-4" key={question.id}>
                <BsThreeDotsVertical/><input className="p-2 border-[1px] border-gray-500 w-full rounded-lg" 
                placeholder={question.label}/><MdDeleteForever className="text-2xl"/>
            </div>
           )

           )}
           <p className="flex justify-center items-center gap-2 text-[#25282C]"><IoIosAddCircleOutline/>Add one (up to 5)</p>
        </>
    )
}