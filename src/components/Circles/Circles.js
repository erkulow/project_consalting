import React from 'react'
import styles from './Circles.module.css'
import { AnimatedContainer } from '../UI/AnimatedContainer'

const CIRCLES = [
   '#f49820',
   '#f49820',
   '#f49820',
   '#f49820',
   '#f49820',
   '#f49820',
]

export default function Circles() {
   return (
      <AnimatedContainer className={styles.container}>
         <ul className={styles.circles__container}>
            {CIRCLES.map((color) => (
               <li style={{ backgroundColor: color }} key={color} />
            ))}
         </ul>
      </AnimatedContainer>
   )
}
