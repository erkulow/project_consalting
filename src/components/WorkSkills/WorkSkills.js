import React from 'react'
import { AnimatedContainer } from '../UI/AnimatedContainer'
import SkillCard from './SkillCard/SkillCard'
import styles from './WorkSkills.module.css'

const SKILLS = [
   {
      color: 'linear-gradient(64.02deg, #0B8650 17.2%, #0B8650 31.29%, #0D9257 44.16%, #06A760 72.26%, #10BA68 92.8%)',
      circleTitle: 'University search',
      title: 'Continious delivery approach',
      subtitle:
         'Make an appointment with a uni consultant to get the perfect study abroad application plan...',
      skills: [
         'Demo Sessions',
         'Maintenance',
         'Accurate estimation',
         'Customer Support',
      ],
      theme: 'green',
   },
   {
      color: 'linear-gradient(64.02deg, #0151BF 35.71%, #0154BF 40.04%, #026EBF 61.69%, #037ABF 71.54%, #048EBF 92.8%)',
      circleTitle: 'Preparation of documents',
      title: 'Meeting with client for Business Requirements',
      subtitle:
         'This is where we sit down, grab a cup of coffee and dial in the details.',
      skills: [
         'Analytics',
         'Research',
         'Architecture',
         'Design',
         'Requirement Specification',
      ],
      theme: 'blue',
   },
   {
      color: 'linear-gradient(64.02deg, #257CFC 17.2%, #257CFC 43.97%, #3282F8 57.6%, #5296FA 78.07%, #5296FA 92.8%)',
      circleTitle: 'Development',
      title: 'Engineering/ Development and testings',
      subtitle:
         "Now that we've aligned the details, it's time to get things mapped out and organized.",
      skills: [
         'Prototyping',
         'Integration',
         'Visual Design',
         'Engineering',
         'Automation',
      ],
      theme: 'light_blue',
   },
]

export default function WorkSkills() {
   return (
      <AnimatedContainer className={styles.skills__container}>
         <h1>What we do?</h1>
         <div className={styles.skills}>
            {SKILLS.map((skill) => (
               <SkillCard {...skill} key={skill.theme} />
            ))}
         </div>
      </AnimatedContainer>
   )
}
