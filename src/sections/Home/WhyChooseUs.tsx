import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whyChooseUsArray = [
  {
    id: 1,
    icon: "/icons/wallet.png",
    title: "Find out how much you can afford",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    id: 2,
    icon: "/icons/coins-stack.png",
    title: "Understand your monthly costs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    id: 3,
    icon: "/icons/clip-board.png",
    title: "Get help with your down payments",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    id: 4,
    icon: "/icons/wallet.png",
    title: "Find out how much you can afford",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    id: 5,
    icon: "/icons/coins-stack.png",
    title: "Understand your monthly costs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10 py-12 bg-black">
      <h2 className="text-white text-2xl md:text-3xl font-medium">
        Why Choose Us
      </h2>
      <img src="/navbar-logo.png" alt="logo" className="w-30 md:w-42" />
      <div className="w-full">
        {whyChooseUsArray.map((item, index) => {
          return (
            <Accordion type="single" collapsible className="w-full" key={index}>
              <AccordionItem
                value={`item-${item.id}`}
                key={item.id}
                className="flex flex-col items-center justify-between"
              >
                <AccordionTrigger className="border-b-2 border-gray-200 rounded-none">
                  <div className="w-[75vw] flex items-center justify-between gap-4 py-1">
                    <img src={item.icon} alt="" className="w-5 md:w-10" />
                    <p className="text-white text-sm md:text-2xl md:font-light md:w-full md:pl-12 text-nowrap">
                      {item.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="w-full md:text-xl md:w-[80%] md:mx-auto">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
