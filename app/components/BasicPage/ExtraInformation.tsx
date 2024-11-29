import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";
import { SpaceCreationDetails } from "../SpaceCreationProvider";

export default function ExtraInformation() {
  const { extraFields, setExtraFields } = useContext(SpaceCreationDetails);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.stopPropagation();
    const { name } = event.target;

    const updatedFields = extraFields.map((field) => {
      if (field.label === name) {
        return { ...field, required: !field.required };
      }
      return field;
    });

    setExtraFields(updatedFields);
  }

  function handleAllow(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    const name = (event.currentTarget as HTMLElement).dataset.name;

    const updatedFields = extraFields.map((field) => {
      if (field.label === name) {
        if (field.label !== "Name") {
          const updatedField = {
            ...field,
            allowed: !field.allowed,
            required: field.allowed ? field.required : false,
          };
          return updatedField;
        }
      }
      return field;
    });

    setExtraFields(updatedFields);
  }

  return (
    <div className="flex flex-col justify-center text-xs sm:text-base items-center gap-[4px] sm:gap-2 bg-white w-[90%] sm:w-max mt-4 text-gray-600 shadow-lg rounded-lg absolute top-12 left-0 z-10">
      {extraFields.map((field) => (
        <div
          key={field.id}
          className={`flex justify-between items-center gap-4 sm:gap-12 w-full rounded sm:px-4 py-2 border-b border-gray-500 ${
            field.label === "Name" ? "bg-gray-200" : ""
          }`}
        >
          <div
            className={`${
              !field.allowed ? "pr-6 bg-gray-300" : "pl-6 bg-blue-500"
            } rounded-full cursor-pointer`}
            onClick={handleAllow}
            data-name={field.label}
          >
            {field.allowed ? (
              <TiTickOutline className="text-xl text-white border-2 border-white rounded-full" />
            ) : (
              <RxCrossCircled className="text-gray-600 text-xl" />
            )}
          </div>
          <p className="flex-1">{field.label}</p>
          <div className="flex justify-center items-center gap-[2px] sm:gap-2">
            <p>Required?</p>
            <input
              type="checkbox"
              name={field.label}
              checked={field.required}
              onChange={handleChange}
              disabled={!field.editable}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
