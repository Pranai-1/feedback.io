
import { Marquee } from "@/components/ui/marquee";
import SliderCard from "../components/Slider/SliderCard";
import { FeedbackPropType } from "../api/types";
import { reviewData } from "../static/reviewData";
// Assuming `SliderCard` is already imported correctly


const reviews=reviewData as FeedbackPropType[]

const firstRow = reviews.slice(0, reviews.length / 1);

export default  function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full  flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover   className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <SliderCard key={review.name} i={index} review={review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
