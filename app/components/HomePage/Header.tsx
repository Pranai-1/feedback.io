"use client";

import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useRouter } from "next/navigation";

import projectOfTheWeek from "@/app/Images/projectOfTheWeek.png";


export default function Header() {
  const router = useRouter();
  const time = 0.25;



  return (
    <>
      <BlurFade delay={time} inView>
        <Image src={projectOfTheWeek.src} width={200} height={200} alt="Project" className={`mt-6`} />
      </BlurFade>
      <BlurFade delay={time * 2} inView>
        <div className="lg:text-6xl md:w-[70vw] text-2xl text-center md:text-5xl w-[80vw] shrink-0 text-white mb-8 ">
          Your Go-To Platform for Instant Testimonials
          <span className="text-black ml-3">🚀</span>
        </div>
      </BlurFade>
      <BlurFade delay={time * 3} inView>
        <p className="text-[#D5D5D5] md:w-[50vw] w-[80vw] text-sm md:text-base text-center mb-8">
          Easily embed testimonial widgets on your website and showcase authentic feedback, while gaining real-time
          insights through our <span className="font-bold text-gray-50">Feedback.io dashboard.</span>
        </p>
      </BlurFade>
      <BlurFade delay={time * 4} inView>
        <button
          className="flex font-medium gap-2 justify-center items-center text-black p-2 px-4 bg-[#E1E1E1] rounded-md"
          onClick={() => router.push("/dashboard")}
        >
          Get Started for free <MdArrowRightAlt className="text-2xl text-black" />
        </button>
      </BlurFade>
    </>
  );
}
