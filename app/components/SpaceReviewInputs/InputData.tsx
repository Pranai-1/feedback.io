import { IoIosInformationCircle } from "react-icons/io"
import { handleInputs } from "../../actions/imageActions/ReducerFunctions"
import { Action, InitialFeedbackType } from "@/app/api/types"
import CustomTooltip from "./ReactToolTip";

export default function InputData(
    {state,dispatch}:
    {state:InitialFeedbackType,dispatch:React.Dispatch<Action>}
){
    return(
        <div className="flex flex-col gap-2 w-[95%] sm:w-[70%]">
        <label htmlFor="name" className="flex justify-start items-center gap-1 text-black">
            Your Name 
            <span className="text-red-600">*</span>
            </label>
            <input
                    className="rounded-md w-full p-2 border text-black "
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
            className="text-xl cursor-pointer"
            handleClick={()=>{}}
            />


            </label>
            <input className="rounded-md w-full p-2 border text-black" placeholder="Enter your email here..." type="text"
            value={state.email}
            onChange={(e)=>handleInputs("email",e.target.value,dispatch)}/>

        
            </div>
    )
}