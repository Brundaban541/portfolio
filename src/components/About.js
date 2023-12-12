import React from "react";
import { GiJourney } from "react-icons/gi";
import cv from "../assets/frontend-CV.pdf";
import {BiSolidDownload} from 'react-icons/bi';
import {motion} from 'framer-motion'

import brunda from "../assets/aboutcrop.jpg";
import brunda2 from "../assets/about3.jpg";
import { fadeIn } from "../Variant";

const About = () => {
  return (
   <div className="about section sm:justify-center h-screen flex-col" id="about">

      <motion.h2
         variants={fadeIn('bouncy', 0.2)}
         initial='init' 
         whileInView={'bouncy'} 
         viewport={{once: false, amount:0.2}}
         className="
            text-typo 
            lg-text-shadow 
            sm:self-start 
            px-2 pb-2 
            text-8xl 
            xs:max-md:text-4xl 
            md:text-6xl 
            md:my-1 
            lg:text-6xl 
            xxl 
            font-bold f
            ont-primary
         ">
            About Me
      </motion.h2>
{/*------about content--------*/}
      <motion.div
         variants={fadeIn ('right', 0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.7}}
         className="
            p-3 
            backdrop-blur-lg 
            w-[80vw] 
            bg-fuchsia-400/10 
            outline 
            outline-offset-4 
            outline-white 
            outline-1 
            rounded-xl
      "> 
{/*-------small screen about image-----------*/}
         <div>
            <img className="lg:hidden rounded-lg" src={brunda2} alt="" />
         </div>
         <div className="flex justify-center max-md:gap-2 lg:gap-4 items-center">
{/*------text paragraph-------*/}
            <div className=" text-black">
               <p className="sm-text-shadow lg:text-xl 2xl:text-2xl max-sm:text-sm sm:text-lg font-secondary font-semibold text-white">
                  <span className="sm-text-shadow tracking-tighter lg:text-4xl 2xl:text-5xl max-sm:text-3xl sm:text-3xl text-accent">A </span>
                   passionate frontend developer from Odisha India, I thrive on creating engaging and seamless user experiences that leave a lasting impression. With a strong background in web development and a love for all things design, I'm dedicated to crafting intuitive and visually stunning websites and applications.
               </p>
               <div className="sm-text-shadow items-center lg:text-4xl md:text-2xl max-md:text-2xl text-accent flex lg:py-1">
                  <h2 className="pr-4 lg:text-3xl md:text-2xl max-md:text-xl font-bold font-primary text-accent lg:py-1">
                     Journey
                  </h2> 
                  <GiJourney />
               </div>
{/*------text paragraph 2-------*/}
               <p className="
                  sm-text-shadow 
                  text-white
                  font-semibold 
                  lg:text-xl 
                  2xl:text-2xl 
                  max-sm:text-sm 
                  sm:text-lg 
                  font-secondary
               ">
                  My journey into the world of web development began with a curiosity for how websites are built and a desire to bring creative ideas to life. Over the years, I've honed my skills in HTML, CSS, and JavaScript, continuously learning and embracing new technologies to stay ahead in this fast-paced digital landscape.
               </p>
{/*-------cv dload button--------*/}
               <a href={cv} download="CV">
                  <button className="btn max-lg:btn-sm lg:btn-lg flex items-center gap-1 my-4">
                     Resume
                        {/* Download Icon*/}
                     <div className="text-[1rem]">
                        <BiSolidDownload />
                     </div>
                  </button>
               </a>
            </div> 
            <img className="rounded-lg mix-blend-lighten max-lg:hidden md:w-[330px] md:h-[500px]" src={brunda} alt="" />
         </div>
      </motion.div>
   </div>

);
};

export default About;