const Plans = () => {
  return (
    <div className="bg-linear-to-b from-[#CE3631] to-[#E64237E5] text-white flex flex-col items-center justify-center montserrat-regular p-[20px] gap-6">
        <h2 className="text-xl font-semibold">PLANS</h2>
        {/* Tabs */}
        <div className="flex border rounded-xl">
            <button className="px-3 py-2 bg-white text-[#CE3631] rounded-l-xl border-r">Unit</button>
            <button className="px-3 py-2 border-r">Floor</button>
            <button className="px-3 py-2 border-r">Floor (Layout)</button>
            <button className="px-3 py-2 ">Misc</button>
        </div>
        <div>
            <h2 className="text-center font-semibold text-xl">OPTIMAX</h2>
            <div className="flex flex-col items-center">
                <img src="/uniqo-unit-plan.png" alt="" />
                <button className="bg-white rounded-2xl px-4 py-2 text-black mb-4">View & Download</button>
                <div className="flex gap-3">
                    <img src="/icons/comp-proj-left-arrow.png" alt="" className="w-16"/>
                    <img src="/icons/comp-proj-right-arrow.png" alt="" className="w-16"/>
                </div>
                <button className="bg-white rounded-2xl px-4 py-2 text-black mb-3 uppercase font-medium mt-4">Download Masterplan & Pricing</button>
            </div>
        </div>
    </div>
  )
}

export default Plans
