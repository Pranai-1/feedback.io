import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TiTickOutline  } from "react-icons/ti";


const fields = [
  { label: "Name", allowed: true, required: true, editable: false, id: 0 },
  { label: "Email", allowed: true, required: true, editable: true, id: 1 },
  { label: "Title, company", allowed: false, required: false, editable: true, id: 2 },
  { label: "Social link", allowed: false, required: false, editable: true, id: 3 },
  { label: "Address", allowed: false, required: false, editable: true, id: 4 },
];

export default function ExtraInformation() {
  const [extraFields, setExtraFields] = useState(fields);



  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.stopPropagation()
    const { name } = event.target;

    const updatedFields = extraFields.map((field) => {
        console.log(field)
      if (field.label === name) {
   
        if (!field.allowed) {
          return { ...field, allowed: true, required: true };
        } else {
          return { ...field, required: !field.required };
        }
      }
      console.log(name,field)
      return field;
    });

    setExtraFields(updatedFields);
  }

  function handleAllow(event:any){
    console.log(event)
    event.stopPropagation()
      const { name } = event.currentTarget.dataset;
      if(name=="Name")
        return
      const updatedFields = extraFields.map((field) => {
       
      if (field.label === name) {
          return { ...field, allowed:!field.allowed};
      }
     
      return field;
    });
    setExtraFields(updatedFields);
  }


  console.log(extraFields)

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[#FFFFFF] w-max mt-4 text-gray-600 shadow-lg rounded-lg absolute top-12 left-0 z-10"
>
      {extraFields.map((field) => (
        <div
          key={field.id}
          className={`flex justify-between items-center gap-12 w-full rounded px-4 py-2 border-gray-500 border-b-[1px]
            ${field.label=="Name" ? 'bg-gray-200':''}`}
          
        >
             <div className={`${!field.allowed ? "pr-6  bg-gray-300  " : "pl-6 bg-blue-500"} rounded-full cursor-pointer`}
             onClick={handleAllow} data-name={field.label}>
                {field.allowed ? (
                    <TiTickOutline  className=" text-xl text-white border-2 border-white rounded-full" /> 
                    ):(
                        <RxCrossCircled className="text-gray-600 text-xl" /> 
                    )}
               </div>
          <p>{field.label}</p>
          <div className="flex justify-center items-center gap-2">
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
