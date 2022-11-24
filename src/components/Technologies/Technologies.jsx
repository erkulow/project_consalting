import { Tabs } from './Tabs'
import styles from './Technologies.module.css'
import { AnimatedContainer } from '../UI/AnimatedContainer'

export const Technologies = () => {
   return (
      <AnimatedContainer className={styles.technologies__container}>
         <h1 className={styles.technologies__title}>
            Technologies <br />
            we work with
         </h1>
         <Tabs />
      </AnimatedContainer>
   )
}
