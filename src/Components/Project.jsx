import React, { useState } from "react";
import project1 from "./assets/project/project1.png";
import project3 from "./assets/project/project3.png";
import project4 from "./assets/project/project4.png";
import project6 from "./assets/project/project6.png";
import project7 from "./assets/project/project7.png";
import project8 from "./assets/project/project8.png";
import other1 from "./assets/other/other1.png";
import other2 from "./assets/other/other2.png";
import other3 from "./assets/other/other3.png";
import other4 from "./assets/other/other4.png";
import other5 from "./assets/other/other5.png";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useDarkMode } from "../util/DarkModeContext";
import "react-tooltip/dist/react-tooltip.css";
function Project() {
  const { darkMode } = useDarkMode();
  const [showProject, setShowProject] = useState("highlight");
  const [showMoreproject, setShowMoreproject] = useState(false);

  const handleLoadMore = () => {
    setShowMoreproject(!showMoreproject);
  };

  const handleTab1Click = () => {
    setShowProject("highlight");
  };

  const handleTab2Click = () => {
    setShowProject("other");
  };

  return (
    <div className={darkMode ? "bg-[#111e25]" : "bg-[#F5F5F5]"}>
      <div
        id="project"
        className="w-full max-w-[1190px] m-auto  lg:px-5 px-10 pb-10 "
      >
        <div className="md:pt-10 pt-14   text-center md:text-right">
          <h1
            className={`text-4xl font-semibold font-poppins  text-[#303481] ${
              darkMode ? " " : "text-dark"
            }`}
          >
            Project
            <span
              className={`border-2 ml-2   ${
                darkMode ? " " : "border-[#29333b]"
              }`}
            ></span>
          </h1>
        </div>
        <div className="flex justify-end py-7">
          <p
            className={`text-xl font-montserrat  ${
              darkMode ? "text-white" : "text-dark"
            }`}
          >
            These are the projects I have done
          </p>
        </div>
        <div className="flex justify-center items-center pb-5 ">
          <div className="flex gap-4 pb-10">
            <button
              onClick={handleTab1Click}
              className={` text-base px-10 font-semibold font-poppins border-2 py-2 ${
                showProject === "highlight"
                  ? " bg-[#FF6F6F] border-[#FF6F6F]    text-white"
                  : darkMode
                  ? "text-white border-[#FF6F6F]"
                  : "text-dark"
              }`}
            >
              Highight
            </button>
            <button
              onClick={handleTab2Click}
              className={` text-base px-10 font-semibold font-poppins border-2 py-2 ${
                showProject === "other"
                  ? " bg-[#FF6F6F] border-[#FF6F6F]    text-white"
                  : darkMode
                  ? "text-white border-[#FF6F6F]"
                  : "text-dark"
              }`}
            >
              Other
            </button>
          </div>
        </div>
        {showProject === "highlight" && (
          <div>
            <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%]  sm:w-full justify-center items-center m-auto">
              <div className="lg:w-[50%]  w-full  ">
                <img src={project1} alt="project1" />
              </div>

              <div className="lg:w-[50%] w-full flex flex-col justify-center">
                <h2
                  className={`text-3xl font-semibold font-playfair ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                ><a href="https://bcardte.netlify.app/cardholder/65913fca74c1bebd770019fc">QR-Integrated User Data Retrieval System</a>
                 
                </h2>
                <div className=" py-6 text-base font-montserrat  ">
                  <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                    The "QR-Integrated User Data Retrieval System" is a
                    web-based project designed to efficiently retrieve and
                    display relevant information associated with an individual
                    through the{" "}
                    <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                      scanning of a QR code.
                    </span>
                  </p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    MongoDB{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    Express{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    React{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    Nodejs{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="py-6"></div>
            <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
              <div className="lg:w-[50%] w-full flex flex-col justify-center">
                <h2
                  className={`text-3xl font-semibold font-playfair ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                >
                  <a href="https://taskmonitoringproject.000webhostapp.com/Task-Monitoring-Project/frontend/Login/Login.php">
                    Task Monitoring
                  </a>
                </h2>
                <div className=" py-6 text-base font-montserrat  ">
                  <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                  
                   
                    Task monitoring system is a tool or platform designed 
                    to   <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                   track and manage
                    </span>  the progress of tasks within a project 
                    or organization
                  </p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-3 gap-4 ">
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    PHP{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    JQuery{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    MySQL{" "}
                  </span>
                </div>
              </div>
              <div className="lg:w-[50%]  w-full">
                <img src={project3} alt="project1" />
              </div>
            </div>
            <div className="py-6"></div>

            {showMoreproject && (
              <div>
                <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%]  w-full">
                    <img src={project4} alt="project1" />
                  </div>

                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    ><a href="https://jamconnect.online/">JamConnect Web And Mobile</a>
                      
                    </h2>
                    <div className=" py-6 text-base  font-montserrat">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                       Job Order and Operation Support
Monitoring System
                         
                       is to develop a system for <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          {" "}
                        monitoring 
                        </span>{" "} the job order of the
technicians
                      </p>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        React{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        PostgresSql
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Docker
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Tailwind
                      </span>
                       <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Laravel
                      </span>
                    </div>
                  </div>
                </div>

                <div className="py-6"></div>

                <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      <a href="https://github.com/emjay03/Dids-pos">
                        Did's POS
                      </a>
                    </h2>
                    <div className=" py-6 text-base font-montserrat ">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                        A Point of Sale (POS) system is a computer system that
                        processes
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          {" "}
                          sales transactions, manages inventory, records
                          supplier information, tracks cashier account
                          activities, and generates report charts.
                        </span>{" "}
                        It helps retailers and service providers to manage their
                        sales and inventory effectively.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Php{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Jquery
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Js
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Maria DB
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-[50%]  w-full">
                    <img src={project6} alt="project1" />
                  </div>
                </div>
                <div className="py-6"></div>
                <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%]  sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%]  w-full  ">
                    <img src={project7} alt="project7" />
                  </div>

                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      <a href="https://github.com/emjay03/Tower-of-hanoi">
                        Tower-of-hanoi
                      </a>
                    </h2>
                    <div className=" py-6 text-base font-montserrat  ">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                        The Tower of Hanoi is a puzzle where you have{" "}
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          three rods and several disks{" "}
                        </span>
                        of different sizes.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        React
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Css
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-6"></div>
                <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      <a href="https://github.com/emjay03/PHYSICAL-PLANT-AND-FACILITIES-SYSTEM">Physical plant and facilities system</a>{" "}
                    </h2>
                    <div className=" py-6 text-base font-montserrat  ">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                        I work on the Physical Plant and Facilities System
                        project, where I implemented the creation of user
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          roles per department.
                        </span>{" "}
                        {" "}
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          established authentication role login and inventory of the items 
                        </span>
                      </p>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-3 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        PHP{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        JQuery{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        MySQL{" "}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-[50%]  w-full">
                    <img src={project8} alt="project8" />
                  </div>
                </div>
                <div className="py-6"></div>
              </div>
            )}
            <div className=" flex justify-center items-center">
              <button
                className="flex justify-center items-center text-sm bg-[#FF6F6F] font-poppins text-white px-6 py-3 "
                onClick={handleLoadMore}
              >
                {showMoreproject ? "Load less" : "Load more"}
                {showMoreproject ? (
                  <AiOutlineArrowUp className="ml-2" size={15} />
                ) : (
                  <AiOutlineArrowDown className="ml-2" size={15} />
                )}
              </button>
            </div>
          </div>
        )}

        {showProject === "other" && (
          <div>
            <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
              <div className="lg:w-[50%]  w-full">
                <img src={other1} alt="project1" />
              </div>

              <div className="lg:w-[50%] w-full flex flex-col justify-center">
                <h2
                  className={`text-3xl font-semibold font-playfair ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                >
                  <a
                    className=" hover:text-Tertiary/80"
                    href="https://emjay03.github.io/ThesisTitle/"
                  >
                    {" "}
                    Thesis IT Generator
                  </a>
                </h2>

                <div className=" py-6 text-base font-montserrat  ">
                  <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                    Thesis IT generators can be a valuable resource for students
                    and researchers in the field of IT, helping them to quickly
                    and easily{" "}
                    <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                      generate ideas for their research projects
                    </span>{" "}
                    and save time and effort in the initial stages of their
                    work.
                  </p>
                </div>
                <div className="grid  grid-cols-3 gap-4 ">
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    React{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    Css
                  </span>
                </div>
              </div>
            </div>
            <div className="py-6"></div>
            <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
              <div className="lg:w-[50%] w-full flex flex-col justify-center">
                <h2
                  className={`text-3xl font-semibold font-playfair ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                >
                  <a
                    className="hover:text-Tertiary/80"
                    href="https://emjay03.github.io/Intro-section-with-dropdown-navigation/"
                  >
                    INTRO SECTION W/ DD NAVIGATION
                  </a>
                </h2>
                <div className=" py-6 text-base font-montserrat ">
                  <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                    This design features a sleek and intuitive dropdown
                    navigation menu,{" "}
                    <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                      making it easy for users to navigate{" "}
                    </span>
                    and find the information they need. The navigation menu is a
                    common pattern on larger sites and is designed to improve
                    user experience and navigation.
                  </p>
                </div>
                <div className="grid grid-cols-3  gap-4 ">
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    React{" "}
                  </span>
                  <span
                    className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                      darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                    }`}
                  >
                    Tailwind
                  </span>
                </div>
              </div>
              <div className="lg:w-[50%]  w-full">
                <img src={other2} alt="project1" />
              </div>
            </div>

            <div className="py-6"></div>
            {showMoreproject && (
              <div>
                <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%]  w-full">
                    <img src={other3} alt="project1" />
                  </div>

                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      <a
                        className="hover:text-Tertiary/80"
                        href="https://emjay03.github.io/News-homepage/"
                      >
                        News Page
                      </a>
                    </h2>
                    <div className=" py-6 text-base font-montserrat  ">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                        This page is designed to provide users with
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          {" "}
                          easy access to the latest news and updates
                        </span>
                        , featuring a clean and modern layout that is easy to
                        navigate.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Html{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Css
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Js
                      </span>
                    </div>
                  </div>
                </div>

                <div className="py-6"></div>
                <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      {" "}
                      <a
                        className="hover:text-Tertiary/80"
                        href="https://emjay03.github.io/REST-Countries-API-with-color-theme-switcher/"
                      >
                        REST COUNTRIES API
                      </a>
                    </h2>
                    <div className=" py-6 text-base  ">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                        Where in the world page, an easy-to-use tool to find and
                        display{" "}
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          information about specific countries.{" "}
                        </span>
                        The page includes a search function, a dropdown menu for
                        regions, and a dark mode/light mode option. It's perfect
                        for anyone looking for detailed country information and
                        it's easy to use.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        React{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        REST API
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Tailwind
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-[50%]  w-full">
                    <img src={other4} alt="project1" />
                  </div>
                </div>
                <div className="py-6"></div>

                <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                  <div className="lg:w-[50%]  w-full">
                    <img src={other5} alt="project1" />
                  </div>

                  <div className="lg:w-[50%] w-full flex flex-col justify-center">
                    <h2
                      className={`text-3xl font-semibold font-playfair ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      <a
                        className="hover:text-Tertiary/80"
                        href="https://emjay03.github.io/Order-summary-component/"
                      >
                        Order Summary Component
                      </a>
                    </h2>
                    <div className=" py-6 text-base font-montserrat ">
                      <p className={`${darkMode ? "text-white" : "text-dark"}`}>
                        Order Summary Component is a summary of customer's order
                        that includes the item(s) purchased and options to
                        proceed to payment or cancel the order.
                        <span className="border-b-2 pb-[1px] border-[#FF6F6F] italic">
                          {" "}
                          It's a simple and clear view{" "}
                        </span>
                        for the customer to proceed with the payment or cancel
                        the order during the checkout process.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ">
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Html{" "}
                      </span>
                      <span
                        className={`py-2 text-center font-montserrat text-sm uppercase font-semibold ${
                          darkMode ? "bg-[#29333b]  text-white" : "bg-[#e8e8e8]"
                        }`}
                      >
                        Css
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-6"></div>
              </div>
            )}
            <div className=" flex justify-center items-center">
              <button
                className="flex justify-center items-center text-sm bg-[#FF6F6F] font-poppins text-white px-6 py-3 "
                onClick={handleLoadMore}
              >
                {showMoreproject ? "Load less" : "Load more"}
                {showMoreproject ? (
                  <AiOutlineArrowUp className="ml-2" size={15} />
                ) : (
                  <AiOutlineArrowDown className="ml-2" size={15} />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
