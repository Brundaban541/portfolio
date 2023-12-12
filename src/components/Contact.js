import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variant";


const Contact = () => {
	return ( 
      <section className="contact lg:section h-screen max-sm:py-6 py-16" id="contact">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center">
               <motion.div 
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false,amount:0.6}}
                  className="flex-1">
                  <div className="">
                     <h4 className="sm-text-shadow text-3xl uppercase text-accent font-semibold tracking-wide mb-2">
                        Get in Touch,
                     </h4>
                     <h2 className="sm-text-shadow text-[45px] lg:text-[90px] text-header leading-none font-semibold mb-6 lg:mb-12">
                        Let's work <br/> together !
                     </h2>
                  </div>
               </motion.div>
               <motion.form 
                  variants={fadeIn('down',0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false,amount:0.6}}
                  className="flex-1 flex border flex-col rounded-2xl gap-y-6 max-lg:pb-14 lg:pb-16 p-6 items-start">
                  <input 
                     className=" bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-typo transition-all" 
                     type="text" 
                     placeholder="Your name"
                  />
                  <input 
                     className="bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-typo transition-all" 
                     type="text" 
                     placeholder="Your email"
                  />
                  <textarea 
                     className="bg-transparent border-b py-7 lg:py-12 outline-none w-full
                     placeholder:text-white focus:border-typo transition-all resize-none mb-7 lg:mb-6"
                     placeholder="Your message">
                  </textarea>
                  <button className="btn btn-lg">Send message</button>
               </motion.form>
            </div>
         </div>
      </section>
   );
};

export default Contact;