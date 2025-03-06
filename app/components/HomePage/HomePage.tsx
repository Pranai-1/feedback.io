



import { ScrollProgress } from "@/components/scroll-progress";
import Header from "./Header";
import Body from "./Body";
import Footer from "../Footer";
import Features from "./Features";
import HomePageImages from "./HomePageImages";


export default function HomePage(){
    return(
        <div className="w-[100%] h-[2700px] md:h-[2410px] bg-black relative overflow-auto">
            
        <ScrollProgress className="top-[85px] z-10 rounded-lg" />
            <div className="flex flex-col justify-center items-center absolute top-0 right-0 left-0 bg-black">
                <Header/>

                <div className="flex flex-col justify-center items-center w-full">
                <Body/>
                 </div>
                 <div className="w-[90vw] flex justify-center items-center my-12 bg-black">
                     <HomePageImages />
                 </div>
                
                        <Features />
                       
                        <Footer />
                </div>
            </div>
    
    )
}