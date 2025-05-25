const AvatarGroup = () => {
  return (
    <div className="flex items-center">
      {/* First Avatar */}
      <img
        src="/avatar-image-1.jpg"
        alt="Avatar 1"
        className="w-14 h-14 rounded-full border-2 border-[#0C1C20] object-cover -ml-0"
      />
      {/* Second Avatar */}
      <img
        src="/avatar-image-2.jpg"
        alt="Avatar 2"
        className="w-14 h-14 rounded-full border-2 border-[#0C1C20] object-cover -ml-3"
      />
      {/* Third Avatar */}
      <img
        src="/avatar-image-1.jpg"
        alt="Avatar 3"
        className="w-14 h-14 rounded-full border-2 border-[#0C1C20] object-cover -ml-3"
      />
      {/* +5 Avatar */}
      <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold -ml-3 border-2 border-[#0C1C20]">
        +5
      </div>
    </div>
  );
};


export default AvatarGroup;
