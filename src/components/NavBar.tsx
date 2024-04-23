import { useEffect, useState } from "react";
import Logo from "../assets/Logo/Logo.svg";
import { SearchIcon } from "./Icons";

export const NavBar = () => {
  return (
    <div className="bg-black text-white">
      <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" className="w-32 lg:w-auto" />
          <div className="lg:flex items-center gap-6 text-sm hidden">
            <a
              href="#services"
              className="hover:underline hover:text-[#FE5C43]"
            >
              Services
            </a>
            <a href="#about" className="hover:underline hover:text-[#FE5C43]">
              About Us
            </a>
            <a href="/contact" className="hover:underline hover:text-[#FE5C43]">
              Contact Us
            </a>
          </div>
          <a
            href="/contact"
            className="hover:underline hover:text-[#FE5C43] md:hidden text-sm underline"
          >
            Contact Us
          </a>
          <a
            href="/#services"
            className="md:flex items-center gap-2 hidden hover:text-[#FE5C43]"
          >
            <SearchIcon />
            <p className="text-sm hidden md:block">Search your car</p>
          </a>
        </div>
      </nav>
    </div>
  );
};

export const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Add or remove 'overflow-hidden' class from the body to prevent scrolling
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove event listener
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <div>
      <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <img src={Logo} alt="" className="w-32 lg:w-auto" />
              </div>
              <div className="hidden md:flex gap-4">
                {/* Your desktop navigation links here */}
                <a
                  href="#services"
                  className="hover:underline hover:text-[#FE5C43]"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="hover:underline hover:text-[#FE5C43]"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="hover:underline hover:text-[#FE5C43]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} fixed inset-0 z-50 bg-black bg-opacity-50`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} fixed inset-y-0 left-0 z-50 w-full bg-black overflow-y-auto`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <img src={Logo} alt="" className="w-32 lg:w-auto" />
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            {/* Your mobile navigation links here */}
            <div className="text-center flex flex-col items-center mt-56 gap-10">
              <a
                href="#services"
                className="hover:underline hover:text-[#FE5C43]"
              >
                Services
              </a>
              <a href="#about" className="hover:underline hover:text-[#FE5C43]">
                About Us
              </a>
              <a
                href="/contact"
                className="hover:underline hover:text-[#FE5C43]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
