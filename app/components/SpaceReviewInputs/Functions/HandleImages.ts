import { Action, InitialStateType } from "@/app/api/types";
import { maxSizeInMB, validImageTypes } from "@/app/static/simpleData";


export  function addImages(
    e: React.ChangeEvent<HTMLInputElement>,
    dispatch: React.Dispatch<Action>,
    state:InitialStateType
){
      
        const files=e.target.files
       
       if(!files)
        return

    
       if(files.length+state.images.length>3){
            alert("Maximum three images allowed")
            return
       }
       console.log(files)
       const images:string[]=[...state.images]
      
       
       for(let i=0;i<files.length;i++){
       const file=files[i]
       if(!validImageTypes.includes(file.type)){
        alert("Image type is invalid")
        return
       }
       if(file.size > maxSizeInMB*1024*1024){
        alert("File size is too large")
        return
       }
       const reader=new FileReader()
       reader.readAsDataURL(file)
       reader.onload=()=>{
        if(reader.result){
          images.push(reader.result.toString())
          dispatch({type:"SET_INPUT",key:"images",payload:images})
        }
       }
      
       }
     
  
}


export function deleteImages(
    deleteType:string,
    index:number,
    dispatch: React.Dispatch<Action>,
state:InitialStateType)
    {
        if(deleteType=="all"){
            dispatch({type:"SET_INPUT",key:"images",payload:[]})
            return
        }
        const updatedImages=[...state.images]
        updatedImages.splice(index,1)
        dispatch({type:"SET_INPUT",key:"images",payload:updatedImages})

    }