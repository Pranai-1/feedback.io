import { QuestionType } from "@/app/api/types";

export default function QuestionCard({
  questions,
  questionSize = "base",
  margin = 2,
  textSize = "lg",
  font = "bold",
}:{
  questions:QuestionType[],
  questionSize:string,
  margin :number,
  textSize:string,
  font :string,

}) {
  return (
    <>
     
      <p
        className={`text-[#33363A] font-${font} text-${textSize} py-1 border-b-4 border-b-blue-600`}
      >
        QUESTIONS
      </p>
    

     
      <div>
        {questions && Array.isArray(questions) ? (
          <> 
            {questions.map((question, idx) => (
              <li
                key={idx}
                className={`my-${margin} text-${questionSize} text-[#7D898A]`}
              >
                {question?.label}
              </li>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}
