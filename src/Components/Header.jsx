import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import Darkmode from "../util/Darkmode";
import { useDarkMode } from "../util/DarkModeContext";
function Home() {
  const { darkMode } = useDarkMode();
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <div>
      <div
        id="home"
        className={`w-full z-20 m-auto fixed top-0 left-0 right-0 transition duration-300  
    ${isScrolling && darkMode ? "bg-[#111e25] " : " "} 
    ${isScrolling && !darkMode ? " bg-[#F5F5F5]" : " "}`}
      >
        <div className=" max-w-[1190px] m-auto flex justify-between items-center py-7 lg:py-2 lg:px-5 px-10">
          <Link
            to="home"
            offset={-7000}
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1
              className={
                darkMode
                  ? "font-bold text-lg logo-ko  font-poppins   p-2 "
                  : " te font-bold text-lg logo-ko  font-poppins   p-2 "
              }
            >
              Emj4y
            </h1>
          </Link>

          {/* <ul className={`hidden text-base font-light  font-sans gap-3 lg:flex ${theme ? 'text-white' : 'text-Secondary'}`}>
        <li className="p-4 cursor-pointer hover:text-color3 tracking-wider">
          <Link
            to="home"
            offset={-7000}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-Tertiary"
          >
            Home
          </Link>
        </li>
         <li className="p-4 cursor-pointer hover:text-color3">
          <Link
            to="about"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-Tertiary"
          >
            About
          </Link>
        </li>
         <li className="p-4 cursor-pointer hover:text-color3">
          <Link
            to="project"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-Tertiary"
          >
            Project
          </Link>
        </li>

         <li className="p-4 cursor-pointer hover:text-color3">
          <Link
            to="testimonial"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-Tertiary"
          >
            Testimonial
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-color3">
          <Link
            to="contact"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-Tertiary"
          >
           Contact
          </Link>
        </li>
    </ul> */}
          <div className=" hidden lg:flex">
            <Darkmode />
          </div>

          {/* Mobile Button */}
          <div onClick={handleNav} className="lg:hidden z-50 cursor-pointer">
            {nav ? (
              <AiOutlineClose
                size={27}
                className={`${darkMode ? "text-white" : "text-Secondary"}`}
              />
            ) : (
              <AiOutlineMenu
                size={27}
                className={`${darkMode ? "text-white" : "text-Secondary"}`}
              />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={`
    lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center  items-center text-center h-screen 
    ${nav ? "translate-x-0" : "translate-x-full"}
    transition duration-300 
    ${darkMode ? "bg-[#111e25]" : "bg-[#F5F5F5]"}`}
          >
            <div className="absolute top-0 bottom-0  left-0 py-7 px-10 z-1">
              <Darkmode />
            </div>
            <ul
              className={`
            !nav
              ? "hidden "
              : "  absolute w-full px-8 font-normal font-poppins  " ${
                darkMode ? "text-white" : "text-[#111e25]"
              }`}
            >
              <li className="p-4 ">
                <Link
                  onClick={handleNav}
                  className="text-xl cursor-pointer  hover:border-b-2 pb-2 transition-all border-[#FF6F6F] "
                  to="home"
                  offset={-7000}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="p-4">
                <Link
                  onClick={handleNav}
                  className="text-xl cursor-pointer  hover:border-b-2 pb-2 transition-all border-[#FF6F6F] "
                  to="about"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="p-4">
                <Link
                  onClick={handleNav}
                  className="text-xl cursor-pointer  hover:border-b-2 pb-2 transition-all border-[#FF6F6F] "
                  to="project"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Project
                </Link>
              </li>

              <li className="p-4 ">
                <Link
                  onClick={handleNav}
                  className="text-xl cursor-pointer  hover:border-b-2 pb-2 transition-all border-[#FF6F6F] "
                  to="testimonial"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Testimonial
                </Link>
              </li>
              <li className="p-4 ">
                <Link
                  onClick={handleNav}
                  className="text-xl cursor-pointer  hover:border-b-2 pb-2 transition-all border-[#FF6F6F] "
                  to="contact"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
