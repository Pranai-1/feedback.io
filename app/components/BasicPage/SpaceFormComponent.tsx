

import BasicPageQuestions from "./BasicPageQuestions";
import BasicPageInput from "./BasicPageInput";
import BasicPageExtraInputFields from "./BasicPageExtraInputFields";
import { useState } from "react";


export default function SpaceForm(){
    const[clicked,setClicked]=useState(-1)
    return(
        <div >
        <p className="text-[#25282C] p-2 text-3xl font-bold mt-6 w-full text-center">Create a new Space</p>
        <p className="text-[#55595F] text-center w-full">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
        <div className="flex flex-col justify-start items-start mt-6 w-full">
           <BasicPageInput clicked={clicked} setClicked={setClicked}/>
            <BasicPageQuestions/>
          <BasicPageExtraInputFields/>
        <div className="flex justify-center items-center w-[100%] ">
       <button className="w-full hover:bg-[#4B4ACF] bg-blue-500 p-2 rounded mt-10 text-white">Create new Space</button>
       </div>
        </div>
        </div>
    )
}