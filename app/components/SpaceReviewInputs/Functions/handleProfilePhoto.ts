import { Action } from "@/app/api/types";
import { maxSizeInMB, validImageTypes } from "@/app/static/simpleData";

export default function handleProfilePhoto(
    e:React.ChangeEvent<HTMLInputElement>,
    dispatch:React.Dispatch<Action>)
{
    const files=e.target.files
    if(!files)
        return
    const file=files[0]

    if(!validImageTypes.includes(file.type))
    {
        alert("Invalid file type")
        return
    }

    if(file.size >maxSizeInMB *1024 *1024){
        alert("File size is too large")
    }

    const reader=new FileReader()
    reader.readAsDataURL(file)

    reader.onload=()=>{
        //dispatch({type:"SET_INPUT",})
    }

}