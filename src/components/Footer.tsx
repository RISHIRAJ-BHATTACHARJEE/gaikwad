import { ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <div className="bg-[#17262A] p-6 text-white ">
      <img src="/navbar-logo.png" alt="logo" className="w-48"/>
      {/* Logos */}
      <div className="flex gap-3 py-7">
        <img src="/icons/instagram.png" alt="instagram" className="w-4 ml-2"/>
        <img src="/icons/facebook.png" alt="facebook" className="w-4"/>
        <img src="/icons/telegram.png" alt="telegram" className="w-4"/>
        <img src="/icons/x.png" alt="x" className="w-4"/>
      </div>
      {/* Links */}
      <ul className="ml-2 flex flex-col md:flex-row gap-5 md:gap-8 text-lg">
        <li>Home</li>
        <li>About Us</li>
        <li>Career</li>
        <li>Projects</li>
        <li>3d Tour</li>
        <li>Blogs</li>
        <li>Newsletter</li>
      </ul>
      <p className="text-sm ml-2 py-6 font-light">Sign up for exclusive offers & news</p>
      <div className="flex border-b w-fit pb-2 ml-2">
        <input type="text" placeholder="Enter Email"/>
        <ArrowRight strokeWidth={1} className="text-white"/>
      </div>
      <h2 className="text-center text-[#808080] px-10 w-fit md:w-full md:text-xl leading-7 pt-12">COPYRIGHT 2025 REAL ESTATE 
      ALL RIGHTS RESERVED</h2>
    </div>
  )
}

export default Footer
