
import FormNavigator from "./FormNavigator";
import SpaceForm from "./BasicPage/SpaceFormComponent";
import ThankyouPageHome from "./ThankyouPage/ThankyouPageHome";
import ExtraSettingsHome from "./ExtraSettings/ExtraSettingsHome";

export default function CreateSpace({displayPage,setDisplayPage}:{displayPage:number,setDisplayPage:React.Dispatch<React.SetStateAction<number>>}){
  
    return(
        <div className="bg-[#FFFFFF] md:w-[620px] sm:px-4 sm:p-4 w-[95%] ">
       <FormNavigator setDisplayPage={setDisplayPage} displayPage={displayPage}/>
       {displayPage==0 ? (
        <SpaceForm/>
        ):(
        <>
        {displayPage==1 ? (
            <ThankyouPageHome/>
            ):(
            <ExtraSettingsHome/>
            )}
        </>
        )}
       
        </div>
    )
}