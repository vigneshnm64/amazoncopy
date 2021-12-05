import React from 'react'
import styles from './style.module.css'
import Left from './Left'
import Right from './Right'

const Body=() => {
    return (
        <div className={styles.bodydiv}>
            <section className={styles.left}>
            <Left />
           </section>

           <section className={styles.right}>
           <Right />
           </section>
     </div>
    )
}

export default Body 
