import Logo from "../assets/Logo/Logo.svg"
import { SearchIcon } from "./Icons"

export const NavBar = () => {
    return (
        <div className="bg-black text-white">
            <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                <div className="flex justify-between items-center">
                    <img src={Logo} alt="" className="w-32 lg:w-auto" />
                    <div className="lg:flex items-center gap-6 text-sm hidden">
                        <a href="#services" className="hover:underline hover:text-[#FE5C43]">Services</a>
                        <a href="#about" className="hover:underline hover:text-[#FE5C43]">About Us</a>
                        <a href="/contact" className="hover:underline hover:text-[#FE5C43]">Contact Us</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <SearchIcon />
                        <p className="text-sm hidden md:block">Search your car</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
