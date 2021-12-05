import React from 'react'
import styles from './style.module.css'

const Text=({optionOne,optionTwo,headding}) => {
    return (
        <div className={styles.box}>
            <p className={styles.headding}> {headding} </p>
      
            <div>
                <label>{optionOne}</label>
           
             </div>            
                
            <div>
             <label>{optionTwo} </label>
             
             </div>
        
    </div>
    )
}

export default Text