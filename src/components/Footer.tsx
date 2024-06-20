import Logo from "../assets/Logo/Logo.svg";
import { Facebook, Instagram, Twitter } from "./Icons";

const Footer = () => {
  return (
    <div>
      <div className="px-4 py-10 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 italic">
        <div className="lg:flex justify-between">
          <div className="flex justify-center lg:block mb-4">
            <img src={Logo} alt="" />
          </div>
          <div className="py-4">
            <p className="font-bold lg:mb-4 text-center">Home Link</p>
            <div className="flex justify-center lg:flex-col gap-4 lg:gap-0 text-[#ABABAB]">
              <a href="#top" className="hover:underline">
                Top
              </a>
              <a href="#services" className="lg:py-2 hover:underline">
                Services
              </a>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="font-bold lg:mb-4 text-center lg:text-left">
              Contact Information
            </p>
            <p className="text-center lg:text-left text-[#ABABAB]">
              Email:{" "}
              <a href="mailto:ungaraged@gmail.com" className="underline">
                ungaraged(at)gmail.com
              </a>
            </p>
            <p className="py-2 text-center lg:text-left text-[#ABABAB]">
              Phone: 0726691812
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="font-bold mb-2 lg:mb-4 text-center lg:text-left">
              Social Media
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://instagram.com/ungaraged"
                className="hover:text-[#FE5C43]"
              >
                <Instagram />
              </a>
              <a
                href="https://facebook.com/ungaraged"
                className="hover:text-[#FE5C43]"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/ungaraged"
                className="hover:text-[#FE5C43]"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 bg-[#FE5C43]">
        <p className="text-center text-xs">
          Copyright Ungaraged 2024 || All Rights Reserved
        </p>
        <p className="text-center text-xs mt-2">
          Crafted
          <br />{" "}
          <a href="https://podiihq.com/" className="underline">
            Podii Consultants LTD.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
