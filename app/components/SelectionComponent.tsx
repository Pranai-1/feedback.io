import { Options } from "@/app/api/types"

export default function SelectionComponent({clicked,setClicked,name,id,options,value,handleSpaceInputs}:{clicked:number,
    setClicked:React.Dispatch<React.SetStateAction<number>>,
    name:string,
    id:number,
    options:Options,
    value:string,
    handleSpaceInputs: (name: string, value: string | boolean) => void}){
    return(
        <>
         <select name={name} id={name}  value={value}
                onChange={(event) => {
                    handleSpaceInputs(name,event.target.value);
                    event.stopPropagation()
                }}
      className={`p-2 border border-gray-500 mt-2 w-max text-sm  sm:text-base  ${clicked==id ? 'border-2 border-blue-500':'border border-gray-600'} `}
      onClick={(e)=>{
        setClicked(id)
        e.stopPropagation()
        }}>
       {options.map((option,index)=>(
        <option key={index} value={option.value} className="text-xs sm:text-base">{option.label}</option>
       ))}
      </select>
        </>
    )
}