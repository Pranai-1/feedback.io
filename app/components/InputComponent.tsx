

import { InputComponentProps } from "../api/types";

export default function InputComponent({
  title,
  placeholder,
  id,
  clicked,
  setClicked,
  type,
 name,
  required,
  value,
  handleSpaceInputs,
}: InputComponentProps) {


  return (
    <div className="flex flex-col gap-2 mt-2">
      <label htmlFor={title.replace(/\s+/g, "")} className="flex justify-start items-center gap-2 text-[#1a1b1c] 
      text-sm sm:text-base font-medium
     ">{title}
     {required ? (
   <p className="text-red-600">*</p>
    ):null} </label>
      <input
        id={title.replace(/\s+/g, "")}
        name={title.replace(/\s+/g, "")}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleSpaceInputs(name,e.target.value)}
        className={`p-2 w-full rounded-lg  text-xs sm:text-base ${
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
