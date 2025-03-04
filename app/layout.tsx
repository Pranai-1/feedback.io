import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
// import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import default styles
import "./styles/toastStyles.css"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Feedback.io",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true} // Remove the progress bar for a cleaner look
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast-container"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        style={{ zIndex: 9999 }}
      />
              
          {/* <Navbar/> */}
          {/* <UserContextProvider> */}
          {children}
          
          {/* </UserContextProvider> */}
      </body>
    </html>
  );
}
