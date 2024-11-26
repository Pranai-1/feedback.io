import { Options } from "@/app/api/types"

export default function SelectionComponent({clicked,setClicked,name,id,options}:{clicked:number,
    setClicked:React.Dispatch<React.SetStateAction<number>>,
    name:string,
    id:number,
options:Options}){
    return(
        <>
         <select name={name} id={name} 
      className={`p-2 border border-gray-500 mt-2 w-max ${clicked==id ? 'border-2 border-blue-500':'border border-gray-600'} `}
      onClick={(e)=>{
        setClicked(id)
        e.stopPropagation()
        }}>
       {Object.values(options).map((value,index)=>(
        <option key={value}>{value}</option>
       ))}
      </select>
        </>
    )
}