import React from 'react'
import mj from "./assets/mj.jpg";
import html from "./assets/tech/html.svg";
import css from "./assets/tech/css.svg";
import js from "./assets/tech/javascript.svg";
import tailwind from "./assets/tech/tailwind.svg";
import bs from "./assets/tech/bootstrap.svg";
import react from "./assets/tech/react.svg";
import mysql from "./assets/tech/mysql.svg";
import java from "./assets/tech/java.svg";
import net from "./assets/tech/net.svg";
import linux from "./assets/tech/linux.png";
import nodejs from "./assets/tech/nodejs.svg";
import figma from "./assets/tech/figma.svg";
function About({theme}) {
  return (
    
    <div id="about" className='w-full max-w-[1190px] m-auto  lg:px-5 px-10  '>
        <div className='py-10   text-center md:text-left'>
     <h1 className={`text-4xl font-semibold   ${theme ? 'text-white' :'text-black-mode'}`}>
        <span className='border-2 mr-2 border-Tertiary  '> </span>
        Know About Me
        </h1>
     </div>
        <div className='flex lg:flex-row  flex-col items-center justify-between     gap-10'>
            <div className='lg:w-[900px] md:w-[500px] w-auto'>
                <img className="image-about"  src={mj} alt="mjcariso"/>
            </div>
            <div className='w-full max-w-[650px] py-5 text-base '>
              
                <p className={`${theme ? 'text-gray' :'text-Black-mode'} `}>As a highly motivated and dedicated student 
                    of information technology, I am confident in my ability
                     to make a significant contribution to any team or project. 
                     I have a strong track record of quickly adapting to new technologies
                      and challenges, and I am committed to staying current with the latest trends
                       and best practices in the field. I am a fast learner, a hard worker and I am eager
                        to take on any task or challenge that comes my way. I am certain that my skills, experience, and attitude make 
                    me a perfect fit for any company and I am excited to take my career to the next level .</p>
            </div>

        </div>
        <div>
            <div className='py-7 w-auto flex justify-center '>
            <h1 className={`font-semibold text-3xl border-b-4 border-Tertiary ${theme ?'text-white':'text-black-mode'}`}>Tech Stacks</h1>
           
            </div>
            <div>
                <p className={`text-2xl text-center pb-5 ${theme ? 'text-white':'text-black-mode'}`}>
                These are the tools I employ when working on projects
                </p>
                <div className='max-w-[600px] justify-center items-center  m-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4'>
                    <div className=' flex items-center justify-center'>
                    <img src={html} width="72px" alt="html"/>
                    </div>
                    <div className='flex items-center justify-center'>
                    <img src={css} width="72px" alt="html"/>
                    </div>
                    <div className='flex items-center justify-center'>
                    <img src={js} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={tailwind} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={bs} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={react} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={mysql} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={java} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={net} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={linux} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={nodejs} width="72px" alt="html"/>
                    </div>
                     <div className='flex items-center justify-center'>
                    <img src={figma} width="72px" alt="html"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About