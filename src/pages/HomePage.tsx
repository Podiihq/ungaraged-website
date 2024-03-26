import { ArrowForward } from "../components/Icons"
import Hero from "../assets/images/hero/Hero.png"
import HeroMobile from "../assets/images/hero/HeroMobile.png"
import MouseSvg from "../assets/images/icons/mouse.svg"
import HeroVideo from "../assets/videos/vid-2.mp4"
import { NavBar } from "../components/NavBar"
import Service2 from "../assets/services/service2.png"
import Service4 from "../assets/services/service4.png"
import Star from "../assets/illustration/star.svg"
import Marquee from "react-fast-marquee"
import AboutImage from "../assets/about/AboutImage.png"
import AboutImage2 from "../assets/about/image.png"
import { CarFilter } from "../components/CarFilter"

import part1 from "../assets/parts/1.png"
import part2 from "../assets/parts/2.png"
import part3 from "../assets/parts/3.png"
import part4 from "../assets/parts/4.png"
import part5 from "../assets/parts/5.png"


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
                            <p className="font-bold text-center md:text-left uppercase">Lets Tune Your Car</p>
                            <p className="hidden md:block text-[64px] 2xl:text-[80px] font-[900] uppercase leading-none">Speed, <span className="text-[#FE5C43]">Power </span>Performance.</p>
                            <p className="text-center md:hidden text-[40px] font-[900] uppercase leading-none">
                                Speed, <span className="text-[#FE5C43]">Power<br />  </span>Performance.</p>
                            <p className="lg:px-0 text-sm lg:text-base mt-4 text-center md:text-left text-[#ABABAB]">Experience the exhilaration of driving beyond limits, where power, speed, and performance converge to redefine what's possible on the road, unleashing the full potential of your vehicle and leaving ordinary behind.</p>
                        </div>
                        <div className="flex justify-center md:justify-start lg:mt-8 px-4 md:px-0 mt-4">
                            <a href="#" className="relative">
                                <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                    <p className="skew-x-[10deg] text-[#FE5C43]">Get in Touch</p>
                                    <div className="skew-x-[10deg] text-[#FE5C43]">
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
                    <div className="place-self-center text-[#ABABAB]">
                        <p>Discover if your car is ready to unlock its full potential with our tuning services. Enter your car's type, model, or make to see if we can enhance its performance and take your driving experience to the next level.</p>
                    </div>
                </div>
                <div>
                    <CarFilter />
                </div>

            </section>
            <section className="py-10">
                <div className="grid lg:grid-cols-2">
                    <img src={Service2} alt="" />
                    <div className="lg:place-self-center italic px-4 mt-8 md:px-24 md:max-w-full">
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] mb-4">Service 02</p>
                            <p className="text-3xl md:text-5xl lg::text-[60px] font-[900] uppercase leading-none">cAR SERVICE AND MAINTENANCE </p>
                        </div>
                        <div className="mt-4 text-[#ABABAB]">
                            Explore the places you love with the people you love. It’s time to make some memories. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.
                        </div>
                        <div className="flex lg:mt-8 px-4 md:px-0 mt-4">
                            <a href="#" className="relative">
                                <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                    <p className="skew-x-[10deg] text-[#FE5C43]">Get in Touch</p>
                                    <div className="skew-x-[10deg] text-[#FE5C43]">
                                        <ArrowForward />
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div>
                    <div className="italic lg:w-1/2">
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] mb-4">Service 03</p>
                            <p className="text-3xl md:text-5xl lg::text-[60px] font-[900] uppercase leading-none">We sell performance parts</p>
                        </div>
                        <div className="mt-4 text-[#ABABAB]">
                            Explore the places you love with the people you love. It’s time to make some memories. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.
                        </div>
                    </div>
                    <Marquee direction="right">
                        <div className="mt-8 flex gap-6">
                            <img src={part1} alt="" className="ml-6 w-[300px] h-[400px] md:w-auto md:h-auto" />
                            <img src={part2} alt="" className="w-[300px] h-[400px] md:w-auto md:h-auto" />
                            <img src={part3} alt="" className="w-[300px] h-[400px] md:w-auto md:h-auto" />
                            <img src={part4} alt="" className="w-[300px] h-[400px] md:w-auto md:h-auto" />
                            <img src={part5} alt="" className="w-[300px] h-[400px] md:w-auto md:h-auto" />
                        </div>
                    </Marquee>

                </div>
            </section>
            <section className="italic">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                    <div>
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] mb-4 text-center">Service 04</p>
                            <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none text-center">Expert Car <br /> Importation Services </p>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="lg:w-1/2 mx-auto text-[#ABABAB]">
                                Expand your horizons with our expert car importation services, designed to bring your desired vehicle to your doorstep with ease. From navigating international regulations to arranging safe and efficient transport, we handle every step of the import process, so you can focus on enjoying your new ride. Let us turn your global automotive aspirations into reality, one import at a time
                            </p>
                        </div>
                    </div>
                    <img src={Service4} alt="" className="w-full " />
                </div>
            </section>
            <Marquee>
                <section className="flex gap-10 items-center overflow-hidden">
                    <p className="text-7xl lg:text-9xl font-[900] uppercase italic font-outline-2 hover:font-outline-4 text-transparent opacity-30">Power</p>
                    <img src={Star} alt="" />
                    <p className="text-7xl lg:text-9xl  font-[900] uppercase italic font-outline-2 hover:font-outline-4 text-transparent opacity-30">Performance</p>
                    <img src={Star} alt="" />
                    <p className="text-7xl lg:text-9xl  font-[900] uppercase italic font-outline-2 hover:font-outline-4 text-transparent opacity-30">Speed</p>
                    <img src={Star} alt="" />
                </section>
            </Marquee>

            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8  lg:py-20 italic">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-20">
                    <div className="place-self-center">
                        <div>
                            <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none">About Us</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-[#ABABAB]">
                                Expand your horizons with our expert car importation services, designed to bring your desired vehicle to your doorstep with ease. From navigating international regulations to arranging safe and efficient transport, we handle every step of the import process, so you can focus on enjoying your new ride. Let us turn your global automotive aspirations into reality, one import at a time
                            </p>
                        </div>
                    </div>
                    <img src={AboutImage} alt="" />
                </div>

            </section>

        </div>
    )
}

export default HomePage



