
import FormNavigator from "./FormNavigator";
import SpaceForm from "./BasicPage/SpaceFormComponent";
import ThankyouPageHome from "./ThankyouPage/ThankyouPageHome";
import ExtraSettingsHome from "./ExtraSettings/ExtraSettingsHome";

export default function CreateSpace({displayPage,setDisplayPage}:{displayPage:number,setDisplayPage:React.Dispatch<React.SetStateAction<number>>}){
  
    return(
        <div className="bg-[#FFFFFF] md:w-[620px] px-4   p-4  w-max max-h-[80vh] overflow-auto">
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