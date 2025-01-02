export default function CustomButton({className,handleClick,content}:
    {className:string,handleClick:()=>void,content:string}
){
    return(
        <>
         <button
            className={className}
            onClick={handleClick}
          >
            {content}
          </button>
        </>
    )
}