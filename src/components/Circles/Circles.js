import React from 'react'
// import { AnimatedContainer } from '../AnimatedContainer/AnimatedContainer'
import styles from './Circles.module.css'

const CIRCLES = [
   '#1094F1',
   '#3BD38A',
   '#FF9D43',
   '#F85664',
   '#00D1EA',
   '#CE3DF3',
]

export default function Circles() {
   return (
      <div className={styles.container}>
         <ul className={styles.circles__container}>
            {CIRCLES.map((color) => (
               <li style={{ backgroundColor: color }} key={color} />
            ))}
         </ul>
      </div>
   )
}
