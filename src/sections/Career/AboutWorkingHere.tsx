const facilities = [
  {
    img: "/icons/environment.png",
    title: "Conducive Environment",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img: "/icons/gadgets.png",
    title: "Best Gadgets",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img: "/icons/meal.png",
    title: "Healthy Meals & Snacks",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img: "/icons/learning.png",
    title: "Culture of Learning",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img: "/icons/meds.png",
    title: "Medical Insurance",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img: "/icons/success.png",
    title: "Shared Success",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const AboutWorkingHere = () => {
  return (
    <div className="bg-gradient-to-l from-[#CE3631] to-[#E64237E5] text-white px-6 py-12">
      <h2 className="uppercase text-center font-semibold text-xl">About working here</h2>
      <p className="text-center py-12 font-light">
        Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
        porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Quis a
        lacus molestie praesent suspendisse ac tellus. Auctor tristique ultrices
        magna purus. Lorem ipsum dolor sit amet consectetur. Ac consequat at nec
        id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
        cras. Quis a lacus molestie praesent suspendisse ac tellus. Auctor
        tristique ultrices magna purus.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <div key={index} className="flex flex-col gap-4 items-center justify-center">
            <img src={facility.img} alt={facility.title} className="w-8"/>
            <h2 className="font-semibold text-center">{facility.title}</h2>
            <p className="text-center text-xs">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutWorkingHere;
