
import FormNavigator from "./FormNavigator";
import SpaceForm from "./SpaceFormComponent";



export default function CreateSpace(){
   
    
    return(
        <div className="bg-[#FFFFFF] md:w-[620px] px-4   p-4  w-max max-h-[90vh] overflow-auto">
       <FormNavigator/>
       <SpaceForm/>
        </div>
    )
}