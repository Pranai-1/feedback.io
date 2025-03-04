import BasicPageQuestions from "./BasicPageQuestions";
import BasicPageInput from "./BasicPageInput";
import BasicPageExtraInputFields from "./BasicPageExtraInputFields";
import SpaceSubmission from "../SpaceSubmission";
import { storageSchema } from "@/app/zodSchema";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect, useContext, SetStateAction } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";

// A fetcher that accepts an array key [url, id]
const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

export default function SpaceForm({
  createSpaceToggle,
  setCreateSpaceToggle,
}: {
  createSpaceToggle: number;
  setCreateSpaceToggle: React.Dispatch<SetStateAction<number>>;
}) {
  const { setSpaceInputs, setQuestions } =
    useContext(SpaceCreationDetails);

  const [spaceId, setSpaceId] = useState<string>("");

  // Retrieve the space ID from localStorage once when the component mounts
  useEffect(() => {
    const id = localStorage.getItem("space");
    if(!id)
      return
      setSpaceId(id);
      localStorage.removeItem("space");
  }, []);


  // Use SWR to fetch space details only when spaceId is available
  const { data, error } = useSWR(
    spaceId.length>0 ? [`/api/spaceDetails/?id=${spaceId}`] : null,
    fetcher
  );

  // When data is fetched, validate and update state
  useEffect(() => {
    if (data && data.space) {
      const validationResult = storageSchema.safeParse(data.space);
      if (validationResult.success) {
        setSpaceInputs((prevInputs) => ({
          ...prevInputs,
          ...validationResult.data,
        }));
        setQuestions(data.space.questions);
      } else {
        console.error("Validation failed:", validationResult.error);
      }
    }
  }, [data, setSpaceInputs, setQuestions]);

  if (error) {
    console.error("Error fetching space details:", error);
    return <div className="h-[70vh] text-center flex items-center justify-center font-bold ">Error loading space details.</div>;
  }

  // if (!data) {
  //   return <div className="h-[70vh] text-center flex items-center justify-center font-bold ">Loading...</div>;
  // }

  return (
    <div>
      <p className="text-[#25282C] p-2 text-xl sm:text-3xl font-bold my-4 sm:my-6 w-full text-center">
        Create a new Space
      </p>
      <p className="text-[#55595F] text-center w-full text-xs sm:text-base">
        After the Space is created, it will generate a dedicated page for
        collecting testimonials.
      </p>
      <div className="flex flex-col justify-start items-start mt-6 w-full">
        <BasicPageInput />
        <BasicPageQuestions />
        <BasicPageExtraInputFields />
        <div className="flex justify-center items-center w-full">
          <SpaceSubmission
            createSpaceToggle={createSpaceToggle}
            spaceId={spaceId}
            setCreateSpaceToggle={setCreateSpaceToggle}
          />
        </div>
      </div>
    </div>
  );
}
