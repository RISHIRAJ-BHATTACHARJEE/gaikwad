const Amenities = () => {
  return (
    <div className="px-6 flex flex-col gap-10 py-10">
      <h2 className="capitalize font-semibold text-xl">Check out our<br/> top class <span className="uppercase text-red-500">Amenities</span></h2>
      <p className="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing</p>
      <div className="flex items-center justify-between">
        <div className="text-center flex flex-col gap-3">
          <h2 className="">Years of<br/> Experience</h2>
          <h2 className="font-bold">7239</h2>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2>States</h2>
          <h2 className="font-bold">79<span className="text-zinc-500">+</span></h2>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2>States</h2>
          <h2 className="font-bold">79<span className="text-zinc-500">+</span></h2>
        </div>
      </div>
      <img src="/swimming-pool.png" alt="" />
    </div>
  )
}

export default Amenities
