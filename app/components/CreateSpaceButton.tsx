import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CreateSpaceButton({setCreateSpaceToggle}:{setCreateSpaceToggle:React.Dispatch<React.SetStateAction<number>>}){
return (
<RainbowButton className=" text-sm sm:text-base"  onClick={()=>setCreateSpaceToggle(1)}>+ Create a new space </RainbowButton>
)  
}