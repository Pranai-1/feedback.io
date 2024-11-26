import { SetStateAction } from "react";

export default function InputComponent(
    {title,placeholder,id,clicked,setClicked,type}:
    {title:string,placeholder:string,id:number,clicked:number,setClicked:React.Dispatch<SetStateAction<number>>,type:string}){
    return(
        <>
        <label  htmlFor={title.replace(/\s+/g, "")}>{title}</label>
        <input name={title.replace(/\s+/g, "")}  placeholder={placeholder}  type={type}
        className={`p-2  w-full rounded-lg 
        ${clicked==id ? 'border-2 border-blue-500':'border-2 border-gray-300'}`}
        onClick={(e)=>{
            console.log(id)
          
            setClicked(id)
            e.stopPropagation()
        }}
        style={{
            outline: 'none', 
          }}/>
        </>
    )
}