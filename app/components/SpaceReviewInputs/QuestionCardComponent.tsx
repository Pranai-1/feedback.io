import { QuestionType } from "@/app/api/types";

export default function QuestionCard({
  questions,
  margin = 2,
  font = "bold",
}: {
  questions: QuestionType[];
  margin: number;
  font: string;
}) {
  return (
    <>
      <p
        className={`text-[#33363A] font-${font} text-sm sm:text-lg py-1 border-b-4 border-b-blue-600`}
      >
        QUESTIONS
      </p>

      <ul className="list-none">
        {questions && Array.isArray(questions) ? (
          questions.map((question, idx) => (
            <li
              key={idx}
              className={`my-${margin} text-xs sm:text-base text-gray-700 break-words whitespace-normal max-w-full`}
            >
             {idx+1}. {question?.label}
            </li>
          ))
        ) : null}
      </ul>
    </>
  );
}
