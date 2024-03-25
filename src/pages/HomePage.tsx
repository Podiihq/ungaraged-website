import Logo from "../assets/Logo/Logo.svg"
import { ArrowForward, SearchIcon } from "../components/Icons"
import Hero from "../assets/images/hero/Hero.png"
import HeroMobile from "../assets/images/hero/HeroMobile.png"
import MouseSvg from "../assets/images/icons/mouse.svg"
import HeroVideo from "../assets/videos/vid-2.mp4"


const HomePage = () => {
    return (
        <div className="bg-black text-white">
            <NavBar />
            <section className="relative">
                <div className="relative">
                    <img src={Hero} alt="" className="object-cover w-full -z-10 hidden lg:block" />
                    <img src={HeroMobile} alt="" className="object-cover w-full -z-10 lg:hidden" />
                    <div className="absolute left-0 bottom-[40%] lg:left-[5%] lg:bottom-[40%] md:px-24 lg:px-8 italic text-white">
                        <div className="z-50 lg:w-1/2 mt-32 px-4">
                            <p className="font-bold ">Lets Tune Your Car</p>
                            <p className="text-[44px] lg:text-[96px] font-[900] uppercase leading-none">Speed, <span className="text-[#FE5C43]">Power </span>Performance.</p>
                            <p className="lg:px-0 text-sm lg:text-base mt-4">Experience the exhilaration of driving beyond limits, where power, speed, and performance converge to redefine what's possible on the road, unleashing the full potential of your vehicle and leaving ordinary behind.</p>
                        </div>
                        <div className="flex lg:mt-8 px-4 mt-4">
                            <a href="#" className="relative">
                                <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-white -skew-x-[15deg] transform"></span>
                                <span className="-skew-x-[15deg] transform flex items-center gap-2 bg-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition duration-100">
                                    <p className="skew-x-[15deg]">Get in Touch</p>
                                    <div className="skew-x-[15deg]">
                                        <ArrowForward />
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center absolute bottom-20 left-[50%]">
                        <img src={MouseSvg} alt="" className="w-8" />
                    </div>
                </div>
            </section>
            <section>
                <div className="">
                    <video autoPlay muted loop src={HeroVideo} className="w-full"></video>
                    {/* <video autoPlay muted loop src={HeroVideo2} className="w-full"></video> */}
                </div>
            </section>
            <section>
                <div>

                </div>
            </section>
        </div>
    )
}

export default HomePage


export const NavBar = () => {
    return (
        <div className="bg-black text-white">
            <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                <div className="flex justify-between items-center">
                    <img src={Logo} alt="" className="w-32 lg:w-auto" />
                    <div className="lg:flex items-center gap-6 text-sm hidden">
                        <a href="">Services</a>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <SearchIcon />
                        <p className="text-sm hidden lg:blok">Search your car</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
