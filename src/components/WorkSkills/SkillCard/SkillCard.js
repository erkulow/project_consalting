import React from 'react'
import PropTypes from 'prop-types'
import styles from './SkillCard.module.css'
import { AnimatedContainer } from '../../UI/AnimatedContainer'
import { ReactComponent as Tick } from '../../../assets/svg/tick.svg'
import { AnimatedCircle } from '../../AnimatedCircles/AnimatedCircles/AnimatedCircle'

export default function SkillCard({
   circleTitle,
   title,
   subtitle,
   theme,
   skills,
}) {
   return (
      <AnimatedContainer className={`${styles.skill__card} ${styles[theme]}`}>
         <div className={styles['skills__title-container']}>
            <AnimatedCircle title={circleTitle} theme={theme} />
         </div>

         <div className={styles['skills__skill-description']}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <ul className={styles['skills__skill-skills']}>
               {skills.map((skill) => (
                  <li key={skill}>
                     <Tick />
                     {skill}
                  </li>
               ))}
            </ul>
         </div>
      </AnimatedContainer>
   )
}

SkillCard.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
   skills: PropTypes.instanceOf(Array).isRequired,
   circleTitle: PropTypes.string.isRequired,
   theme: PropTypes.string.isRequired,
}
