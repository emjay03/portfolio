import React from "react";
import mj from "./assets/mj.jpg";
import { useDarkMode } from "../util/DarkModeContext";
import { IoLogoNodejs } from "react-icons/io";
import { MdHtml } from "react-icons/md";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { MdCss } from "react-icons/md";
import { DiBootstrap } from "react-icons/di";
import {
  FaReact,
  FaJava,
  FaLinux,
  FaFigma,
  FaPhp,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { IoMdDownload } from "react-icons/io";
import { PiGitMergeDuotone } from "react-icons/pi";
import { DiJavascript1 } from "react-icons/di";
function About() {
  const { darkMode } = useDarkMode();
  const downloadFile = () => {
    const fileDriveId = "13EbcVGPZvB1fy2wfy5fGg6950yfFHh9E";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileDriveId}`;
    const link = document.createElement("a");
    link.href = downloadLink;
    link.click();
  };

  return (
    <div id="about" className={darkMode ? "bg-[#111e25]" : "bg-[#F5F5F5]"}>
      <div className="w-full max-w-[1190px] m-auto  lg:px-5 px-10  ">
        <div className="py-10   text-center md:text-left">
          {/* <h1 className={`text-4xl font-semibold   ${theme ? 'text-white' :'text-black-mode'}`}> */}
          <h1
            className={`text-4xl font-semibold font-poppins ${
              darkMode ? "text-[#303481]" : "text-[#303481]"
            }`}
          >
            <span
              className={`border-2 mr-2   ${
                darkMode ? "" : "border-[#111e25]"
              }`}
            >
              {" "}
            </span>
            Know About Me
          </h1>
        </div>
        <div className="flex lg:flex-row  flex-col items-center justify-between     gap-10">
          <div className="lg:w-[900px] md:w-[500px] w-auto">
            <img className="image-about" src={mj} alt="mjcariso" />
          </div>
          <div className="w-full max-w-[650px] py-5 text-base ">
            <p
              className={`font-montserrat ${
                darkMode ? "text-white" : "text-Black-mode"
              } `}
            >
              As a highly motivated fresh graduate student of{" "}
              <span className="italic font-playfair  border-b-2 border-[#FF6F6F]">
                information technology,
              </span>{" "}
              I am confident in my ability to make a significant contribution to
              any team or project. I have a strong track record of quickly
              adapting to new technologies and challenges, and I am committed to
              staying current with the latest trends and best practices in the
              field. I am a fast learner, a hard worker and{" "}
              <span className="italic font-playfair  border-b-2 border-[#FF6F6F]">
                I am eager to take on any task or challenge
              </span>{" "}
              that comes my way. I am certain that my skills, experience, and
              attitude make me a perfect fit for any company and I am excited to
              take my career to the next level .
            </p>
            <div className="flex gap-4  py-5">
              <button
                onClick={downloadFile}
                className=" px-6 py-3 flex justify-center items-center bg-[#FF6F6F] gap-2 font-poppins text-white hover:scale-105 transition-all rounded-lg"
              >
                <IoMdDownload /> Resume
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="py-7 w-auto flex justify-center ">
            <h1
              className={`font-semibold text-3xl border-b-4 font-poppins ${
                darkMode ? "text-[#303481]" : "text-[#303481] border-[#111e25]"
              }`}
            >
              Tech Stacks
            </h1>
          </div>
          <div>
            <p
              className={`text-2xl text-center font-montserrat pb-5 italic ${
                darkMode ? "text-white" : "text-black-mode"
              }`}
            >
              These are the tools I employ when working on projects
            </p>
            <div className="max-w-[600px] justify-center items-center  m-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4">
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <MdHtml size={30} />
              </div>

              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <MdCss size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <DiJavascript1 size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <SiTailwindcss size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <DiBootstrap  size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <FaReact size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <SiMysql size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <FaJava size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <SiMongodb size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <FaLinux size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <IoLogoNodejs size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <FaFigma size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <SiExpress size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <FaPhp size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <DiCodeigniter size={30} />
              </div>
              <div
                className={`flex items-center justify-center py-4 rounded-lg shadow-md ${
                  darkMode ? "bg-[#29333b] text-white " : ""
                }`}
              >
                <PiGitMergeDuotone  size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
