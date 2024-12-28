export default function QuestionCard({
  questions,
  questionSize = "base",
  margin = "2",
  textSize = "lg",
  font = "bold",
}) {
  return (
    <>
     
      <p
        className={`text-[#33363A] font-${font} text-${textSize} py-1 border-b-2 border-b-gray-900`}
      >
        QUESTIONS
      </p>
    

     
      <div>
        {questions && Array.isArray(questions) ? (
          <> 
            {questions.map((question, idx) => (
              <li
                key={idx}
                className={`my-${margin} text-${questionSize}`}
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
