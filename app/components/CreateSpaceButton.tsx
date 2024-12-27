import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CreateSpaceButton({setCreateSpaceToggle}:{setCreateSpaceToggle:React.Dispatch<React.SetStateAction<number>>}){
return (
<RainbowButton className=" text-xs p-1 sm:p-2 sm:text-base"  onClick={()=>setCreateSpaceToggle(1)}>+ Create a new space </RainbowButton>
)  
}