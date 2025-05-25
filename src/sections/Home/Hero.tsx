import { MenuIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[url('/bg-1-mobile.png')] bg-cover bg-no-repeat flex flex-col pt-7">
      <div className="bg-[#0C1C20] mx-4 p-6 flex flex-col text-white items-center">
        <div className="flex items-center justify-between w-full p-2">
          <img src="/navbar-logo.png" alt="logo" className="w-34" />
          <MenuIcon className="text-white" />
        </div>
        <h2 className="uppercase font-semibold text-3xl pt-16 tracking-wider">
          dream estate
        </h2>
        <div className="relative">
          <img src="1.png" alt="" />
          <div className="absolute -right-8 top-7">
            {/* Avatars */}
            <div className="flex space-x-[-5px]">
              <img
                src="avatar-1.png"
                alt="avatar-1"
                className="size-6 rounded-full"
              />
              <img
                src="avatar-2.png"
                alt="avatar-1"
                className="size-6 rounded-full"
              />
              <img
                src="avatar-1.png"
                alt="avatar-1"
                className="size-6 rounded-full"
              />
              <span className="size-6 rounded-full bg-white text-black text-[8px] text-center pt-1.5">
                +5
              </span>
            </div>
            <p className="text-[5px] w-2/3 text-center pt-2">People successfully got their dream property</p>
          </div>
        </div>
        <p className="text-center font-light text-xs px-4 leading-5 py-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text
        </p>
        <button className="primary text-sm">Discover More</button>
      </div>
    </div>
  );
};

export default Hero;
