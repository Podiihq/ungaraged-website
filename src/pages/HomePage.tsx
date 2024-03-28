import { ArrowForward } from "../components/Icons"
import Hero from "../assets/images/hero/Hero.png"
import HeroMobile from "../assets/images/hero/HeroMobile.png"
import MouseSvg from "../assets/images/icons/mouse.svg"
import HeroVideo from "../assets/videos/vid-2.mp4"
import HeroVideo2 from "../assets/videos/vid-4.mp4"
import HeroVideo3 from "../assets/videos/vid-6.mp4"
import { NavBar } from "../components/NavBar"
import Service2 from "../assets/services/service2.png"
import Service4 from "../assets/services/service4.png"
import Star from "../assets/illustration/star.svg"
import Marquee from "react-fast-marquee"
import AboutImage from "../assets/about/AboutImage.png"
import { CarFilter } from "../components/CarFilter"

import part1 from "../assets/parts/1.png"
import part2 from "../assets/parts/2.png"
import part3 from "../assets/parts/3.png"
import part4 from "../assets/parts/4.png"
import part5 from "../assets/parts/5.png"
import { Testimonial } from "../components/Testimonials"
import { AllFAQs } from "../components/FAQs"
import CarDisplay from "../assets/images/car-display.png"
import Footer from "../components/Footer"


const HomePage = () => {
    return (
        <div className="bg-black text-white scroll-smooth">
            <NavBar />
            <section className="relative">
                <div className="relative" id="top">
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
                            <a href="/contact" className="relative">
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
                        <img src={MouseSvg} alt="" className="w-8 animate-bounce" />
                    </div>
                </div>
            </section>
            <section className="">
                <div className="">
                    <video autoPlay muted loop src={HeroVideo} className="w-full"></video>
                    {/* <video autoPlay muted loop src={HeroVideo2} className="w-full"></video> */}
                </div>
            </section>

            <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20" id="services">
                <div className="italic grid lg:grid-cols-2 gap-3">
                    <div>
                        <p className="font-bold uppercase text-[#FE5C43] lg:mb-2 text-sm md:text-base">Service 01</p>
                        <p className="text-3xl md:text-5xl lg::text-[60px] font-[900] uppercase leading-none">CAR TunING: See If Your Car Qualifies.</p>
                    </div>
                    <div className="place-self-center text-[#ABABAB]">
                        <p className="text-sm md:text-base">Discover if your car is ready to unlock its full potential with our tuning services. Enter your car's type, model, or make to see if we can enhance its performance and take your driving experience to the next level.</p>
                        <div className="flex lg:mt-8 px-4 md:px-0 mt-4">
                            <a href="/contact" className="relative">
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
                <div>
                    <CarFilter />
                </div>

            </section>
            <section className="lg:py-10">
                <div className="grid lg:grid-cols-2">
                    <img src={Service2} alt="" className="hidden lg:block" />
                    <div className="lg:place-self-center italic px-4 lg:mt-8 md:px-24">
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] lg:mb-2 text-sm md:text-base">Service 02</p>
                            <p className="text-3xl md:text-5xl lg::text-[60px] font-[900] uppercase leading-none">cAR SERVICE AND MAINTENANCE </p>
                        </div>
                        <div className="mt-4 text-[#ABABAB] text-sm md:text-base">
                            Explore the places you love with the people you love. It’s time to make some memories. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.
                        </div>
                        <div className="lg:flex lg:mt-8 px-4 md:px-0 mt-4 hidden">
                            <a href="https://wa.link/k6zq3z" className="relative">
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
                    <img src={Service2} alt="" className="lg:hidden" />
                </div>
            </section>
            <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-10">
                    <div className="italic place-self-center">
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] lg:mb-2 text-sm md:text-base">Service 03</p>
                            <p className="text-3xl md:text-5xl lg::text-[60px] font-[900] uppercase leading-none">We sell performance parts</p>
                        </div>
                        <div className="mt-4 text-[#ABABAB] text-sm md:text-base">
                            Explore the places you love with the people you love. It’s time to make some memories. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.
                        </div>
                        <div className="flex lg:mt-8 mt-4">
                            <a href="https://wa.link/k6zq3z" className="relative">
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
                    <Marquee direction="right">
                        <div className="lg:mt-8 flex gap-4 lg:gap-6">
                            <img src={part1} alt="" className="ml-6 w-[200px] h-[300px] md:w-[300px] md:h-[400px]" />
                            <img src={part2} alt="" className="w-[200px] h-[300px] md:w-[300px] md:h-[400px]" />
                            <img src={part3} alt="" className="w-[200px] h-[300px] md:w-[300px] md:h-[400px]" />
                            <img src={part4} alt="" className="w-[200px] h-[300px] md:w-[300px] md:h-[400px]" />
                            <img src={part5} alt="" className="w-[200px] h-[300px] md:w-[300px] md:h-[400px]" />
                            <img src={part3} alt="" className="w-[200px] h-[300px] md:w-[300px] md:h-[400px]" />
                        </div>
                    </Marquee>

                </div>
            </section>
            <section className="italic">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                    <div>
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] lg:mb-2 text-center text-sm md:text-base">Service 04</p>
                            <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none text-center">Expert Car <br /> Importation Services </p>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="lg:w-1/2 mx-auto text-[#ABABAB] text-sm md:text-base">
                                Expand your horizons with our expert car importation services, designed to bring your desired vehicle to your doorstep with ease. Let us turn your global automotive aspirations into reality, one import at a time
                            </p>
                        </div>
                    </div>
                    <img src={Service4} alt="" className="w-full mt-4" />
                    <div className="flex justify-center lg:mt-8 mt-4">
                        <a href="https://wa.link/k6zq3z" className="relative">
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
            </section>
            <Marquee className="mt-8 lg:my-16">
                <section className="flex gap-10 items-center overflow-hidden">
                    <p className="text-7xl lg:text-9xl font-[900] uppercase italic font-outline-2 hover:font-outline-4 text-transparent ">Power</p>
                    <img src={Star} alt="" />
                    <p className="text-7xl lg:text-9xl  font-[900] uppercase italic font-outline-2 hover:font-outline-4 text-transparent ">Performance</p>
                    <img src={Star} alt="" />
                    <p className="text-7xl lg:text-9xl  font-[900] uppercase italic font-outline-2 hover:font-outline-4 text-transparent ">Speed</p>
                    <img src={Star} alt="" />
                </section>
            </Marquee>

            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8  lg:py-20 italic" id="about">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-20">
                    <div className="place-self-center">
                        <div>
                            <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none">About Us</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-[#ABABAB] text-sm md:text-base">
                                Founded in 2020, Ungaraged is a global leader in aftermarket performance tuning for Volkswagen, Audi, BMW, Mercedes, Porsche, and other vehicles. We love to import, build, drive and develop innovative products for race cars.
                            </p>
                            <p className="text-[#ABABAB] text-sm md:text-base mt-2">
                                We have first hand experience in motorsports and strive to deliver award winning quality for our customers. Our services are engineered to maximize performance, while maintaining complete OEM+ reliability and drivability.
                            </p>
                        </div>
                    </div>
                    <img src={AboutImage} alt="" />
                </div>

            </section>
            <div className="bg-[#141414]">
                <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                    <div className="italic lg:w-1/2 mx-auto mb-8 lg:mb-16">
                        <div>
                            <p className="font-bold uppercase text-[#FE5C43] lg:mb-2 text-center text-sm lg:text-base">Events</p>
                            <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none text-center">Car Racing</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-[#ABABAB] text-center text-sm md:text-base">
                                Expand your horizons with our expert car we handle every step of the import process, Let us turn your global automotive aspirations into reality, one import at a time
                            </p>
                        </div>
                    </div>
                    <div className="flex max-w-screen">
                        <video autoPlay muted loop src={HeroVideo2} className="w-full h-[340px] md:h-[510px] lg:h-[850px] xl:h-full"></video>
                        <video autoPlay muted loop src={HeroVideo3} className="w-full h-[340px] md:h-[510px] lg:h-[850px] xl:h-full"></video>
                    </div>
                </section>
            </div>
            <section>
                <div className="lg:py-20 pt-8 italic">
                    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                        <p className="font-bold uppercase text-[#FE5C43] lg:mb-2 text-sm lg:text-base">What People say about Us</p>
                        <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none">Testimonials</p>
                    </div>
                    <div className="pt-4 pb-8 lg:pb-0 lg:py-8">
                        <Marquee>
                            <Testimonial userName={"Sarah M."} statement={"Exceptional car tuning services, highly recommended!"} />
                            <Testimonial userName={"Peter K."} statement={"Reliable maintenance work, always satisfied."} />
                            <Testimonial userName={"Jane W."} statement={"Efficient car repairs, got my vehicle back on the road in time."} />
                            <Testimonial userName={"David M."} statement={"Smooth car importing process, hassle-free and professional."} />
                            <Testimonial userName={"Faith N."} statement={"Top-notch tuning expertise, my car performs better than ever."} />
                            <Testimonial userName={"Joseph K"} statement={"Consistent maintenance keeps my car running smoothly."} />
                            <Testimonial userName={"Mercy A"} statement={"Impressive repair job, they fixed what others couldn't."} />
                            <Testimonial userName={"Kelvin O."} statement={"Seamless car importation, exceeded my expectations."} />
                            <Testimonial userName={"Alice M."} statement={"Trustworthy and skilled team, wouldn't go anywhere else."} />
                            <Testimonial userName={"Michael W."} statement={"Prompt and reliable tuning services, worth every penny."} />
                        </Marquee>
                        <Marquee direction="right" className="lg:my-4 my-2">
                            <Testimonial userName={"Grace K."} statement={"Efficient maintenance keeps my car in peak condition."} />
                            <Testimonial userName={"Brian M."} statement={"Flawless repair work, they know cars inside out."} />
                            <Testimonial userName={"Sharon L."} statement={"Smooth importing process, saved me a lot of time."} />
                            <Testimonial userName={"Collins N."} statement={"Expert tuning transformed my driving experience."} />
                            <Testimonial userName={"Lucy O."} statement={"Dependable maintenance service."} />
                            <Testimonial userName={"Daniel M."} statement={"Fast and effective repairs, got me back on track swiftly."} />
                            <Testimonial userName={"Rose A."} statement={"Effortless car importation, excellent customer service."} />
                            <Testimonial userName={"Timothy K."} statement={"Skilled technicians, they understand cars like no other."} />
                            <Testimonial userName={"Brenda W"} statement={"Reliable tuning services, they breathe new life into cars."} />
                            <Testimonial userName={"John M."} statement={"Efficient maintenance, my car runs like a dream."} />
                        </Marquee>

                    </div>
                </div>
            </section>
            <section className="px-4 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:pb-10 italic">
                <div className="lg:w-1/2">
                    <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none">Frequently Asked Questions - <span className="text-[#FE5C43]">FAQs</span></p>
                </div>
                <div>
                    <AllFAQs />
                </div>
            </section>
            <section className="bg-white text-black py-20">
                <div>
                    <div className="italic px-4">
                        <div>
                            <p className="text-3xl md:text-5xl lg:text-[60px] font-[900] uppercase leading-none text-center">DRIVE BEYOND LIMITS</p>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="lg:w-1/2 mx-auto text-[#141414] text-sm md:text-base">
                                From navigating international regulations to arranging safe and efficient transport, we handle every step of the import process, so you can focus on enjoying your new ride. Let us turn your global automotive aspirations into reality, one import at a time
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:mt-8 mt-4 justify-center">
                        <a href="/contact" className="relative">
                            <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                            <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-white border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                <p className="skew-x-[10deg] text-[#FE5C43]">Get in Touch</p>
                                <div className="skew-x-[10deg] text-[#FE5C43]">
                                    <ArrowForward />
                                </div>
                            </span>
                        </a>
                    </div>
                    <div className="mt-8">
                        <img src={CarDisplay} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default HomePage

