import React, { useState } from "react";
import project1 from "./assets/project/project1.png";

import project3 from "./assets/project/project3.png";
import project4 from "./assets/project/project4.jpg";
import project6 from "./assets/project/project6.png";

import other1 from "./assets/other/other1.png";
import other2 from "./assets/other/other2.png";
import other3 from "./assets/other/other3.png";
import other4 from "./assets/other/other4.png";
import other5 from "./assets/other/other5.png";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import "react-tooltip/dist/react-tooltip.css";
function Project({theme}) {
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
    <div
      id="project"
      className="w-full max-w-[1190px] m-auto  lg:px-5 px-10 pb-10 "
    >
      <div className="md:pt-10 pt-14   text-center md:text-right">
        <h1 className={`text-4xl font-semibold  ${theme ? 'text-white' :'text-dark'}`}>
          Project<span className="border-2 ml-2 border-Tertiary "></span>
        </h1>
      </div>
      <div className="flex justify-end py-7">
        <p className={`text-xl  ${theme ? 'text-white' :'text-dark'}`}>These are the projects I have done</p>
      </div>
      <div className="flex justify-center items-center pb-5 ">
        <div className="flex gap-4 pb-10">
          <button
            onClick={handleTab1Click}
            className={`border-Tertiary border-2 text-base font-semibold px-10  py-2 ${
              showProject === "highlight" ? " bg-Tertiary text-Primary" : theme  ? "text-white" : "text-dark"
            } `}
          >
            Highlight
          </button>
          <button
            onClick={handleTab2Click}
            className={`border-Tertiary border-2 text-base px-10 font-semibold  py-2 ${
              showProject === "other" ? " bg-Tertiary text-Primary" : theme  ? "text-white" : "text-dark"
            }`}
          >
            Other
          </button>
        </div>
      </div>
      {showProject === "highlight" && (
        <div>
          <div className="flex lg:flex-row flex-col gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
            <div className="lg:w-[50%]  w-full">
              <img src={project1} alt="project1" />
            </div>

            <div className="lg:w-[50%] w-full flex flex-col justify-center">
              <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>TWICE OFFICIAL CLONE</h2>
              <div className=" py-6 text-base  ">
                <p className={`${theme ? 'text-gray':'text-dark'}`}>
                  Stay up to date with your favorite K-pop group, TWICE, by
                  using the TWICE WEBSITE, which includes their profile,
                  discography, gallery, video, notice, and schedule
                </p>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                <span className=" py-2  bg-Primary  text-center">Html </span>
                <span className=" py-2  bg-Primary text-center">Css</span>
                <span className=" py-2 bg-Primary text-center">Js</span>
                <span className=" py-2 bg-Primary text-center">Jquery</span>
              </div>
            </div>
          </div>

          <div className="py-6"></div>
          <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
            <div className="lg:w-[50%] w-full flex flex-col justify-center">
            <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>MCinema</h2>
              <div className=" py-6 text-base  ">
              <p className={`${theme ? 'text-gray':'text-dark'}`}>
                  MCinema is a website that offers a variety of films, including
                  title filter, search function, high-quality options, and a
                  membership login for saving favorite films and accessing
                  exclusive content. I t also provides a movie rental service
                  for a fee. fee
                </p>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-3 gap-4 ">
                <span className=" py-2  bg-Primary  text-center">Php </span>
                <span className=" py-2  bg-Primary text-center">Css</span>
                <span className=" py-2 bg-Primary text-center">Js</span>
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
                <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>BARANGAY RMS</h2>
                  <div className=" py-6 text-base  ">
                  <p className={`${theme ? 'text-gray':'text-dark'}`}>
                      A barangay record system is a computer program that
                      manages and stores information for a specific barangay,
                      including general information, announcements, frequently
                      asked questions, Covid-19 cases tracking, contact
                      information for officials, information about the developer
                      and the barangay, and a login page for additional
                      services.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                    <span className=" py-2  bg-Primary  text-center">C# </span>
                    <span className=" py-2  bg-Primary text-center">MySQL</span>
                    <span className=" py-2 bg-Primary text-center">Js</span>
                    <span className=" py-2 bg-Primary text-center">
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-6"></div>

              <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
                <div className="lg:w-[50%] w-full flex flex-col justify-center">
                <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>Did's POS</h2>
                  <div className=" py-6 text-base  ">
                  <p className={`${theme ? 'text-gray':'text-dark'}`}>
                      A Point of Sale (POS) system is a computer system that
                      processes sales transactions, manages inventory, records
                      supplier information, tracks cashier account activities,
                      and generates report charts. It helps retailers and
                      service providers to manage their sales and inventory
                      effectively.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                    <span className=" py-2  bg-Primary  text-center">Php </span>
                    <span className=" py-2  bg-Primary text-center">
                      Jquery
                    </span>
                    <span className=" py-2 bg-Primary text-center">Js</span>
                    <span className=" py-2 bg-Primary text-center">
                      Maria DB
                    </span>
                  </div>
                </div>
                <div className="lg:w-[50%]  w-full">
                  <img src={project6} alt="project1" />
                </div>
              </div>
              <div className="py-6"></div>
            </div>
          )}
          <div className=" flex justify-center items-center">
            <button
              className="flex justify-center items-center text-sm bg-Tertiary/80 text-Primary px-6 py-3 "
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
            <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>
                <a
                  className=" hover:text-Tertiary/80"
                  href="https://emjay03.github.io/ThesisTitle/"
                >
                  {" "}
                  Thesis IT Generator
                </a>
              </h2>

              <div className=" py-6 text-base  ">
              <p className={`${theme ? 'text-gray':'text-dark'}`}>
                  Thesis IT generators can be a valuable resource for students
                  and researchers in the field of IT, helping them to quickly
                  and easily generate ideas for their research projects and save
                  time and effort in the initial stages of their work.
                </p>
              </div>
              <div className="grid  grid-cols-3 gap-4 ">
                <span className=" py-2  bg-Primary  text-center">React </span>
                <span className=" py-2  bg-Primary text-center">Css</span>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
            <div className="lg:w-[50%] w-full flex flex-col justify-center">
            <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>
                <a  className="hover:text-Tertiary/80" href="https://emjay03.github.io/Intro-section-with-dropdown-navigation/">
                  INTRO SECTION W/ DD NAVIGATION
                </a>
              </h2>
              <div className=" py-6 text-base  ">
              <p className={`${theme ? 'text-gray':'text-dark'}`}>
                  This design features a sleek and intuitive dropdown navigation
                  menu, making it easy for users to navigate and find the
                  information they need. The navigation menu is a common pattern
                  on larger sites and is designed to improve user experience and
                  navigation.
                </p>
              </div>
              <div className="grid grid-cols-3  gap-4 ">
                <span className=" py-2  bg-Primary  text-center">React </span>
                <span className=" py-2  bg-Primary text-center">Tailwind</span>
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
              <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>
                <a className="hover:text-Tertiary/80" href="https://emjay03.github.io/News-homepage/">News Page</a>
              </h2>
              <div className=" py-6 text-base  ">
              <p className={`${theme ? 'text-gray':'text-dark'}`}>
                  This page is designed to provide users with easy access to the
                  latest news and updates, featuring a clean and modern layout
                  that is easy to navigate.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 ">
                <span className=" py-2  bg-Primary  text-center">Html </span>
                <span className=" py-2  bg-Primary text-center">Css</span>
                <span className=" py-2 bg-Primary text-center">Js</span>
              </div>
            </div>
          </div>

          <div className="py-6"></div>
          <div className="flex lg:flex-row flex-col-reverse gap-10  lg:w-full md:w-[60%] sm:w-full justify-center items-center m-auto">
            <div className="lg:w-[50%] w-full flex flex-col justify-center">
            <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>
                {" "}
                <a className="hover:text-Tertiary/80" href="https://emjay03.github.io/REST-Countries-API-with-color-theme-switcher/">
                  REST COUNTRIES API
                </a>
              </h2>
              <div className=" py-6 text-base  ">
              <p className={`${theme ? 'text-gray':'text-dark'}`}>
                  Where in the world page, an easy-to-use tool to find and
                  display information about specific countries. The page
                  includes a search function, a dropdown menu for regions, and a
                  dark mode/light mode option. It's perfect for anyone looking
                  for detailed country information and it's easy to use.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 ">
                <span className=" py-2  bg-Primary  text-center">React </span>
                <span className=" py-2  bg-Primary text-center">API</span>
                <span className=" py-2 bg-Primary text-center">Tailwind</span>
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
            <h2 className={`text-3xl font-semibold ${theme ? 'text-white':'text-dark'}`}>
                <a className="hover:text-Tertiary/80" href="https://emjay03.github.io/Order-summary-component/">Order Summary Component</a>
              </h2>
              <div className=" py-6 text-base  ">
              <p className={`${theme ? 'text-gray':'text-dark'}`}>
                Order Summary Component is a summary of customer's 
                order that includes the item(s) purchased and options to
                 proceed to payment or cancel the order. It's a simple and clear view for the 
                customer to proceed with the payment or cancel the order during the checkout process.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 ">
                <span className=" py-2  bg-Primary  text-center">Html </span>
                <span className=" py-2  bg-Primary text-center">Css</span>
              
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          </div>
          )}
          <div className=" flex justify-center items-center">
            <button
              className="flex justify-center items-center text-sm bg-Tertiary/80 text-Primary px-6 py-3 "
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
  );
}

export default Project;
