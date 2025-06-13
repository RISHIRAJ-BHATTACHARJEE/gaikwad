import Footer from "@/components/Footer";
import Amenities from "@/sections/Uniqo/Amenities";
import Description from "@/sections/Uniqo/Description";
import Hero from "@/sections/Uniqo/Hero";
import Landmark from "@/sections/Uniqo/Landmark";
import Plans from "@/sections/Uniqo/Plans";
import PriceBreakup from "@/sections/Uniqo/PriceBreakup";
import ThingsThatMatter from "@/sections/Uniqo/ThingsThatMatter";

const Uniqo = () => {

  return (
    <>
      <Hero/>
      <Description/>
      <PriceBreakup/>
      <Plans/>
      <ThingsThatMatter/>
      <Amenities/>
      <Landmark/>
      <Footer/>
    </>
  )
};

export default Uniqo;
