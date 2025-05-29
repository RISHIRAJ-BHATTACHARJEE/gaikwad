interface CardProps {
    card: {
      review: string;
      bgImage: string;
      profileImage: string;
      name: string;
      designation: string;
      rating: number;
    };
  }

export const Card = ({ card }: CardProps) => (
    <div
      className="h-[415px] w-[270px] bg-cover rounded-3xl"
      style={{ backgroundImage: `url('/${card.bgImage}.png')` }}
    >
      <div
        className="flex flex-col items-center justify-between p-6 backdrop-blur-[5px] h-full rounded-3xl shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15"
        style={{
          background:
            "linear-gradient(to right, #00000080, #00000000), rgba(255, 255, 255, 0.15)",
        }}
      >
        <img src="/icons/quote.png" alt="quote" className="w-8 self-end mr-6" />
        <p className="text-white text-xs font-light leading-5">{card.review}</p>
        <div className="flex items-center justify-between w-full">
          <div className="flex text-white gap-2 text-sm">
            <img src="review-avatar.png" alt="avatar" className="w-10" />
            <div>
              <h2>{card.name}</h2>
              <p>{card.designation}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center bg-gray-500 px-1 rounded-2xl">
            <img src="/icons/Star.png" alt="star" className="w-2.5" />
            <p className="text-[10px] text-white">{card.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );