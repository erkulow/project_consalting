import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Tabs.module.css'

import { TabItem } from './TabItem'
import { DUMMY_TABS, DUMMY_TECHNOLOGIES } from '../../utils/constants/general'
import { AnimatedContainer } from '../UI/AnimatedContainer'

export const Tabs = () => {
   // list of technologies icons
   const [technologies, setTechnologies] = useState(DUMMY_TECHNOLOGIES)

   const [selectedTab, setSelectedTab] = useState('All')

   const setClassForTabName = (name) => {
      return `${styles.tabName} ${name === selectedTab ? styles.active : ''}`
   }

   const changeTabItemsHandler = (name) => {
      setSelectedTab(name)
      setTechnologies(
         name === 'All'
            ? DUMMY_TECHNOLOGIES
            : DUMMY_TECHNOLOGIES.filter((tech) => {
                 if (Array.isArray(tech.direction)) {
                    return tech.direction.filter((dir) => dir === name).join()
                 }
                 return tech.direction === name
              })
      )
   }
   return (
      <AnimatedContainer>
         <div className={styles.tabsContainer}>
            {DUMMY_TABS.map((tabName) => {
               return (
                  <div
                     className={setClassForTabName(tabName)}
                     key={tabName}
                     onClick={() => changeTabItemsHandler(tabName)}
                     role="main"
                  >
                     {tabName}
                  </div>
               )
            })}
         </div>
         <AnimatePresence>
            <motion.div
               key={selectedTab}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
               className={styles.tabItemsContainer}
            >
               {technologies.map((tech) => (
                  <TabItem key={tech.key} name={tech.key} title={tech.title} />
               ))}
            </motion.div>
         </AnimatePresence>
      </AnimatedContainer>
   )
}
