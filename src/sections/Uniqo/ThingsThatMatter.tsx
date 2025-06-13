const ThingsThatMatter = () => {
  return (
    <div className="bg-[#17262A] text-white bg-[url('/mobile-pattern.png')] bg-[length:510px_510px] bg-repeat bg-bottom flex flex-col items-center justify-center montserrat-regular p-[20px] gap-6">
      <h2 className="uppercase text-xl font-medium text-center">
        Things That Matter
      </h2>
      <div className="flex ">
        {/* Tile-1 */}
        <div className="flex flex-col items-center justify-center gap-10">
          <img src="/icons/fridge.png" alt="" className="w-1/4" />
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-medium">Kitchen</h2>
            <h2>Equipped with modern equipments</h2>
          </div>
        </div>
        {/* Tile-2 */}
        <img src="/icons/bedroom.png" alt="" className="w-1/5 hidden lg:block"/>
      </div>

      <div className="flex gap-3">
        <img src="/icons/comp-proj-left-arrow.png" alt="" className="w-14" />
        <img src="/icons/comp-proj-right-arrow.png" alt="" className="w-14" />
      </div>
    </div>
  );
};

export default ThingsThatMatter;
