import {  SpacePropType } from "@/app/api/types";
import EmptySpaces from "./EmptySpacesComponent";


export default function SpacesContent({ spaces }:{spaces:SpacePropType[] | []}) {
   console.log(spaces)

  return spaces.length === 0 ? (
    <EmptySpaces />
  ) : (
    <div className="text-center">
      <p className="text-2xl text-white">There are some spaces</p>
    
    </div>
  );
}
