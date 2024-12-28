export default function QuestionCard({questions}){
    return(
        <>
        <p className="text-[#33363A] font-bold text-xl">QUESTIONS</p>
              <div>
              {questions && Array.isArray(questions) ? (
                    <>
                       {questions.map((question,idx)=><li key={idx} className="my-2">{question?.label}</li>)}
                    </>
            ) : null}
            </div>
        
        </>
    )
}