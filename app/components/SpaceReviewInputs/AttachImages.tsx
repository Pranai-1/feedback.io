import { IoIosRemoveCircle } from "react-icons/io"
import { MdDelete } from "react-icons/md"
import { deleteImages, addImages } from "./Functions/handleImages"
import Image from "next/image"
import { Action, InitialStateType } from "@/app/api/types"

export default function AttachImages(
    {state,dispatch}:{state:InitialStateType,dispatch:React.Dispatch<Action>})
    {
    return(
        <div className="flex flex-col gap-1">
        <p className="text-black mb-2">Attach Images(s)</p>
        <div className="flex justify-start items-center gap-2">
     <label htmlFor="images" 
     className="cursor-pointer bg-white p-1 px-2 text-gray-600 w-max rounded-md border border-gray-600">Choose file
      </label>
      {state.images.length >0 ? <MdDelete className="text-black text-2xl cursor-pointer"
      onClick={()=>{
        deleteImages("all",0,dispatch,state)
      }}
      /> :null}
      </div>
        <input
        type="file"
        multiple
        className="hidden "
        name="images"
        id="images"
        onChange={(e)=>{
          addImages(e,dispatch,state)
        }}
        />
       
         
      
            <div className="flex justify-start items-center gap-[10px] mt-2">
               
                {state.images.map((image,idx)=>{
                    return (
                        <div className="relative w-max" key={idx}>
                        <Image  src={image} alt={`image ${idx+1}`}
                        height={60} width={60}
                        className="border border-gray-400 hover:border-2 rounded-md"
                        />
                        <IoIosRemoveCircle  
                        className="text-blue-500 hover:text-blue-700 absolute z-20 -top-2 -right-2 text-2xl cursor-pointer"
                        onClick={()=>{deleteImages("single",idx,dispatch,state)}}
                        />
                        </div>
                    )
                })}
            </div>
    
       
      </div>
    )
}