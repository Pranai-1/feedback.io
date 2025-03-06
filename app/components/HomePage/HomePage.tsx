



import { ScrollProgress } from "@/components/scroll-progress";
import Header from "./Header";
import Body from "./Body";
import Footer from "../Footer";
import Features from "./Features";
import HomePageImages from "./HomePageImages";
import { Particles } from "@/components/magicui/particles";
import ShineBorder from "@/components/ui/shine-border";


export default function HomePage(){
    return(
        <div className="w-[100%] h-[2900px] sm:h-[2700px] md:h-[2600px] lg:h-[2410px] bg-black relative overflow-hidden">
             <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <ScrollProgress className="top-[85px] z-10 rounded-lg" />
       
          
            <div className="flex flex-col justify-center items-center absolute top-0 right-0 left-0 bg-black">
                <Header/>

                <div className="flex flex-col justify-center items-center w-full mb-16">
                <Body/>
                <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
                 </div>
                 <ShineBorder>
                 <div className="w-[90vw] sm:w-[70vw] flex justify-center p-1  items-center  bg-black">
         
                     <HomePageImages />
                 </div>
                 </ShineBorder>
                 <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
                        <Features />
                       
                        <Footer />
                </div>
            </div>
    
    )
}