import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useDarkMode } from "../util/DarkModeContext";
function Contact() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "bg-[#111e25]" : "bg-[#F5F5F5]"}>
      <div
        id="contact"
        className="w-full max-w-[1190px] m-auto  lg:px-5 px-10  "
      >
        <div className="py-10   text-center md:text-left">
          <h1
            className={`text-4xl font-semibold font-poppins text-[#303481] ${
              darkMode ? " " : "  "
            }`}
          >
            <span
              className={`border-2 mr-2  ${
                darkMode ? "" : "border-[#111e25] "
              }`}
            ></span>
            Contact
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-10 lg:px-0 md:px-14 px-0 ">
          <div className="md:w-[700px]">
            <h4
              className={`text-4xl font-normal pb-4 font-playfair ${
                darkMode ? "text-white" : "text-Black-mode"
              }`}
            >
              Get in touch with me
            </h4>
            <p
              className={`font-montserrat text-sm ${
                darkMode ? "text-white" : "text-Black-mode"
              }`}
            >
              If you are in need of a new website or have any issues with your
              current one, please don't hesitate to get in touch with me. I
              would be happy to discuss your project and see how I c an help
              bring it to life.
            </p>

            <button className="bg-[#FF6F6F] text-white font-montserrat py-4 px-8 my-6 rounded-md   text-base ">
              <a href="mailto:mjcariso3@gmail.com">Get in touch</a>
            </button>
          </div>

          <div className="w-auto md:py-10 py-2">
            <span className="flex justify-start items-center">
              <BsFillTelephoneFill
                size={20}
                className={` p-4    w-[60px]  h-[60px] ${
                  darkMode ? "bg-[#29333b]  text-white" : "  bg-[#e8e8e8]"
                }`}
              />
              <p
                className={`pl-2  font-montserrat ${
                  darkMode ? "text-white" : "text-black-mode"
                }`}
              >
                (63+)9751250231
              </p>
            </span>
            <div className="py-2"></div>
            <span className="flex justify-start items-center">
              <MdEmail
                size={20}
                className={` p-4    w-[60px]  h-[60px] ${
                  darkMode ? "bg-[#29333b]  text-white" : "  bg-[#e8e8e8]"
                }`}
              />
              <p
                className={`pl-2 font-montserrat ${
                  darkMode ? "text-white" : "text-black-mode"
                }`}
              >
                mjcariso3@gmail.com
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
