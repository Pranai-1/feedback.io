import Navbar from "@/app/components/Navbar";


export default function FeedbacksLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>
    <Navbar/>
    {children}
    </>
  }
  