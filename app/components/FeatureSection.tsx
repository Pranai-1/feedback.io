import {
    Palette,
    CloudLightning,
    BarChart,
    Users,
    Bot,
    MonitorSmartphone,
  } from "lucide-react";
  
  interface Feature {
    id: number;
    name: string;
    description: string;
    icon: JSX.Element;
  }
  
  const iconSize = 16;
  
  const FeaturesData: Feature[] = [
    {
      id: 1,
      name: "Instant Feedback Collection",
      description:
        "Seamlessly gather user feedback in real-time to capture their opinions and suggestions immediately.",
      icon: <CloudLightning size={iconSize} />,
    },
    {
      id: 2,
      name: "Custom Testimonial Widgets",
      description:
        "Design Testimonial widgets that blend perfectly with your website&apos;s aesthetics and user experience.",
      icon: <Palette size={iconSize} />,
    },
    {
      id: 3,
      name: "Comprehensive Feedback Analytics",
      description:
        "Analyze feedback trends and patterns with detailed reports to make informed decisions.",
      icon: <BarChart size={iconSize} />,
    },
    {
      id: 4,
      name: "Multi-library Integration",
      description:
        "Integrate feedback collection across various libraries, including react, html.",
      icon: <MonitorSmartphone size={iconSize} />,
    },
    {
      id: 5,
      name: "Feedback Categorization",
      description:
        "Organize feedback into categories for better management and actionable insights.",
      icon: <Users size={iconSize} />,
    },
    {
      id: 6,
      name: "Automated Feedback Follow-ups",
      description:
        "Set up automated responses to acknowledge and follow up on user feedback promptly.",
      icon: <Bot size={iconSize} />,
    },
  ];
  
  const FeaturesGrid = () => {
    return (
      <div>
        <div className="mt-2 px-3 md:grid flex flex-col w-full grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-3 pt-10 ">
          {FeaturesData.map((feature) => {
            return (
              <div key={feature.id} className="width-fit text-left">
                <div className="flex items-center gap-4">
                  {" "}
                  <div className="mb-2 w-fit rounded-lg bg-slate-700 p-1 text-center text-white text-lg">
                    {feature.icon}
                  </div>
                  <div className="mb-1 font-normal text-gray-200 text-lg">
                    {feature.name}
                  </div>
                </div>
                <div className="font-regular max-w-sm text-xs text-gray-400 text-md font-medium">
                  {feature.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  const FeatureSections = () => {
    return (
      <div className="my-12 min-w-[90vw] flex w-full flex-col items-center justify-center gap-2">
        <p className="mb-2 text-center text-2xl font-medium text-gray-200 md:text-3xl ">
          Feedback.io is Not Like Other Testimonials App.
        </p>
        <p className="max-w-md text-center text-sm text-gray-400 font-medium dark:text-gray-400">
        Feedback.io is a free to use, and highly simplified testimonial widget
          integration website.
        </p>
        <FeaturesGrid />
      </div>
    );
  };
  
  export default FeatureSections;
  