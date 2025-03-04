"use client";

import { SpacePropType } from "@/app/api/types";
import { SetStateAction } from "react";
import SpaceNavigation from "./SpaceNavigation";
import Image from "next/image";
import { PiDotsThreeCircleLight } from "react-icons/pi";

export default function SpaceCard({
  space,
  setCreateSpaceToggle,
  setDeleteSpace,
  openDetailsCard,
  setOpenDetailsCard,
}: {
  space: SpacePropType;
  setCreateSpaceToggle: React.Dispatch<SetStateAction<number>>;
  setDeleteSpace: React.Dispatch<SetStateAction<string>>;
  openDetailsCard: string;
  setOpenDetailsCard: React.Dispatch<SetStateAction<string>>;
}) {
  // Helper function to truncate text to 30 characters
  const truncateText = (text: string, maxLength: number = 40) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  const truncatedTitle = truncateText(space.headerTitle);
  const truncatedDescription = truncateText(space.customMessage);

  return (
    <div
      className="relative h-[300px] flex flex-col rounded-xl bg-[#E5E7EB] backdrop-blur-sm p-4 shadow-md hover:shadow-lg transition-shadow duration-200 w-full max-w-md "
      key={space.id}
   onClick={()=>setOpenDetailsCard("")} >
      {/* Options Icon */}
      <button
        className="absolute top-3 right-3 text-black hover:text-red-600"
        onClick={(e) =>{
          setOpenDetailsCard((prev) => (prev === space.id ? "" : space.id))
          e.stopPropagation()
        }
          
        }
      >
        <PiDotsThreeCircleLight className="text-2xl" />
      </button>

      {/* Logo & Name */}
      <div className="flex flex-col items-center mb-4">
      <Image
        src={space.spaceLogo}
        alt="logo"
        height={40}
        width={80}
        className="rounded-md border border-white/30 object-cover"
        />

        <p className="mt-2 font-semibold text-lg text-orange-500">
          {space.spaceName}
        </p>
      </div>

      {/* Navigation or Details */}
      {openDetailsCard === space.id && (
        <SpaceNavigation
          space={space}
          setCreateSpaceToggle={setCreateSpaceToggle}
          setDeleteSpace={setDeleteSpace}
          setOpenDetailsCard={setOpenDetailsCard}
        />
      )}

      <hr className="border-t border-gray-800 my-3" />

      {/* Title & Description */}
      <div className="mb-3 flex flex-col gap-2">
      
          <p
            className="text-sm md:text-md text-gray-800 flex items-center gap-2 truncate hover:text-green-600"
            title={space.headerTitle}
          >
            <span className="font-bold ">Title:</span> {truncatedTitle}
          </p>
        
        <p
          className="mt-1 text-sm text-gray-800 flex items-center gap-2 truncate hover:text-orange-500"
          title={space.customMessage}
        >
          <span className="font-medium">Description:</span> {truncatedDescription}
        </p>
      </div>

      {/* Feedback Counts */}
      <div className="flex justify-around items-center w-full border-t border-gray-800 pt-3">
        <p className="text-sm text-gray-800">
          Feedbacks: <span className="font-semibold">{space.reviews.length}</span>
        </p>
        <p className="text-sm text-blue-600 font-medium">
          Liked: <span className="font-semibold">{space.wallOfLove.length}</span>
        </p>
      </div>
    </div>
  );
}
