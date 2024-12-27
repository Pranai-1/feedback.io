
import FormNavigator from "./FormNavigator";
import SpaceForm from "./BasicPage/SpaceFormComponent";
import ThankyouPageHome from "./ThankyouPage/ThankyouPageHome";
import ExtraSettingsHome from "./ExtraSettings/ExtraSettingsHome";
import ShineBorder from "@/components/ui/shine-border";
import { SetStateAction } from "react";

export default function SpaceDetailsForm({displayPage,setDisplayPage,createSpaceToggle,setCreateSpaceToggle}:
    {displayPage:number,setDisplayPage:React.Dispatch<React.SetStateAction<number>>,createSpaceToggle:number
        setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>
    }){
  
    return(
        <ShineBorder className="bg-[#FFFFFF] md:w-[720px] sm:px-4 sm:p-4 w-[95%] rounded-lg">
       <FormNavigator setDisplayPage={setDisplayPage} displayPage={displayPage}/>
       {displayPage==0 ? (
        <SpaceForm
        createSpaceToggle={createSpaceToggle}
        setCreateSpaceToggle={setCreateSpaceToggle}
        />
        ):(
        <>
        {displayPage==1 ? (
            <ThankyouPageHome/>
            ):(
            <ExtraSettingsHome/>
            )}
        </>
        )}
       
        </ShineBorder>
    )
}