import { IoIosInformationCircle } from "react-icons/io"
import { handleInputs } from "./Functions/ReducerFunctions"
import { Action, InitialStateType } from "@/app/api/types"
import CustomTooltip from "./ReactToolTip";

export default function InputData(
    {state,dispatch}:
    {state:InitialStateType,dispatch:React.Dispatch<Action>}
){
    return(
        <div className="flex flex-col gap-2">
        <label htmlFor="name" className="flex justify-start items-center gap-1 text-black">
            Your Name 
            <span className="text-red-600">*</span>
            </label>
            <input
                    className="rounded-md w-full p-2 border text-black"
                    placeholder="Enter your name here..."
                    type="text"
                    value={state.name}
                    onChange={(e) => handleInputs("name", e.target.value,dispatch)}
            />  


            <label htmlFor="email" className="flex justify-start items-center gap-1 text-black">
            Your Email 
            <span className="text-red-600">*</span>
           
            <CustomTooltip
            Icon={IoIosInformationCircle}
            content="Your email will not be shared publicly"
            />


            </label>
            <input className="rounded-md w-full p-2 border text-black" placeholder="Enter your email here..." type="text"
            value={state.email}
            onChange={(e)=>handleInputs("email",e.target.value,dispatch)}/>

            <label htmlFor="consent" className="flex justify-start items-center gap-2 text-[13px] text-gray-500 font-medium">
              <input type="checkbox" 
              checked={state.consent}
             
              onChange={()=>{
                if(state.consent)
                    handleInputs("consent",false,dispatch)
                else
                handleInputs("consent",true,dispatch)
              }}/>
              
              I give permission to use this testimonial across social channels and other marketing efforts
            </label>
            </div>
    )
}