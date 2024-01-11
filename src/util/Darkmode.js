// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import {useDarkMode} from  './DarkModeContext';
import Switch from "react-switch";
 

const Darkmode = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [checked, setChecked] = useState(false);

    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };

  return (
    <>
    
    <label className="relative inline-flex items-center cursor-pointer">
      {/* Hidden input for accessibility */}
      <input
        className="sr-only peer"
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      {/* Styled container for the switch */}
      <div
        className={`w-20 h-10 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden 
          before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️']
          before:absolute before:h-10 before:w-10 before:top-1/2 before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700
          peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg
          shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#29333b]
          after:content-['🌑'] after:absolute after:rounded-full after:top-[1px] after:right-1 after:translate-y-full after:w-10
          after:h-10 after:opacity-0 after:transition-all after:duration-700
          peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0
        `}
        style={{
          
          borderColor: darkMode ? "#383838" : "transparent",  
          boxShadow: darkMode ? "0 0 10px rgba(0, 0, 0, 0.5)" : "0 0 10px rgba(255, 255, 255, 0.5)"  
        }}
      >
        {/* Content inside the switch (can be adjusted based on your needs) */}
         
      </div>
    </label>
      
  </>
  
  );
};

export default Darkmode;
