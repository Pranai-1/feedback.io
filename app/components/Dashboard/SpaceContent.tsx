"use client";

import {  SpacePropType } from "@/app/api/types";
import EmptySpaces from "./EmptySpacesComponent";
import SpacesDisplay from "./SpacesDisplay";
import { useState, use } from "react";



export default function SpacesContent({ spaces }: { spaces: SpacePropType[] }) {
  const [createStateToggle, setCreateSpaceToggle] = useState<number>(-1); // Explicit types for state

  return spaces.length === 0 ? (
    <EmptySpaces createStateToggle={createStateToggle} setCreateSpaceToggle={setCreateSpaceToggle} />
  ) : (
    <SpacesDisplay spaces={spaces} createStateToggle={createStateToggle} setCreateSpaceToggle={setCreateSpaceToggle} />
  );
}
