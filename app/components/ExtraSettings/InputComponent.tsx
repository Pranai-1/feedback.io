import { SetStateAction, useContext } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";
type extraInputKeys = "videoButtonText" | "textButtonText" | "maxChar";
interface InputComponentProps {
  title: string;
  placeholder: string;
  id: number;
  clicked: number;
  setClicked: React.Dispatch<SetStateAction<number>>;
  type: string;
  stateValue: extraInputKeys;
}

export default function InputComponent({
  title,
  placeholder,
  id,
  clicked,
  setClicked,
  type,
  stateValue,
}: InputComponentProps) {
  const { spaceInputs, handleSpaceInputs } = useContext(SpaceCreationDetails);

  return (
    <div>
      <label htmlFor={title.replace(/\s+/g, "")}>{title}</label>
      <input
        id={title.replace(/\s+/g, "")}
        name={title.replace(/\s+/g, "")}
        placeholder={placeholder}
        type={type}
        value={spaceInputs[stateValue] ||  ""}
        onChange={(e) => handleSpaceInputs(stateValue,e.target.value)}
        className={`p-2 w-full rounded-lg ${
          clicked === id ? "border-2 border-blue-500" : "border-2 border-gray-300"
        }`}
        onClick={(e) => {
          setClicked(id);
          e.stopPropagation();
        }}
        style={{ outline: "none" }}
      />
    </div>
  );
}
