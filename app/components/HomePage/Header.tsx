import Image from "next/image";
import projectOfTheWeek from "../../Images/projectOfTheWeek.png"
export default function Header(){
    return(
       <div className="flex flex-col justify-center items-center">
        <Image src={projectOfTheWeek.src} width={200} height={200} alt="Project" className="mt-4"/>
        <div className="lg:text-6xl md:w-[70vw] text-2xl text-center md:text-5xl w-[80vw] shrink-0 text-white mb-8 ">
            Your Go-To Platform for Instant Testimonials
            <span className="text-black ml-3">🚀</span>
        </div>
        <p className="text-[#E8E8E8] md:w-[60vw] w-[80vw] text-sm md:text-lg text-center">Easily embed testimonial widgets on your website and showcase authentic feedback,
             while gaining real-time insights through our Feedback.io dashboard.</p>
       </div>
    )
}