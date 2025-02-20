"use client";

import {  SpacePropType } from "@/app/api/types";
import EmptySpaces from "./EmptySpacesComponent";
import SpacesDisplay from "./SpacesDisplay";
import { use, useState } from "react";


export default  function SpacesContent({ spacePromise }:{spacePromise:any}) {
  const[createStateToggle,setCreateSpaceToggle]=useState(-1)  // 0 for edit and 1 for create
  //
const result:any=use(spacePromise) 
const spaces=result.spaces as SpacePropType[]
  return spaces.length === 0 ? (
    <EmptySpaces createStateToggle={createStateToggle} setCreateSpaceToggle={setCreateSpaceToggle}/>
  ) : (
   <SpacesDisplay spaces={spaces} createStateToggle={createStateToggle} setCreateSpaceToggle={setCreateSpaceToggle}/>
  );
}
