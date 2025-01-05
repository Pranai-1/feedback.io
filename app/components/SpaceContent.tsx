"use server";

import {  SpacePropType } from "@/app/api/types";
import EmptySpaces from "./EmptySpacesComponent";
import SpacesDisplay from "./SpacesDisplay";


export default async function SpacesContent({ spaces }:{spaces:SpacePropType[] | []}) {


  return spaces.length === 0 ? (
    <EmptySpaces />
  ) : (
   <SpacesDisplay spaces={spaces}/>
  );
}
