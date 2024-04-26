import { Link } from "react-router-dom"
import ContactVideo from "../assets/videos/vid-5.mp4"
import { Facebook, Instagram, Twitter, Whatsapp } from "../components/Icons"
import Logo from "../assets/Logo/Logo.svg"

const ContactPage = () => {
    return (
        <div className="bg-black lg:h-screen">
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 italic text-white">
                <a href="/" className="flex justify-center lg:mb-16">
                    <img src={Logo} alt="" />
                </a>
                <div className="grid lg:grid-cols-2 lg:gap-4">
                    <div className="place-self-center my-10">
                        <Link to="/" className="flex my-8 justify-center lg:justify-start">
                            <div className="flex items-center gap-2  rounded-full">
                                <span className="underline hover:text-[#FE5C43]">Back Home</span>
                            </div>
                        </Link>
                        <p className="text-4xl font-bold lg:text-6xl hero2 text-center lg:text-left">Let's Talk</p>
                        <div className="my-8">
                            <p className="text-center lg:text-left text-[#ABABAB]">Email: <a href="mailto:ungaraged@gmail.com" className="underline">ungaraged(at)gmail.com</a></p>
                            <p className="py-2 text-center lg:text-left text-[#ABABAB]">Phone: 0726691812</p>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-1 items-center">
                            <div className="flex justify-center md:justify-start lg:mt-4 px-4 md:px-0 mt-4">
                                <a href="https://wa.link/k6zq3z" className="relative">
                                    <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                    <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                        <div className="skew-x-[10deg] text-[#FE5C43]">
                                            <Whatsapp />
                                        </div>
                                        <p className="skew-x-[10deg] text-[#FE5C43]">WhatsApp</p>
                                    </span>
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start lg:mt-4 px-4 md:px-0 mt-4">
                                <a href="https://instagram.com/ungaraged" className="relative">
                                    <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                    <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                        <div className="skew-x-[10deg] text-[#FE5C43]">
                                            <Instagram />
                                        </div>
                                        <p className="skew-x-[10deg] text-[#FE5C43]">Instagram</p>
                                    </span>
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start lg:mt-4 px-4 md:px-0 mt-4">
                                <a href="https://twitter.com/ungaraged" className="relative">
                                    <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                    <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                        <div className="skew-x-[10deg] text-[#FE5C43]">
                                            <Twitter />
                                        </div>
                                        <p className="skew-x-[10deg] text-[#FE5C43]">X (Twitter)</p>
                                    </span>
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start lg:mt-4 px-4 md:px-0 mt-4">
                                <a href="https://facebook.com/ungaraged" className="relative">
                                    <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                    <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                        <div className="skew-x-[10deg] text-[#FE5C43]">
                                            <Facebook />
                                        </div>
                                        <p className="skew-x-[10deg] text-[#FE5C43]">Facebook</p>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <video autoPlay muted loop src={ContactVideo} className="w-full"></video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactPage