import React from "react";
//IMAGES 
import Logo  from "../assets/logorsze.png";
import cv from "../assets/frontend-CV.pdf";
import {BiSolidDownload} from 'react-icons/bi';
import {Link} from "react-scroll";
import { motion } from "framer-motion";

const headerVariants ={
   hidden:{
      y:-30,
   },
   visible:{
      y:0,

      transition:{
               type: 'spring',
               stiffness: 500,
               duration: 0.2,
         },
   }
}

const Header = () => {
	return (
      <motion.header 
         variants={headerVariants}
         initial='hidden'
         whileInView={'visible'}
         className="header pt-6 pb-3 md:py-8 w-[85%] mx-auto">
         <motion.div className="w-[100%]">
            <motion.div className="flex justify-between items-center">
               {/*logo */}
               <a href="https://github.com/Brundaban541">
                  <img className="" height={20} width={40} src={Logo} alt="avatar" />
               </a>
               {/*button*/}
               <div className="flex justify-end items-center gap-3 text-6xl ">
                  <button className="btn btn-sm ">Work with me</button>
                  <a href={cv} download="CV">
                     <button className="btn btn-sm flex items-center gap-1">
                        CV
                        {/* Download Icon*/}
                        <Link className="text-[1rem]">
                           <BiSolidDownload />
                        </Link>
                     </button>
                  </a>
               </div>
            </motion.div>
         </motion.div>
      </motion.header>
   );
};

export default Header;