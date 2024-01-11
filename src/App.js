
import React,{ useEffect, useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header.jsx'
import Hero from './Components/Hero';
import Project from './Components/Project';
import Testimonial from './Components/Testimonial';
import Darkmode from './util/Darkmode.js';
import { DarkModeProvider } from './util/DarkModeContext.js';
 

function App() {
   
  return (
   
   
     <>
     <DarkModeProvider>
     <div>
    
        <Header/>
       <Hero/>
       <About/>
       <Project/>
       <Testimonial/>
       <Contact/>
       <Footer/>
      </div>
     </DarkModeProvider>
     </>

     
   
  );
}

export default App;
