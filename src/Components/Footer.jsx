import React from "react";
import { useDarkMode } from "../util/DarkModeContext";
function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "bg-[#29333b]" : "bg-[#F5F5F5]"}>
      <div className="w-full max-w-[1190px] m-auto  py-4 lg:px-5 px-10 flex justify-center items-center">
        <p
          className={`  text-sm text-center font-montserrat  ${
            darkMode ? "text-white" : "text-black-mode"
          }`}
        >
          ©2022 Made by MJ Cariso | All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
