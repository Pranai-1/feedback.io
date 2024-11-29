import { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";
import { SpaceCreationDetails } from "../SpaceCreationProvider";
import { questionData } from "../../static/simpleData";

export default function BasicPageQuestions() {
  const [msg, setMsg] = useState("");
  const { questions, setQuestions } = useContext(SpaceCreationDetails);
  


  const handleAddQuestion = () => {
    if (questions.length === 5) {
      setMsg("Questions limit reached");
      setTimeout(() => {
        setMsg("");
      }, 2000);
      return;
    }
  
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        label: "",
        id: prevQuestions.length > 0 ? prevQuestions[prevQuestions.length - 1].id + 1 : 0,
      },
    ]);
  };
  
  function handleEditQuestion(id: number, value: string) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, label: value } : question
      )
    );
  }
  
  return (
    <>
      <p className="flex justify-center items-center gap-2 mt-4 mb-2   text-sm sm:text-base font-medium">
        Questions
        <FaExclamationCircle />
      </p>
      {questions.map((question) => (
        <div
          className="flex justify-center items-center gap-2 w-full mb-4"
          key={question.id}
        >
          <BsThreeDotsVertical />
          <input
            className="p-2 border-[1px] border-gray-500 w-full rounded-lg  text-xs sm:text-base"
            placeholder={question.label} onChange={(e)=>handleEditQuestion(question.id,e.target.value)}
          />
          <MdDeleteForever
            className="text-2xl cursor-pointer"
            onClick={() => {
              setQuestions((prev: typeof questionData) => {
                return prev.filter((ele: { label: string; id: number }) => ele.id !== question.id);
              });
            }}
          />
        </div>
      ))}

      <div className="flex justify-center items-center gap-2 text-[#25282C]">
        <IoIosAddCircleOutline
          className="cursor-pointer"
          onClick={handleAddQuestion}
        />
        Add one (up to 5)
        {msg.length > 0 ? (
          <p className="text-red-600 text-sm">{msg}</p>
        ) : null}
      </div>
    </>
  );
}
