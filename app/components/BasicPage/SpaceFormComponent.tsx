

import BasicPageQuestions from "./BasicPageQuestions";
import BasicPageInput from "./BasicPageInput";
import BasicPageExtraInputFields from "./BasicPageExtraInputFields";
import SpaceSubmission from "../SpaceSubmission";

export default function SpaceForm() {
 

  return (
    <div>
    
    
      <p className="text-[#25282C] p-2 text-3xl font-bold mt-6 w-full text-center">Create a new Space</p>
      <p className="text-[#55595F] text-center w-full">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
      <div className="flex flex-col justify-start items-start mt-6 w-full">
        <BasicPageInput/>
        <BasicPageQuestions />
        <BasicPageExtraInputFields />
        <div className="flex justify-center items-center w-full">
          <SpaceSubmission />
        </div>
      </div>
    </div>
  );
}
