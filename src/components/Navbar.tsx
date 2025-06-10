import { Menu } from "lucide-react"

const navLinks = [
    {
        name: "Home",
        href: '/home'
    },
    {
        name: "About us",
        href: '/about-us'
    },
    {
        name: "Career",
        href: '/career'
    },
    {
        name: "Projects",
        href: '/projects'
    },
    {
        name: "Why choose us",
        href: '/why-choose-us'
    },
    {
        name: "Blogs",
        href: '/blogs'
    }
]

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 flex items-center justify-between px-48 pt-16">
       <img loading="lazy" src="/navbar-logo.png" alt="logo" className="w-[190px] h-[61px]"/>
      <div className="flex items-center text-white gap-8 text-lg">
        {navLinks.map((item, index)=>(
            <ul key={index}>
                <li className="hover:text-[#e74238] cursor-pointer transition-colors duration-300 ease-in-out">{item.name}</li>
            </ul>
        ))}
      </div>
      <button className="flex items-center justify-center gap-3 font-light text-lg border-1 border-zinc-400 px-4 rounded-full py-2 text-white hover:text-[#e74238] hover:border-[#e74238] cursor-pointer transition-colors duration-300 ease-in-out">
        <Menu/>
        Menu
      </button>
    </div>
  )
}


export default Navbar
