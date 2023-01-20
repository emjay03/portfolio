import React from "react";

import { SocialIcon } from "react-social-icons";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { IoHandLeft } from "react-icons/io5";
import "animate.css";
import {Link as Scroll} from 'react-scroll';
import { AiOutlineArrowDown } from "react-icons/ai";

function Hero({theme}) {



  return (
    <div className={`w-full max-w-[1190px] m-auto lg:flex justify-between items-center py-4 lg:px-5 px-10    `}>
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center pt-[110px] gap-7  ">
        <div className="w-50 py-10 ">
          <div className="">
            
            <p className={`text-3xl font-semibold flex ${theme === "Dark-theme" ? 'text-white' : 'text-Secondary'}`}>
              Hi!{" "}
              <IoHandLeft
                className="animate__animated animate__headShake  animate__infinite	mx-2 text-Tertiary"
                size={28}
              />
            </p>
            <h3 className={`text-5xl font-bold py-4 ${theme === "Dark-theme" ? 'text-white' : 'text-Secondary'}`}>
              I am <span className={` ${theme === "Dark-theme" ? 'text-Tertiary' : 'text-Tertiary'}`}>Mark James Cariso</span>
            </h3>
          </div>
          <div className="w-full max-w-[650px] py-5 text-base ">
            <p className={`${theme === "Dark-theme" ? 'text-gray ' : 'text-Secondary'}`}>
              Are you looking for a web front end developer for your next
              project? Do you want to build something incredible? Then I am the
              right Web Developer for you. I have a strong understanding of web
              development technologies and a passion for creating beautiful and
              functional websites. I am confident that I can help bring your
              vision to life, and I look forward to the opportunity to work with
              you. Thank you for considering me for your project
            </p>
          </div>
          <button className=" px-7 py-4 bg-Tertiary text-Primary hover:scale-110 transition ">

          <Scroll
            to="project"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
            className="flex justify-center items-center "
          >
           Explore Project<AiOutlineArrowDown size={20} className="ml-1  " />
          </Scroll>
          
          </button>
        </div>
        <div className=" flex md:flex-row  flex-col justify-between items-center gap-6">
          <div className="circle lg:w-[400px] w-full ">
            <div className=" text-4xl text-right font-bold ">
              <h4 className={`  italic ${theme ? 'text-white' : 'text-Chone'}`}>CHONE DIP</h4>
            </div>
            <img
              src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="programming"
            />
            <div className="text-4xl font-bold">
              <h4 className={` italic ${theme ? 'text-white' : 'text-Chone'}`}>DATA MIN</h4>
            </div>
          </div>
          <div className="flex md:flex-col items-center justify-center gap-2">
            <div id="facebook">
              <SocialIcon
                url="https://www.facebook.com/mjcariso03"
                network="facebook"
                bgColor={theme ? "#B10F2E" : "#B10F2E"}
                fgColor={theme ? "#ffff" : "#ffff"}
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
                bgColor={theme ? "#B10F2E" : "#B10F2E"}
                fgColor={theme ? "#ffff" : "#ffff"}
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
                bgColor={theme ? "#B10F2E" : "#B10F2E"}
                fgColor={theme ? "#ffff" : "#ffff"}
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
                bgColor={theme ? "#B10F2E" : "#B10F2E"}
                fgColor={theme ? "#ffff" : "#ffff"}
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
                bgColor={theme ? "#B10F2E" : "#B10F2E"}
                fgColor={theme ? "#ffff" : "#ffff"}
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
      <div></div>
    </div>
  );
}

export default Hero;
