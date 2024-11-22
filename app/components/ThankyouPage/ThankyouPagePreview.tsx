import cheers from "../../../public/cheers.webp"

export default function ThankyouPagePreview(){
    return(
        <>
      
        <img src={cheers.src} className="w-[120px] md:w-max mt-10"/>
        <p className="text-[#55595F] text-2xl font-bold mt-6">Thank you!</p>
        <p className="text-[#707D86] my-4 text-center">Thank you so much for your shoutout! It means a ton for us! 🙏</p>
       
        </>
    )
}