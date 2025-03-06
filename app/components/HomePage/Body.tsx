import { AvatarCircles } from "@/components/avatar-circles";
import { BlurFade } from "@/components/magicui/blur-fade";
import avatarUrl from "../../Images/AvatarImages/avatarUrl.jpg";
import avatarUrl1 from "../../Images/AvatarImages/avatarUrl1.png";
import avatarUrl2 from "../../Images/AvatarImages/avatarUrl2.jpg";
import avatarUrl3 from "../../Images/AvatarImages/avatarUrl3.png";
import avatarUrl4 from "../../Images/AvatarImages/avatarUrl4.png";
import avatarUrl5 from "../../Images/AvatarImages/avatarUrl5.jpg";


export default function Body(){
    const time=0.25
    return(
        <>
           <BlurFade delay={time * 5} inView>
        
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
      <p className="w-[70vw] mt-4 text-center sm:w-[25vw] font-medium text-[#92A0B5]">
        More than 12 trusted partners using <span className="text-gray-50">Feedback.io</span>
      </p>
    </BlurFade>
        </>
    )
}