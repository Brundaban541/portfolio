import React from "react";
//import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText,} from 'react-icons/bs'
//link
import {Link} from "react-scroll";

const Nav = () => {
	return(
      <nav className=" NAV fixed bottom-3 lg:bottom-3 w-full overflow-hidden z-50">
         <div className="container mx-auto">
            <div className="
               w-full
               bg-black/40
               max-lg:h-[70px] 
               lg:h-[93px] 
               backdrop-blur-2xl 
               rounded-full ~
               max-w-[460px] 
               mx-auto 
               px-5
               flex
               justify-between
               items-center
               lg:text-2xl
               md:text-xl
               text-lg
               text-white/50
            ">
               <Link 
                  to="home" 
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={-300}
                  className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center"
               >
                  <BiHomeAlt />
               </Link>

               <Link 
                  to="about" 
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center"
               >
                  <BiUser />
               </Link>

               <Link 
                  to="services" 
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center"
               >
                  <BsClipboardData />
               </Link>

               <Link 
                  to="work" 
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px] w-[60px] lg:h-[60px] flex items-center justify-center"
               >
                  <BsBriefcase />
               </Link>

               <Link 
                  to="contact" 
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px] w-[60px] lg:h-[60px] flex items-center justify-center"
               >
                  <BsChatSquareText />
               </Link>
               
            </div>
         </div>
      </nav>
   );
};

export default Nav;