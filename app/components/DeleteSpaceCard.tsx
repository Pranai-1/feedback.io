import { SetStateAction, useState } from "react"
import deleteSpace from "../actions/deleteSpace"
import { toast } from "react-toastify"
import { RxCross2 } from "react-icons/rx";
export default function DeleteSpaceCard({headerTitle,setDeleteSpace}:
    {headerTitle:string,setDeleteSpace:React.Dispatch<SetStateAction<string>>}){
    const[clickedOnDeleteInput,setClickedOnDeleteInput]=useState(false)
    const[deleteSpaceInput,setDeleteSpaceInput]=useState("")


    async function handleDelete(){
      if(deleteSpaceInput!==headerTitle){
        toast.error("😕 Sorry your space id isn't correct.")
        return
      }
      try{
        const response=await deleteSpace(headerTitle)
        if(response.success){
            toast.success("space deleted successfully")
            setClickedOnDeleteInput(false)
            setDeleteSpaceInput("")
        }
       
          else
          toast.error("😕 Couldn't delete space")
      }catch(error){
        if(error instanceof Error)
        toast.error(`😕 ${error.message}`)
        else
        toast.error("😕 Couldn't delete space")
      }
    }


    return(
        <div className="absolute top-1/4 left-1/2 bg-white rounded-md flex flex-col gap-4 justify-center items-center px-4 w-[600px] py-6"
        onClick={()=>setClickedOnDeleteInput(false)}>
            <div className="relative w-full">
               <RxCross2 className="absolute top-2 right-2 text-xl cursor-pointer" onClick={()=>setDeleteSpace("")}/>
            </div>
            <p className="text-3xl font-bold text-black my-5">Delete this space</p>
            <div className="flex flex-col justify-center items-center">
            <p className="text-gray-700">Once deleted, all feedbacks in this space will be gone forever.</p>
            <p> Please be certain!</p>
            </div>
            <label htmlFor="spaceDelete" className="flex justify-center items-center w-full">
                Type your space name <span className="text-red-600 font-medium mx-2">{headerTitle}</span> to confirm</label>
                <input id="spaceDelete" placeholder={headerTitle} value={deleteSpaceInput} onChange={(e)=>setDeleteSpaceInput(e.target.value)}
                className={`p-2 py-4  w-full ${clickedOnDeleteInput ? "border-[2px] border-blue-500 outline-none" :"border border-gray-700"}`}
                onClick={(e)=>{
                    setClickedOnDeleteInput(true)
                    e.stopPropagation()
                    }}/>

                <button className="bg-red-600 p-2 w-full text-white" onClick={handleDelete}>Confirm delete</button>
        </div>
    )
}