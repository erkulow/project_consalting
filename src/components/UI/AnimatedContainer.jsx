import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export const AnimatedContainer = ({ children, className, id, rest }) => {
   const [ref, inView] = useInView({
      triggerOnce: true,
   })
   const ANIMATE_VARIANTS = {
      visible: { opacity: 1, y: 0 },
      hidden: {
         opacity: 0,
         y: 150,
      },
   }
   return (
      <motion.div
         ref={ref}
         animate={inView ? 'visible' : 'hidden'}
         variants={ANIMATE_VARIANTS}
         transition={{ duration: 0.8, ease: 'easeOut' }}
         className={className}
         id={id}
         {...rest}
      >
         {children}
      </motion.div>
   )
}
