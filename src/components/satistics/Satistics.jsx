import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import styles from './AboutUs.module.css'

export const Satistics = () => {
   const fadeInAnimationStyles = useRef({
      hidden: {
         opacity: 0,
      },
      visible: (custom) => ({
         opacity: 1,
         transition: {
            delay: custom * 0.3,
            bounce: 0.3,
            duration: 0.5,
         },
      }),
   })

   return (
      <div className={styles.statistics}>
         <motion.div
            custom={5}
            variants={fadeInAnimationStyles.current}
            className={styles.countUpbox}
         >
            <span className={styles.numbers}>
               <CountUp start={0} end={12} duration={2.75} />
            </span>
            <p className={styles.squad}>Number of visas received</p>
         </motion.div>
         <motion.div
            custom={5}
            variants={fadeInAnimationStyles.current}
            className={styles.countUpbox}
         >
            <span className={styles.numbers}>
               <CountUp start={0} end={150} duration={2.75} />
            </span>
            <p className={styles.squad}>Number of visas received</p>
         </motion.div>
         <motion.div
            custom={5}
            variants={fadeInAnimationStyles.current}
            className={styles.countUpbox}
         >
            <span className={styles.numbers}>
               <CountUp start={0} end={200} duration={2.75} />
            </span>
            <p className={styles.squad}>Number of visas received</p>
         </motion.div>
         <motion.div
            custom={5}
            variants={fadeInAnimationStyles.current}
            className={styles.countUpbox}
         >
            <span className={styles.numbers}>
               <CountUp start={0} end={250} duration={2.75} />
            </span>
            <p className={styles.squad}>Number of visas received</p>
         </motion.div>
      </div>
   )
}
