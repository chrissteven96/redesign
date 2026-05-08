import React from "react"
import styles from "./hero.module.css"

const Hero = () => {
    return (
        <React.Fragment>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                   <div className={styles.heroText}>
                    <h1>Hero</h1>
                   </div>
                   <div className={styles.heroLogo}>
                    <img src="/log_redesign.png" alt="Logo" className={styles.logoImage}/>
                   </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero