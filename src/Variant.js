import { delay } from "framer-motion";

export const fadeIn = (direction, delay ) => {
   return{
      hidden: {
         y: direction ==='up' ? 80 : direction === 'down'?  - 80 : 0,
         opacity: 0,
         x: direction === 'left' ? 80 :  direction === 'right' ? -80 : 0,
      },
      init:{
         opacity:0,
         scale:0
      },
      show: {
         y:0,
         x:0,
         opacity: 1,
         transition: {
            type: 'tween',
            duration: 1,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
         },
      },
      bouncy:{
         opacity: 1, 
         scale: 1,
         transition:{
               type: 'spring',
               stiffness: 100,
               duration: 0.2,
               delay: 0.2,
         },
      }
   };
};