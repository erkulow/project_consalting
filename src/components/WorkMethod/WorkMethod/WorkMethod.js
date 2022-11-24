import React from 'react'
import { WorkCard } from './WorkCard/WorkCard'
import styles from './WorkMethod.module.css'

import { ReactComponent as WorkIcon1 } from '../../../assets/svg/work-method-icon-1.svg'
import { ReactComponent as WorkIcon2 } from '../../../assets/svg/work-method-icon-2.svg'
import { ReactComponent as WorkIcon3 } from '../../../assets/svg/work-method-icon-3.svg'
import { ReactComponent as WorkIcon5 } from '../../../assets/svg/work-method-icon-5.svg'
import { ReactComponent as WorkIcon4 } from '../../../assets/svg/work-method-icon-4.svg'
import { ReactComponent as WorkIcon6 } from '../../../assets/svg/work-method-icon-6.svg'
import { AnimatedContainer } from '../../UI/AnimatedContainer'
import Circles from '../../Circles/Circles'

const WORK_METHOD_DATA = {
   first: [
      {
         icon: <WorkIcon1 />,
         title: 'Consulting services',
         subtitle: `Discover and find the best colleges and universities to study abroad.`,
      },
      {
         icon: <WorkIcon2 />,
         title: 'Individual Approach',
         subtitle:
            'Our consultants will plan for you an individual set for admission to different colleges.',
      },
      {
         icon: <WorkIcon3 />,
         title: 'Submission Support',
         subtitle:
            'We will help you apply to the university and oversee the whole process.',
      },
   ],
   second: [
      {
         icon: <WorkIcon4 />,
         title: 'Academic plan',
         subtitle: 'Our staff also make sure that college time goes smoothly.',
      },
      {
         icon: <WorkIcon5 />,
         title: 'Visa Process',
         subtitle:
            'Our qualified visa representatives will help you with your visa application.',
      },
      {
         icon: <WorkIcon6 />,
         title: 'MORE OUR SERVICES',
         subtitle:
            'Our qualified visa representatives will help you with your visa application.',
      },
   ],
}

export default function WorkMethod() {
   return (
      <AnimatedContainer className={styles.work__container}>
         <div className={styles.work__wrapper}>
            {WORK_METHOD_DATA.first.map((item) => {
               return (
                  <WorkCard
                     key={item.title}
                     icon={item.icon}
                     title={item.title}
                     subtitle={item.subtitle}
                  />
               )
            })}

            <Circles />
            {WORK_METHOD_DATA.second.map((item) => {
               return (
                  <WorkCard
                     key={item.title}
                     icon={item.icon}
                     title={item.title}
                     subtitle={item.subtitle}
                  />
               )
            })}
         </div>
      </AnimatedContainer>
   )
}
