"use client";

import { SpacePropType } from "@/app/api/types";
import EmptySpaces from "./EmptySpacesComponent";
import SpacesDisplay from "./SpacesDisplay";
import { useState, use } from "react";

type SpacePromiseType = Promise<{ spaces: SpacePropType[] }>;

export default function SpacesContent({ spacePromise }: { spacePromise: SpacePromiseType }) {
  const [createStateToggle, setCreateSpaceToggle] = useState<number>(-1); // Explicit types for state

  const result = use(spacePromise) as Awaited<SpacePromiseType>; // Ensures proper type inference
  const spaces: SpacePropType[] = result.spaces;

  return spaces.length === 0 ? (
    <EmptySpaces createStateToggle={createStateToggle} setCreateSpaceToggle={setCreateSpaceToggle} />
  ) : (
    <SpacesDisplay spaces={spaces} createStateToggle={createStateToggle} setCreateSpaceToggle={setCreateSpaceToggle} />
  );
}
