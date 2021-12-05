    import React from 'react'
    import styles from './style.module.css'
    import { FaBars } from 'react-icons/fa';

    const Navigation =() => {
        return (
            <div className="amazon">
                <div className={styles.icons}> 
                    <div className={styles.bar}>
                        <FaBars />
                        <p>All</p>
                    </div>
                    <div className={styles.list}>
                        
                        <ul className={styles.menu}>
                            <li className={styles.mobail}>mobile</li>
                            <li className={styles.customer}>coustmer</li>  
                            <li className={styles.electronic}>electronics</li> 
                            <li className={styles.homedeals}>homedeals</li> 
                            <li className={styles.fassion}>fassion</li> 
                            <li className={styles.men}>men </li>
                            <li className={styles.women}>women</li> 
                            <li className={styles.kids}>kids</li> 
                            <li className={styles.gossary}>gossary</li>  
                        </ul>
                    </div>
                </div>
        
            </div>
        )
    }

    export default Navigation
