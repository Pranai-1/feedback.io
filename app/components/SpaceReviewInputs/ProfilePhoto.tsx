import { CiCircleRemove } from "react-icons/ci";
import handleProfilePhoto from "../../actions/imageActions/handleProfilePhoto"
import Image from "next/image"
import { Action, InitialFeedbackType } from "@/app/api/types"
import CustomTooltip from "./ReactToolTip";


export default function ProfilePhoto({state,dispatch}:{state:InitialFeedbackType,dispatch:React.Dispatch<Action>}){
    return(
        <div className="flex flex-col gap-2 text-black">
        <p>Upload Your Photo</p>
        <div className="flex justify-start items-center gap-3 relative">
       
            {state.photo.length>0 ? (
                 <Image src={state.photo} alt="profile photo" height={80} width={80}
                 className="rounded-full"/>
            ):
            <span className=" w-[80px] h-[80px] bg-gray-500 rounded-full"> </span>
            }
           
      
        <label className="p-2 px-4 rounded-md border border-gray-600 text-black cursor-pointer"
        htmlFor="profilePhoto">Choose file</label>

        <input 
        id="profilePhoto" 
        name="profilePhoto"
        className="hidden"
        type="file"
        onChange={(e)=>{handleProfilePhoto(e,dispatch)}}
        />
        {state.photo.length>0 ? (
            <CustomTooltip
            Icon={CiCircleRemove}
            content="remove"
            className="text-blue-500 hover:text-blue-700  text-3xl cursor-pointer"
            handleClick={()=>{
                dispatch({type:"SET_INPUT",key:"photo",payload:""})
            }}
            />
        ):null}
        </div>
       
    </div>
    )
}