import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CreateSpaceButton({setCreateSpaceToggle}:{setCreateSpaceToggle:React.Dispatch<React.SetStateAction<boolean>>}){
return (
<RainbowButton className=" text-sm sm:text-base"  onClick={()=>setCreateSpaceToggle(true)}>+ Create a new space </RainbowButton>
)  
}