import React from "react"
import styles from "./hero.module.css"

const Hero = () => {
    return (
        <React.Fragment>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                   <div className={styles.heroText}>
                    <div className={styles.heroTextItem}>
                        <span className={styles.heroTextSpanMin}>+10 años haciendo marcas visibles</span>
                    </div>
                    <div className={styles.heroTextItem}>
                        <span className={styles.heroTextSpan}>Hacemos que <br/>
                            tu marca <br/>
                            <span className={styles.heroTextRed}>grite <br/></span>
                            en la calle</span>
                    </div>
                    <div className={styles.heroTextItem}>
                        <p className={styles.heroTextSpanDown}>RE Design es rotulación y publicidad con trayectoria. Personal capacitado, materiales premium y maquinaria de última tecnología al servicio de tu marca.</p>
                    </div>
                    <div className={styles.heroTextItem}>
                        <div className={styles.buttonSpace}>
                            <a href="#contacto" className={styles.button}>Solicitar Cotización</a>
                            <a href="#servicios" className={styles.button}>Ver servicios</a>
                        </div>
                    </div>
                   </div>
                   <div className={styles.heroLogo}>
                    <img src="/logo_hero.png" alt="Logo" className={styles.logoImage}/>
                   </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero