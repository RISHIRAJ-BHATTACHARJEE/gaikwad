const openPositions = [
  {
    title: "Sales",
    description: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    title: "Planning",
    description: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    title: "Management",
    description: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    title: "Operations",
    description: "Lorem ipsum dolor sit amet consectetur."
  },
]

const OpenPositions = () => {
  return (
    <div className="py-12 px-8">
      <h2 className="text-xl uppercase text-center font-semibold pt-6">Open Positions</h2>
      <div className="my-12">
        {openPositions.map((position, index) => (
          <div key={index} className="border-b border-zinc-500 py-6 flex">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl">{position.title}</h2>
              <p className="text-zinc-500 pr-10">{position.description}</p>
            </div>
            <button className="text-white text-nowrap text-sm bg-[#E74238] my-5.5 px-4 rounded-full">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OpenPositions
