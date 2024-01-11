import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "animate.css";
import { useDarkMode } from "../util/DarkModeContext";
import Mark from "./assets/mark.jpg";
function Hero() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? " bg-[#111e25] text-white" : "bg-[#F5F5F5]"}>
      <div
        className={`w-full max-w-[1190px] m-auto   flex flex-col justify-center relative  h-full py-28  `}
      >
        <nav className="absolute left-0 lg:flex hidden">
          <ul className="flex flex-col gap-20 font-montserrat font-normal items-center uppercase text-[12px] ">
            <li className="rotate-90 transform hover:rotate-0 transition-all cursor-pointer   ">
              <Link
                to="home"
                offset={-7000}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:border-b-2 pb-2 border-[#FF6F6F] transition-all"
              >
                Home
              </Link>
            </li>
            <li className="rotate-90 transform hover:rotate-0 transition-all cursor-pointer  ">
              <Link
                to="about"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:border-b-2 pb-2 border-[#FF6F6F] transition-all"
              >
                About
              </Link>
            </li>
            <li className="rotate-90 transform  hover:rotate-0 transition-all cursor-pointer ">
              <Link
                to="project"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:border-b-2 pb-2 border-[#FF6F6F] transition-all"
              >
                Project
              </Link>
            </li>
            <li className="rotate-90 transform hover:rotate-0 transition-all cursor-pointer ">
              <Link
                to="testimonial"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:border-b-2 pb-2 border-[#FF6F6F] transition-all"
              >
                Testimonial
              </Link>
            </li>
            <li className="rotate-90 transform  hover:rotate-0 transition-all cursor-pointer ">
              <Link
                to="contact"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:border-b-2 pb-2 border-[#FF6F6F] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:flex justify-evenly items-center py-4       ">
          <div className="  w-full py-5    px-10  lg:ml-24">
            <h1 className="text-3xl text-[#303481] font-playfair  pb-4">
              <span className="italic"> Hello, </span>{" "}
              <span className="font-bold">I'm Mark</span>
            </h1>
            <p className="text-md font-normal font-montserrat">
              Are you looking for a web front end developer for your next
              project? Do you want to build something incredible? I am confident
              that I can help bring your vision to life, and I look forward to
              the opportunity to work with you. Thank you for considering me for
              your project
            </p>
            <div className="py-4"></div>
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-[#29333b]  " : "bg-[#e8e8e8]"
              }`}
            >
              <div>
                <h1 className="font-playfair uppercase text-sm font-medium">
                  {" "}
                  What am I currently engaged in? / January 16 2024
                </h1>
                <p
                  className={`italic font-montserrat text-sm font-light ${
                    darkMode ? "  " : ""
                  }`}
                >
                  ~ Thinking about you ❤︎
                </p>
              </div>
            </div>
          </div>
          <div className="  w-full  flex justify-center items-center">
            <img
              src={Mark}
              alt="photoss"
              className="  image-shape w-[300px] border-2 border-[#FF6F6F]"
              id="mark"
            />
          </div>
          <div className=" flex lg:flex-col items-center lg:pt-0 pt-7 justify-center gap-2">
            <div id="facebook">
              <SocialIcon
                url="https://www.facebook.com/mjcariso03"
                network="facebook"
                bgColor="#FF6F6F"
                fgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <Tooltip
              anchorId="facebook"
              style={{ backgroundColor: "rgb(231, 222, 205)", color: "#222" }}
              content="MJ Cariso"
            />
            <div id="github">
              <SocialIcon
                url="https://github.com/emjay03"
                network="github"
                bgColor="#FF6F6F"
                fgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <Tooltip
              anchorId="github"
              style={{ backgroundColor: "rgb(231,	222	,205)", color: "#222" }}
              content="emjay03"
            />

            <div id="twitter">
              <SocialIcon
                url="https://twitter.com/"
                network="twitter"
                bgColor="#FF6F6F"
                fgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <Tooltip
              anchorId="twitter"
              style={{ backgroundColor: "rgb(231,	222	,205)", color: "#222" }}
              content="MYeonwoo03"
            />
            <div id="tiktok">
              <SocialIcon
                url="https://www.tiktok.com/@emj4yit?lang=en"
                network="tiktok"
                bgColor="#FF6F6F"
                fgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <Tooltip
              anchorId="tiktok"
              style={{ backgroundColor: "rgb(231,	222	,205)", color: "#222" }}
              content="EM JAY"
            />
            <div id="linkin">
              <SocialIcon
                url="https://www.linkedin.com/in/mj-cariso-81b659214/"
                network="linkedin"
                bgColor="#FF6F6F"
                fgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <Tooltip
              anchorId="linkin"
              style={{ backgroundColor: "rgb(231,	222	,205)", color: "#222" }}
              content="MJ Cariso"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
