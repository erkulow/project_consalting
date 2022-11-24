import propTypes from 'prop-types'
import { AnimatedContainer } from '../../../UI/AnimatedContainer'
import styles from './WorkCard.module.css'

export function WorkCard({ icon, title, subtitle }) {
   return (
      <AnimatedContainer className={styles.work__container}>
         <div className={styles.work__icon}>{icon}</div>
         <p className={styles.work__title}>{title}</p>
         <span className={styles.work__subtitle}>{subtitle}</span>
      </AnimatedContainer>
   )
}

WorkCard.propTypes = {
   icon: propTypes.node.isRequired,
   title: propTypes.string.isRequired,
   subtitle: propTypes.string.isRequired,
}
