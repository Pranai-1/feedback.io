import Navbar from "@/app/components/HomePage/Navbar";



export default function FeedbacksLayout({
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
