import styles from './TabItem.module.css'

export const TabItem = ({ title }) => {
   return (
      <div className={styles.tabItem}>
         <p>{title}</p>
      </div>
   )
}
