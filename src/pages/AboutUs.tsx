import Hero from "../sections/AboutUs/Hero"
import AboutUsSection from "../sections/AboutUs/AboutUsSection"
import MeetTheTeam from "../sections/AboutUs/MeetTheTeam"
import OurCoreValues from "../sections/AboutUs/OurCoreValues"
import OurPartners from "../sections/AboutUs/OurPartners"
import Footer from "../components/Footer"

const AboutUs = () => {
  return (
    <div className="montserrat-regular">
     <Hero/>
     <AboutUsSection/>
     <MeetTheTeam/>
     <OurCoreValues/>
     <OurPartners/>
     <Footer/>
    </div>
  )
}

export default AboutUs
