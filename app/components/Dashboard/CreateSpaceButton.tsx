import { RainbowButton } from "@/components/ui/rainbow-button";
import { toast } from "react-toastify";

export default  function CreateSpaceButton({spaceCount,setCreateSpaceToggle}:{spaceCount:number,setCreateSpaceToggle:React.Dispatch<React.SetStateAction<number>>}){


return (
<RainbowButton className=" text-xs p-1 sm:p-2 sm:text-base"  onClick={()=>{
    if(spaceCount<3)
    setCreateSpaceToggle(1)
  else
   toast.error("Spaces Limit reached")
}}>+ Create a new space </RainbowButton>
)  
}