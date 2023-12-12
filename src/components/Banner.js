import React from "react";
//images
import banner from "../assets/newyllw.png";
import avatar from "../assets/smavtr.png";
//icons 
import { FaGithub, FaFigma, FaDribbble, FaLinkedin, FaInstagram } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variant";



const hoverVariants = {
   hidden:{
      y: 0
   },
   visible:{
      y:-6,
      transition: {type: 'spring', stiffness:800},
   }
}

const Banner = () => {
   return (
      <section id="home" className="banner z-1 section h-[85vh] justify-center max-sm:flex-col p-0 max-sm">
   {/*----------- profile sm image ---------*/}
         <motion.div
            variants={fadeIn('down',0.2)} 
            initial='hidden' 
            whileInView={'show'} 
         >
            <img className='w-[100px] h-[100px] sm:max-xxl:hidden mx-auto mb-3 lg:mb-5' src={avatar} alt="" />
         </motion.div>
   {/*--------=banner container--------- */}
         <div className="mb-5">
            <div className="flex items-center justify-between ">
               <div className="sm:max-xxl:w-[60%] max-sm:text-center">
   {/*------- banner text ---------*/}
                  <motion.h1 
                     variants={fadeIn('up',0.2)} 
                     initial='hidden' 
                     whileInView={'show'} 
                     viewport={{once: false, amount:0.7}} 
                     className="
                        sm-text-shadow 
                        xl:text-5xl 
                        lg:text-4xl 
                        md:text-3xl 
                        max-sm:text-2xl 
                        sm:text-3xl 
                        text-accent 
                        font-bold 
                        font-primary
                  ">
                        BRUNDABAN<span> NAG</span>
                  </motion.h1>
                  
                  <div className="font-secondary font-bold lg:text-3xl md:text-2xl max-sm:text-lg text-primary">
                     <motion.div 
                        variants={fadeIn('up',0.3)} 
                        initial='hidden' 
                        whileInView={'show'} 
                        viewport={{once: false, amount:0.7}} 
                        className="
                           sm-text-shadow 
                           text-typo 
                           font-secondary 
                           font-bold 
                           lg:text-lg 
                           md:text-sm 
                           max-sm:text-xs
                     ">
                        Based from <span className="text-white lg:text-xl">Odisha 766001, India </span>.
                     </motion.div>

                     <motion.div 
                        variants={fadeIn('up',0.4)} 
                        initial='hidden' 
                        whileInView={'show'} 
                        viewport={{once: false, amount:0.7}}>
                           <span className="sm-text-shadow uppercase text-white">
                              I am a -
                           </span>
   {/* ------text animation-------- */}
                           <TypeAnimation 
                              className="sm-text-shadow text-accent uppercase" 
                              sequence={[
                                 ' Front-end Developer.',
                                 2000,
                                 ' UI & UX Designer.',
                                 2000,
                                 ' Content Creator.',
                                 2000,
                                 ' Fitness Nutrionist.',
                                 2000,
                              ]} 
                              speed={60}
                              wrapper="span"
                              repeat={Infinity}
                           />
                     </motion.div>

                     <motion.div                         
                        variants={fadeIn('up',0.5)} 
                        initial='hidden' 
                        whileInView={'show'} 
                        viewport={{once: false, amount:0.7}} 
                        className="
                           sm-text-shadow 
                           text-white 
                           lg:text-xl 
                           max-sm:text-sm 
                           sm:text-sm 
                           my-3 
                           lg:my-6 
                           font-secondary 
                           flex-wrap 
                           font-semibold ">
                           <p>Hey there! I'm
                              <span className="text-typo font-bold max-sm:text-sm sm:text-lg lg:text-2xl"> BRUNDABAN NAG</span>
                              , a passionate front-end developer with flair for . visually appealing and user friendly websites With a strong background in web development and a love for all things design.
                           </p>
                     </motion.div>
                  </div>
   {/*-------button and portfolio link--------- */}
                  <motion.div 
                     variants={fadeIn('up',0.6)} 
                     initial='hidden' 
                     whileInView={'show'} 
                     viewport={{once: false, amount:0.7}}
                     className="my-3 lg:my-6">
                        <button className="btn btn-sm md:btn-lg">Reach Out To me</button>
                           <a href="www.linkedin.com/in/brundaban201" className="text-gradient btn-link mx-2">
                              My Portfolio
                           </a> 
                        <div className="flex text-[30px] gap-x-4 px-3 my-3 lg:my-6 max-sm:mx-auto max-w-max">
                           <motion.a 
                              variants={hoverVariants}
                              initial='hidden'
                              whileHover={'visible'}
                              href="https://github.com/Brundaban541"
                              className="py-3 hover:text-typo 
                           ">
                              <FaGithub />
                           </motion.a>
                           <motion.a 
                              variants={hoverVariants}
                              initial='hidden'
                              whileHover={'visible'}
                              href="https://linkedin.com/in/brundaban201"
                              className="py-3 hover:text-typo
                           ">
                              <FaLinkedin />
                           </motion.a>
                           <motion.a 
                              variants={hoverVariants}
                              initial='hidden'
                              whileHover={'visible'}
                              href="https://dribbble.com/brunda541"
                              className="py-3 hover:text-typo 
                           ">
                              <FaDribbble />
                           </motion.a>                           
                           <motion.a 
                              variants={hoverVariants}
                              initial='hidden'
                              whileHover={'visible'}
                              href=" https://www.figma.com/@brundaban"
                              className="py-3 hover:text-typo
                           ">
                              <FaFigma />
                           </motion.a>
                           <motion.a 
                              variants={hoverVariants}
                              initial='hidden'
                              whileHover={'visible'}
                              href=" https://www.instagram.com/brunda_ban/"
                              className="py-3 hover:text-typo
                           ">
                              <FaInstagram />
                           </motion.a>
                        </div>
                  </motion.div>
   {/*----------icons---------- */}
                
               </div>   
   {/* -----banner image----- */}
               <motion.div 
                  variants={fadeIn('down',0.4)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  className="self-start">
                     <img 
                        className="
                        max-h-[450px] 
                        w-[380px] 
                        lg:max-xl:h-[430px] 
                        lg:max-xl:w-[360px] 
                        max-sm:hidden 
                        md:max-sm:h-[220px] 
                        md:max-sm:w-[180px] 
                        sm:max-md:w-[240px] 
                        sm:max-md:h-[280px] 
                        md:max-lg:h-[330px] 
                        md:max-lg:w-[280px]" 
                        src={banner} alt=""
                     />
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
