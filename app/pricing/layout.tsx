import Navbar from "../components/HomePage/Navbar";


export default function SpacesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
     <div className="bg-black">
         <Navbar/>
      
         {children}
         </div>
    );
  }
  