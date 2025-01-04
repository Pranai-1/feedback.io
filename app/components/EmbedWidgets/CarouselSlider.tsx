import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";  // Import Pagination module correctly
import Image from "next/image";
import FeedbackStarsDisplay from "../Feedback/FeedbackStarsDisplay";

// Import Images
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.jpg";
import profileImage1 from "../../Images/profileImage1.jpg";
import profileImage2 from "../../Images/profileImage2.png";

const imageArray = [
  {
    profileImage: { src: profileImage1.src },
    image1: { src: image1.src },
    image2: { src: image2.src },
  },
  {
    profileImage: { src: profileImage2.src },
    image1: { src: image3.src },
    image2: { src: image4.src },
  },
];

export default function CarouselSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".swiper-pagination", // Custom class for pagination positioning
      }}
      className="w-[90%] sm:w-[60%] lg:w-[30%] relative h-[300px]  flex gap-4" // Relative for absolute positioning of pagination
    >
      {imageArray.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-4 shadow-md">
            {/* Profile Section */}
            <div className="flex w-full justify-start items-center gap-4">
              <Image
                src={item.profileImage.src}
                alt="profile photo"
                height={32}
                width={32}
                className="rounded-full"
              />
              <p>Name of Individual</p>
            </div>

            {/* Feedback Section */}
            <FeedbackStarsDisplay starRating={4} />
          <div className="flex justify-center items-center gap-4">
            {/* Image Display */}
            <Image
              src={item.image1.src}
              alt="image1"
              width={120}
              height={80}
              className="rounded-md max-h-[80px] min-h-[80px] w-[120px]"
            />
           <Image
              src={item.image2.src}
              alt="image2"
              width={120}
              height={80}
              
               className="rounded-md max-h-[80px] min-h-[80px] w-[120px]"
            />
            </div>
            {/* Review Text */}
            <p>Review Text</p>
          </div>
        </SwiperSlide>
      ))}

      {/* Custom Pagination Dots inside the Swiper */}
      <div className="swiper-pagination absolute top-[60%] left-1/2 transform -translate-x-1/2 space-x-2"></div>

    </Swiper>
  );
}
