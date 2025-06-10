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
    <div>
      {/* Mobile Tablets */}
      <div className="lg:hidden flex flex-col items-center justify-between gap-10 py-12 bg-black">
        <h2 className="text-white text-2xl md:text-3xl font-medium">
          Why Choose Us
        </h2>
         <img loading="lazy" src="/navbar-logo.png" alt="logo" className="w-30 md:w-42" />
        <div className="w-full">
          {whyChooseUsArray.map((item, index) => {
            return (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                key={index}
              >
                <AccordionItem
                  value={`item-${item.id}`}
                  key={item.id}
                  className="flex flex-col items-center justify-between"
                >
                  <AccordionTrigger className="border-b-2 border-gray-200 rounded-none">
                    <div className="w-[75vw] flex items-center justify-between gap-4 py-1">
                       <img loading="lazy" src={item.icon} alt="" className="w-5 md:w-10" />
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

      {/* Web */}
      <div className="hidden lg:flex bg-[url('/why-choose-us-bg-web.png')] bg-cover bg-center bg-no-repeat h-screen">
        {/* Glassmorphism Container */}
        <div className="relative w-1/2 backdrop-blur-[35px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-[#2E3D44]/30">
          <h2 className="absolute top-20 -right-20 text-3xl font-semibold">
            Why Choose Us
          </h2>
          <div className="h-full flex flex-col items-end justify-center gap-10 pt-24">
            {whyChooseUsArray.map((item, index) => {
              return (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  key={index}
                >
                  <AccordionItem
                    value={`item-${item.id}`}
                    key={item.id}
                    className="flex flex-col items-center justify-between w-fit ml-16"
                  >
                    <AccordionTrigger className="rounded-none">
                      <div className="flex w-[32vw]">
                         <img loading="lazy"
                          src={item.icon}
                          alt={`${item.title} icon`}
                          className="w-7 pb-4 border-b-2 border-gray-200"
                        />
                        <p className="pl-5 pb-4 border-b-2 border-gray-200 text-white text-xl font-light flex-1 text-left">
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
         <img loading="lazy"
          src="/logo.png"
          alt=""
          className="h-[42px] w-[132px] mx-auto mt-12"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
