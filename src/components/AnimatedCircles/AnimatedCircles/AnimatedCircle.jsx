import { motion } from 'framer-motion'
import styles from './AnimatedCircle.module.css'
import { ReactComponent as ArrowForCircle } from '../../../assets/svg/arrow-for-circle.svg'

export const AnimatedCircle = ({ title = 'title', theme = 'green' }) => {
   return (
      <div className={styles.container}>
         <ArrowForCircle className={`${styles.leftArrow} ${styles[theme]}`} />
         <ArrowForCircle className={`${styles.rightArrow} ${styles[theme]}`} />
         <motion.div
            animate={{ scale: 1.1 }}
            transition={{
               repeat: Infinity,
               repeatType: 'reverse',
               duration: 1.5,
            }}
         >
            <div className={`${styles.circle} ${styles[theme]}`} />
         </motion.div>
         <h2 className={styles.title}>{title}</h2>
         <ArrowForCircle className={`${styles.bottomArrow} ${styles[theme]}`} />
      </div>
   )
}
