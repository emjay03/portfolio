
import React,{ useEffect, useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header.jsx'
import Hero from './Components/Hero';
import Project from './Components/Project';
import Testimonial from './Components/Testimonial';



function App() {
  const [theme, setTheme] = useState('');

const toggleTheme=()=>{

  theme=== ''? setTheme('Dark-theme'):  setTheme('')
}
useEffect(()=>{
  document.body.className=theme
},[theme]);
  return (
   
   
    <div className={`max-w-[1440px] w-full m-auto p-auto ${theme ? 'bg-black-mode transition-all' : ''}`}>
      <Header  theme={theme} toggleTheme={toggleTheme}/>
      <Hero  theme={theme}/>
      <About theme={theme} />
      <Project theme={theme}/>
      <Testimonial theme={theme} />
      <Contact theme={theme}/>
      <Footer theme={theme}/>
    </div>

     
   
  );
}

export default App;
