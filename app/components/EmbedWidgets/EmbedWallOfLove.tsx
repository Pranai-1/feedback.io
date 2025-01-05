// import Image from "next/image"
// import image1 from "../../static/Images/image1.jpg"
// import image2 from "../../static/Images/image2.jpg"
// import image3 from "../../static/Images/image3.jpg"
// import image4 from "../../static/Images/image4.jpg"
// import profileImage1 from "../../static/Images/profileImage1.jpg"
// import profileImage2 from "../../static/Images/profileImage1.png"
// import FeedbackStarsDisplay from "../Feedback/FeedbackStarsDisplay"
import CarouselSlider from "./CarouselSlider"

//const imageArray=[{profileImage:profileImage1,image1,image2},{profileImage:profileImage2,image1:image3,image2:image4}]

export default function EmbedWallOfLove(){
  
    return(
        <div className=" h-full w-full flex justify-center items-start">
            <div className="bg-[#FFFFFF] rounded-md h-max w-[100%]  flex flex-col justify-center items-center gap-4 pb-4">
            <p className="  w-max  text-3xl font-semibold mt-4 text-black">Embed a Wall of Love</p>
            <div className="flex justify-center items-center gap-8">
                <p className="rounded-lg bg-gray-200 p-1 px-4 text-lg">Step 1</p>
                <p className="text-black text-lg">Choose a layout</p>
            </div>
            {/* {Array.from({length:2}).map((_,idx)=>(
                <div className="flex flex-col gap-2 border border-gray-300 rounded-md w-[30%] p-2" key={idx}>
                <div className="flex w-full justify-start items-center gap-4">
                  <Image src={imageArray[idx].profileImage.src} alt="profile photo" height={32} width={32} 
                  className="rounded-full"/>
                  <p>Name of Individual</p>
                </div>
                <FeedbackStarsDisplay starRating={4}/>
                <Image src={imageArray[idx].image1.src} alt="image1" 
                layout="responsive" 
                width={120} 
                height={120} 
                className="rounded-md"
                />
                <p>review Text</p>
                </div>
            ))} */}
           <CarouselSlider/>
            </div>
       
        </div>
    )
}