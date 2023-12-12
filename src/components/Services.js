import React from "react";
import wd from "../assets/coding.png";
import gd from "../assets/gd.png";
import md from "../assets/md.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import fitness from "../assets/dumbbell.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Variant";


const hoverScale = {
   visible:{
      scale: 1.1,
      opacity: 1,
      color: '#eda951'
   }
}

const Services = () => {
  return (
   <div className="services section max-sm:h-[95vh] lg:h-screen justify-center" id="services">
      <div className="">
         <motion.h2 
            variants={fadeIn('bouncy')}
            initial='init' 
            whileInView={'bouncy'} 
            viewport={{once: false, amount:0.2}}
            className="
               text-typo 
               lg-text-shadow 
               text-center 
               lg:text-6xl 
               xs:text-3xl 
               sm:text-4xl 
               md:text-6xl 
               font-bold
               pb-4 
               lg:pb-8 
         ">
            My Expertise
         </motion.h2>
         <div className="grid max-md:grid-rows-2 max-md:grid-cols-2 md:max-xl:grid-cols-2 xl:grid-cols-4 gap-6">
            <motion.div 
               variants={fadeIn ('right', 0.2)}
               initial='hidden'
               whileInView={'show'}
               viewport={{amount:0.5}}
               className="
                  hover:backdrop-blur-lg 
                  dialog-shadow 
                  cursor-pointer 
                  text-center 
                  max-lg:p-4 lg:p-3 max-sm:w-full
                  bg-transparent 
                  text-header
                  font-bold 
                  hover:text-white 
                  lg:text-sm 
                  rounded-lg
                  border
                  hover:bg-typo/30
            ">
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >   
                  <img className="max-h-[150px] max-w-[150px] max-sm:max-w-[80px] max-sm:max-h-[80px] sm:p-3 m-auto" src={wd} alt="" />
                  <h2 className="sm:max-lg:text-2xl lg:text-3xl max-sm:text-xl">Web <br className="md:hidden" />Development</h2>
                  <p className="max-sm:hidden sm:max-lg:text-sm lg:text-lg py-3">
                     Enduring over 3 years in web designing with HTML, CSS, CSS libraries, JavaScript <br className="max-sm:hidden" />& React Frameworks
                  </p>
               </motion.div>
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >   
                  <a className="inline-flex py-3 items-center max-sm:text-sm sm:text-2xl" 
                     href="https://www.geeksforgeeks.org/web-development/">
                     Learn more
                     <div className="px-2 text-lg">
                        <FaArrowUpRightFromSquare />
                     </div>
                  </a>
               </motion.div>
            </motion.div>
            <motion.div 
               variants={fadeIn ('right', 0.4)}
               initial='hidden'
               whileInView={'show'}
               viewport={{amount:0.5}}
               whileHover={'bouncy'}
               className="
                  hover:backdrop-blur-lg 
                  dialog-shadow 
                  cursor-pointer 
                  text-center 
                  max-lg:p-4 
                  lg:p-3 max-sm:w-full
                  bg-transparent
                  text-header
                  font-bold 
                  hover:text-white
                  lg:text-sm 
                  rounded-lg
                  border
                  hover:bg-typo/30
               ">
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >
                  <img className="max-h-[150px] max-w-[150px] max-sm:max-w-[80px] max-sm:max-h-[80px] sm:p-3 m-auto" src={gd} alt="" />
                  <h2 className="sm:max-lg:text-2xl lg:text-3xl max-sm:text-xl">UI & UX <br className="md:hidden" /> Design </h2>
                  <p className="max-sm:hidden sm:max-lg:text-sm lg:text-lg py-3">
                     skilled in developing interactive web pages with some commercial level tools<br className="max-sm:hidden" />like Figma, Tailwind CSS etc.
                  </p>
               </motion.div>
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >
                  <a className="inline-flex py-3 items-center max-sm:text-sm sm:text-2xl" 
                  href="https://www.geeksforgeeks.org/user-experience-or-ux-design/">
                  Learn more
                     <div className="px-2 text-lg">
                        <FaArrowUpRightFromSquare />
                     </div>
                  </a>
               </motion.div>
            </motion.div>
            <motion.div 
               variants={fadeIn ('right', 0.6)}
               initial='hidden'
               whileInView={'show'}
               viewport={{amount:0.5}}
               className="
                  hover:backdrop-blur-lg
                  dialog-shadow 
                  cursor-pointer 
                  text-center 
                  max-lg:p-4 
                  lg:p-3 max-sm:w-full
                  bg-transparent 
                  text-header
                  font-bold 
                  hover:text-white 
                  lg:text-sm 
                  rounded-lg
                  border
                  hover:bg-typo/30
                  
            ">
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >
                  <img className="max-h-[150px] max-w-[150px] max-sm:max-w-[80px] max-sm:max-h-[80px] sm:p-3 m-auto" src={md} alt="" />
                  <h2 className="sm:max-lg:text-2xl lg:text-3xl max-sm:text-xl">Material <br className="md:hidden" />Design</h2>
                  <p className="max-sm:hidden sm:max-lg:text-sm lg:text-lg py-3">
                     proficient in designing UI materials for web pages and <br className="max-sm:hidden" />templates using adobe photoshope, figma etc.
                  </p>
               </motion.div>
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >
                  <a className="inline-flex py-3 items-center max-sm:text-sm sm:text-2xl" href="https://www.geeksforgeeks.org/introduction-to-material-design-in-android/">
                     Learn more
                     <div className="px-2 text-lg">
                        <FaArrowUpRightFromSquare />
                     </div>
                  </a>
               </motion.div>
            </motion.div>
            <motion.div 
               variants={fadeIn ('right', 0.8)}
               initial='hidden'
               whileInView={'show'}
               viewport={{amount:0.5}}
               className="
                  hover:backdrop-blur-lg 
                  dialog-shadow 
                  cursor-pointer 
                  text-center 
                  max-lg:p-4 lg:p-3 max-sm:w-full
                  bg-transparent
                  text-header
                  font-bold
                  hover:text-white 
                  lg:text-sm 
                  rounded-lg
                  border
                  hover:bg-typo/30
            ">
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >
                  <img className="max-h-[150px] max-w-[150px] max-sm:max-w-[80px] max-sm:max-h-[80px] sm:p-3 m-auto" src={fitness} alt="" />
                  <h2 className="sm:max-lg:text-2xl lg:text-3xl max-sm:text-xl">Fitness <br className="md:hidden" />nutrionist</h2>
                  <p className="max-sm:hidden sm:max-lg:text-sm lg:text-lg py-3">
                     Apart from Web-developement, I have comprehensive knowledge in weight training<br className="sm:hidden" /> nutrition with over 2 years
                  </p>
               </motion.div>
               <motion.div
                  variants={hoverScale}
                  whileHover={'visible'}
               >
                  <a className="inline-flex py-3 items-center max-sm:text-sm sm:text-2xl" href="https://www.classcentral.com/course/edx-nutrition-exercise-and-sports-14381">
                     Learn more
                     <div className="px-2 text-lg">
                        <FaArrowUpRightFromSquare />
                     </div>
                  </a>
               </motion.div>
            </motion.div>
         </div>
      </div>
   </div>
  );
};

export default Services;