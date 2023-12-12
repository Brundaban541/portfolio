import React from "react";
import project from "../assets/work2.jpg";
import { useState } from "react";
import { fadeIn } from "../Variant";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import chrome from "../assets/chrome.png";
import figma from "../assets/figma.png";
import npm from "../assets/npm.png";
import vs from "../assets/vs.png";
import ps from "../assets/ps.png";
    

function Tab () {
   const [toggleState, setToggleState] = useState(1);
      const toggleTab = (index) => {
         setToggleState(index);
      }
   const hoverScale = {
      visible:{
         scale: 1.2,
         opacity: 1,
         color: '#eda951'
      }
   }
   return ( 
      
      <motion.div 
         variants={fadeIn('left',0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.1}}
         className="workmotion. section flex-col w-full gap-2 text-center max-md:flex-col lg:pt-5" id="work">
         {/*---------TABS--------*/}
         <div className="b-tab px-[70px] rounded-full w-full">
         </div>
         <div className="
               bg-gray-400 
               shadow-[inset_0px_0px_20px_0px_rgba(0,0,0,0.75)] 
               font-semibold 
               border-white 
               border-8 
               rounded-full 
               flex 
               self-start 
               cursor-pointer
         ">
            <div className=
               {toggleState === 1 ? "tabs active-tabs" : "tabs"} 
               onClick={() => toggleTab(1)}
            >
               <button className="
                  font-semibold
                  text-primary 
                  lg:text-xl 
                  text-lg
                  sm:text-sm 
                  md:text-lg
                  pl-4
                  pr-3
                  py-2 
                  rounded-full
               ">
                  Skills & Tools 
               </button>
            </div>
            <div className=
               {toggleState === 2 ? "tabs active-tabs" : "tabs"} 
               onClick={() => toggleTab(2)}
            > 
               <button className="
                  font-semibold
                  text-primary 
                  lg:text-xl 
                  text-lg
                  sm:text-sm 
                  md:text-lg
                  pl-4
                  pr-3
                  py-2 
                  rounded-full
               ">
                  My Work 
               </button>
            </div>
         </div>
         {/*---------CONTENT--------*/} 
         <div className="b-content w-full lg:max-xxl:px-10 px-4 max-md:mb-20 py-4 bg-transparent border rounded-2xl self-start dialog-shadow">    
            <motion.div 
               variants={fadeIn('right',0)}
               initial='hidden'
               whileInView={'show'}
               viewport={{once:false,amount:0.1}}
               className=
               {toggleState === 1 ? "content active-content" : "content"}
            >
               <div className="">
                  <h1 className="
                     font-semibold 
                     max-md:text-2xl 
                     md:max-xl:text-4xl 
                     xl:text-6xl 
                     xxl-text-8xl
                     sm-text-shadow
                     text-typo
                  ">
                     Skills & Tools,
                  </h1>  
                  <h5 className="
                     max-md:text-xl 
                     md:max-xl:text-3xl 
                     xl:text-4xl 
                     xxl-text-6xl
                     sm-text-shadow
                     text-header
                     font-bold 
                     uppercase 
                  ">
                     I practice -
                  </h5>
               </div>
               <div className="
                  grid 
                  max-xs:grid-cols-2
                  xs:max-lg:grid-cols-3 
                  lg:grid-cols-3 
                  max-sm:w-[100%] w-[70%] 
                  h-max
                  xl:grid-cols-4
                  rounded-lg 
                  gap-2
                  text-lg 
               ">
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}  
                        src={html} alt=""                
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]
                           block
                        " 
                     />
                     <h3>HTML</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={css} alt=""
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                         
                     />
                     <h3>CSS</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={tailwind} alt="" 
                        className="
                           m-auto
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                     />
                     <h3 
                     
                     >Tailwind CSS</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={figma} alt="" 
                        className="m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                        
                     />
                     <h3>Figma</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={npm} alt=""
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                     />
                     <h3>NPM</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={ps} alt=""
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                     />
                     <h3>Photoshop</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg xl:col-span-2 xs:max-xl:col-span-3">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={js} alt=""
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                     />
                     <h3>JavaScript</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg xl:col-span-2">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={react} alt=""
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]"  
                     />
                     <h3>React</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={chrome} alt="" 
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                     />
                     <h3>Chrome DevTools</h3>
                  </div>
                  <div className="bg-transparent dialog-shadow rounded-lg border p-3 max-sm:text-sm text-lg">
                     <motion.img 
                        variants={hoverScale}
                        initial='hidden'
                        whileHover={'visible'}
                        src={vs} alt=""
                        className="
                           m-auto 
                           sm:max-lg:min-w-[100px] 
                           sm:max-lg:max-h-[100px] 
                           lg:min-w-[130px] 
                           lg:max-h-[130px] 
                           max-w-[40px] 
                           max-h-[40px]" 
                     />
                     <h3>Visual Studio</h3>
                  </div>
               </div>
            </motion.div>
            <motion.div 
               variants={fadeIn('left',0)}
               initial='hidden'
               whileInView={'show'}
               viewport={{once:false,amount:0.1}}
               className=
               {toggleState === 2 ? "content active-content" : "content"} 
            >  
               <div className="
                     sm-text-shadow text-white  lg:text-lg flex flex-col 
                     justify-start self-start my-auto text-start p-2 
               ">
                  <motion.h1 className="
                     var
                     max-lg:text-3xl 
                     lg:text-4xl 
                     text-6xl 
                     sm-text-shadow
                     text-typo
                     font-semibold
                     w-full
                  ">
                     Portfolio
                  </motion.h1>
                  <h5 className="
                     max-lg:text-lg 
                     lg:text-xl 
                     text-2xl 
                     sm-text-shadow
                     text-header
                     font-bold 
                     uppercase   
                  ">
                  Description -
                  </h5>
                  <p className="m-2">This portfolio showcases a seamless blend of React components and Tailwind CSS, crafted with HTML and CSS3 for coding and figma and Photoshop for design. The result is a representation of my skills in web development.</p>
                  <ol className="
                     lg:text-lg 
                     list-disc 
                     uppercase 
                     text-header 
                     font-bold 
                     list-outside 
                     max-lg:h-[150px] 
                     lg:h-[250px] 
                     overflow-y-scroll 
                     overscroll-contain 
                     max-md:relative 
                     px-4
                     scrollbar-thin
                     scrollbar-thumb-pink-600
                     scrollbar-thumb-rounded-lg
                     scrollbar-track-white/80
                     scrollbar-track-rounded-lg
                  ">
                     features -
                     <li className="text-base text-white font-normal">This portfolio is tailored for recruiters and reflects responsiveness molding with different media screen sizes.</li>
                     <li className="text-base text-white font-normal">The portfolio has features including navigation buttons for browsing through various sections</li>
                     <li className="text-base text-white font-normal">A toggle button to switch between two different tabs & contents.</li>
                     <li className="text-base text-white font-normal">Framer motion is used for animations and flexbox/ grid is utilized to design components of this portfolio.</li>
                     <li className="text-base text-white font-normal">It is saved/hosted through git repository using gitbash command.</li>
                  </ol>
               </div>
               <div className="dialog-shadow border xs:max-md:m-3 p-1 self-end rounded-lg">
                  <img className="
                     rounded-lg 
                     max-md:min-w-[75vw] 
                     max-md:min-h-[25vh] 
                     lg:max-w-[50vw] 
                     
                     h-max"
                     src={project} alt=""
                  />
               </div>
            </motion.div>               
         </div> 
      </motion.div>
   );
};

export default Tab;