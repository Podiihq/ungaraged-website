import { ArrowForward } from "../components/Icons"
import Hero from "../assets/images/hero/Hero.png"
import HeroMobile from "../assets/images/hero/HeroMobile.png"
import MouseSvg from "../assets/images/icons/mouse.svg"
import HeroVideo from "../assets/videos/vid-2.mp4"
import { NavBar } from "../components/NavBar"


const HomePage = () => {
    return (
        <div className="bg-black text-white">
            <NavBar />
            <section className="relative">
                <div className="relative">
                    <img src={Hero} alt="" className="object-cover w-full -z-10 hidden md:block h-screen" />
                    <img src={HeroMobile} alt="" className="object-cover w-full -z-10 md:hidden h-screen" />
                    <div className="absolute bottom-[40%] left-0 lg:left-[5%] 3xl:left-[20%] md:px-24 lg:px-8 italic text-white">
                        <div className="z-50 md:w-4/5 lg:w-1/2 mt-32 px-4 md:px-0">
                            <p className="font-bold text-center md:text-left">Lets Tune Your Car</p>
                            <p className="hidden md:block text-[64px] 2xl:text-[96px] font-[900] uppercase leading-none">Speed, <span className="text-[#FE5C43]">Power </span>Performance.</p>
                            <p className="text-center md:hidden text-[40px] font-[900] uppercase leading-none">
                                Speed, <span className="text-[#FE5C43]">Power<br />  </span>Performance.</p>
                            <p className="lg:px-0 text-sm lg:text-base mt-4 text-center md:text-left">Experience the exhilaration of driving beyond limits, where power, speed, and performance converge to redefine what's possible on the road, unleashing the full potential of your vehicle and leaving ordinary behind.</p>
                        </div>
                        <div className="flex justify-center md:justify-start lg:mt-8 px-4 md:px-0 mt-4">
                            <a href="#" className="relative">
                                <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-white -skew-x-[15deg] transform"></span>
                                <span className="hover:translate-y-2 transform duration-300 -skew-x-[15deg] flex items-center gap-2 bg-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
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
            <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                <div className="">
                    <video autoPlay muted loop src={HeroVideo} className="w-full"></video>
                    {/* <video autoPlay muted loop src={HeroVideo2} className="w-full"></video> */}
                </div>
            </section>

            <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div className="italic grid lg:grid-cols-2 gap-3">
                    <div>
                        <p className="font-bold uppercase text-[#FE5C43] mb-4">Service 01</p>
                        <p className="text-3xl md:text-5xl lg::text-[60px] font-[900] uppercase leading-none">CAR TunING: See If Your Car Qualifies.</p>
                    </div>
                    <div className="place-self-center">
                        <p>Discover if your car is ready to unlock its full potential with our tuning services. Enter your car's type, model, or make to see if we can enhance its performance and take your driving experience to the next level.</p>
                    </div>
                </div>
                <div>
                    <CarFilter />
                </div>
            </section>
        </div>
    )
}

export default HomePage



export const CarFilter = () => {
    return (
        <div>
            <div className=" mt-6">

                <div className="flex flex-col text-white italic">
                    <div className="bg-[#141414] p-6">
                        <form className="">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-white">Select Make</label>
                                    <select id="manufacturer" className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2">
                                        <option>Audi</option>
                                        <option>Starbucks</option>
                                        <option>Hilti</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-white">Select Model</label>
                                    <select id="manufacturer" className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2">
                                        <option>Q5</option>
                                        <option>Starbucks</option>
                                        <option>Hilti</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-white">Select Make</label>
                                    <select id="manufacturer" className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2">
                                        <option>2019</option>
                                        <option>Starbucks</option>
                                        <option>Hilti</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="">
                                        <div className="flex justify-center md:justify-start place-self-center md:mt-4">
                                            <a href="#" className="relative w-full">
                                                {/* <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-white transform"></span> */}
                                                <span className="hover:-translate-y-1 transform duration-300 flex justify-center items-center gap-2 bg-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                                    <p className="">Search</p>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}
