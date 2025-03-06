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
  metadataBase: new URL("https://www.feedback.io"),
  title: {
    default: "Feedback.io: Collect, Manage & Showcase Testimonials",
    template: "%s - Feedback.io",
  },
  description:
    "Feedback.io helps you collect, manage, and showcase testimonials. Create spaces, gather user reviews, track feedback, and generate testimonial widgets effortlessly.",
  twitter: {
    card: "summary_large_image",
    title: "Feedback.io: Collect, Manage & Showcase Testimonials",
    description:
      "Feedback.io lets users create spaces, gather customer reviews, track testimonials, and generate testimonial widgets based on liked feedback.",
    images: ["https://upload.cc/i1/2025/03/06/Vzm2Wu.png"], // Replace with your actual banner URL
  },
  openGraph: {
    title: "Feedback.io: Collect, Manage & Showcase Testimonials",
    description:
      "Collect, manage, and display testimonials with Feedback.io. Users can create spaces, collect feedback, and generate widgets from top-rated reviews.",
    url: "https://www.feedback.io",
    siteName: "Feedback.io",
    images: [
      {
        url: "https://upload.cc/i1/2025/03/06/Vzm2Wu.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "schema-org": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Feedback.io",
      url: "https://www.feedback.io",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.feedback.io/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
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
