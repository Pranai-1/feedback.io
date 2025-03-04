import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";
import React from "react";


const faqData = [
  {
    value: "item-1",
    question: "What is Feedback.io?",
    answer:
      "Feedback.io is a testimonial widget integration website that is free to use and highly simplified.We offer Manual and Auto carousel widget which supports in your HTML,React and Next.js applications",
  },
  {
    value: "item-2",
    question: "How can Feedback.io improve user Testimonial collection?",
    answer:
      "Feedback.io improves user feedback collection by providing an easy-to-use and integrate Testimonial widget, making it simple to showcase in websites.",
  },
  {
    value: "item-3",
    question: "What are the key features of Feedback.io?",
    answer:
      "Key features of Feedback.io include ease of use, seamless integration, and a simplified interface for collecting and embedded the testimonials of users.",
  },
  {
    value: "item-4",
    question:
      "Is Feedback.io suitable for both small businesses and large enterprises?",
    answer:
      "Yes, Feedback.io is designed to be scalable and can accommodate the needs of both small businesses and large enterprises. Its simplicity makes it accessible for smaller teams, while its robust features can handle larger volumes of feedback for bigger organizations.",
  },
  {
    value: "item-5",
    question: "Can I customize the widget to match my brand?",
    answer:
      "As of now, Feedback.io only offers manual and Auto carousel widget which allow you to adjust the look and feel of the feedback form to align with your brand's visual identity. But in future you can modify it more like fonts, custom colors and layout to ensure a seamless integration with your website or application.",
  },
];

const Accordian = () => {
  return (
    <div>
      <div className="min-w-[75vw] mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="mb-2 text-center text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
          FAQ&apos;s
        </h1>
        <p className="max-w-md mb-4 text-center text-sm text-gray-400 dark:text-gray-400">
          Some common FAQ&apos;s about Feedback.io
        </p>
        <Accordion type="single" collapsible className="w-[80vw] text-sm text-gray-100">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
