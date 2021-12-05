import React from 'react'
import styles from './style.module.css'

const Checkbox=({headding, optionOne,optionTwo}) => {
    return (
        <div className={styles.box}>
            <p className={styles.headding}> {headding} </p>
      
            <div>
                <input type="checkbox" ></input>
                <label>{optionOne}</label>
           
             </div>            
                
            <div>
             <input type="checkbox" ></input>
             <label>{optionTwo} </label>
             
             </div>
        
    </div>
    )

}

export default Checkbox 
