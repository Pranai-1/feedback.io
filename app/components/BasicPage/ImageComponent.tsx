import { SpaceInputs } from "@/app/api/types";
import { RxCrossCircled } from "react-icons/rx";
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function ImageComponent(
    {spaceInputs,handleSpaceInputs}:{spaceInputs:SpaceInputs,handleSpaceInputs: (name: string, value: string | boolean)=>void})
    {

        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                if (reader.result) {
                    console.log(reader.result,"inside rsult")
                  handleSpaceInputs("spaceLogo", reader.result.toString()); 
                }
              };
              console.log("outside result")
             
            }
          };


    return(
        <div className="mt-4 flex items-center gap-2">
        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
          {spaceInputs.spaceLogo.length !== 0 ? (
            <img
              src={spaceInputs.spaceLogo}
              alt="Uploaded"
              className="h-12 w-12 rounded-full overflow-hidden"
            />
          ) : null}
        </span>
        <span>
          <label
            htmlFor="nameLogoURL"
            className="py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:text-gray-700 focus:outline-none cursor-pointer"
          >
            Change
          </label>
          <input
            type="file"
            name="nameLogoURL"
            id="nameLogoURL"
            className="hidden"
            onChange={handleFileChange}
          />
        </span>
        {spaceInputs.spaceLogo.length !== 0 ? (
          <>
            <RxCrossCircled
              className="cursor-pointer"
              id="toolTipFileChange"
              onClick={() => handleSpaceInputs("spaceLogo", "")}
            />
            <ReactTooltip
              anchorId="toolTipFileChange"
              content="Undo the Change"
              place="top"
              style={{ maxWidth: "300px", whiteSpace: "normal" }}
            />
          </>
        ) : null}
      </div>
    )
}