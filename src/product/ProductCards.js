import React from 'react'
import styles from'./style.module.css'

const ProductCards=({image,text,price,rating}) => {
    return (
        <div className={styles.card}>
           <div className={styles.image}>
            <img className={styles.just} src={image}></img> 
           </div>
            
            <div className={styles.details}>
               <div className={styles.MainText}>
                  <h4>{text}</h4>
               </div>

               <div className={styles.rating}>
                  {rating}
               </div>

               <div className={styles.price}>
                <p className={styles.number}>{price}</p>
               </div>
           
           </div>

        </div>
    )
}

export default ProductCards
