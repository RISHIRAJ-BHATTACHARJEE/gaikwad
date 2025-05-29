import { ReviewCarousel } from "../../components/ui/review-carousel";


const reviewSlides = [
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-2",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-1",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-3",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-2",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-1",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-3",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
];

const Reviews = () => {

  return (
    <div className="bg-gradient-to-r overflow-x-hidden flex flex-col items-center justify-center gap-8 from-[#24343B] to-[#0C1C20] pt-12 pb-20 md:pb-0 md:h-[90vh]">
      <h2 className="text-white text-2xl md:text-4xl uppercase font-medium">reviews</h2>
      <ReviewCarousel slides={reviewSlides}/>
    </div>
  );
};

export default Reviews;