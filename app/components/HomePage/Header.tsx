"use client";
import { useEffect, useState } from "react"; // Import useEffect and useState
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { AvatarCircles } from "@/components/avatar-circles";
import { BlurFade } from "@/components/magicui/blur-fade";
import Features from "./Features";
import { useRouter } from "next/navigation";
import HomePageImages from "./HomePageImages";
import Footer from "../Footer";

// Import images
import projectOfTheWeek from "@/app/Images/projectOfTheWeek.png";
import avatarUrl from "../../Images/AvatarImages/avatarUrl.jpg";
import avatarUrl1 from "../../Images/AvatarImages/avatarUrl1.png";
import avatarUrl2 from "../../Images/AvatarImages/avatarUrl2.jpg";
import avatarUrl3 from "../../Images/AvatarImages/avatarUrl3.png";
import avatarUrl4 from "../../Images/AvatarImages/avatarUrl4.png";
import avatarUrl5 from "../../Images/AvatarImages/avatarUrl5.jpg";

export default function Header() {
  const router = useRouter();
  const time = 0.25;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures we are on the client
  }, []);

  return (
    <div className="flex flex-col justify-center items-center absolute top-0 right-0 left-0 bg-black">
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

      <div className="flex flex-col justify-center items-center w-full">
        <BlurFade delay={time * 5} inView>
          {isClient && (
            <AvatarCircles
              className="mt-6 mb-2 w-full flex justify-center items-center"
              avatarUrls={[
                { imageUrl: avatarUrl.src, profileUrl: "https://github.com/Pranai-1" },
                { imageUrl: avatarUrl1.src, profileUrl: "https://github.com/Pranai-1" },
                { imageUrl: avatarUrl2.src, profileUrl: "https://github.com/Pranai-1" },
                { imageUrl: avatarUrl3.src, profileUrl: "https://github.com/Pranai-1" },
                { imageUrl: avatarUrl4.src, profileUrl: "https://github.com/Pranai-1" },
                { imageUrl: avatarUrl5.src, profileUrl: "https://github.com/Pranai-1" },
              ]}
            />
          )}

          <p className="w-[70vw] mt-4 text-center sm:w-[25vw] font-medium text-[#92A0B5]">
            More than 12 trusted partners using <span className="text-gray-50">Feedback.io</span>
          </p>
        </BlurFade>
      </div>

      <div className="w-[90vw] flex justify-center items-center my-12 bg-black">
        {isClient && <HomePageImages />}
      </div>

      <Features />
      <Footer />
    </div>
  );
}
