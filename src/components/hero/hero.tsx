import React from "react"
import styles from "./hero.module.css"
import { FaFacebook, FaTiktok, FaWhatsapp, FaTelegram, FaLinkedin } from "react-icons/fa"

const Hero = () => {
    return (
        <React.Fragment>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                   <div className={styles.heroText}>
                    <div className={styles.heroTextItem}>
                        <span className={styles.heroTextSpanMin}>+12 años haciendo marcas visibles</span>
                    </div>
                    <div className={styles.heroTextItem}>
                        <span className={styles.heroTextSpan}>Hacemos que <br/>
                            tu marca <br/>
                            <span className={styles.heroTextRed}>destaque <br/></span>
                            en todo lado</span>
                    </div>
                    <div className={styles.heroTextItem}>
                        <p className={styles.heroTextSpanDown}>R2A es rotulación y publicidad con trayectoria. Personal capacitado, materiales premium y maquinaria de última tecnología al servicio de tu marca.</p>
                    </div>
                    <div className={styles.heroTextItem}>
                        <div className={styles.buttonSpace}>
                            <a href="#contacto" className={styles.button1}>Solicitar Cotización</a>
                            <a href="#servicios" className={styles.button2}>Ver servicios</a>
                        </div>
                    </div>
                   </div>
                   <div className={styles.heroLogo}>
                    <img src="/logo_hero.png" alt="Logo" className={styles.logoImage}/>
                    <div className={styles.socialNetworks}>
                        <a href="https://www.facebook.com/redesignarg" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className={styles.socialIcon} />
                        </a>
                        <a href="https://www.tiktok.com/@redesignarg" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className={styles.socialIcon} />
                        </a>
                        {/* <FaInstagram className={styles.socialIcon} /> */}
                        <a href="https://wa.me/593962725180?text=Hola%20R2A%20Publicidad%20quiero%20cotizar%20uno%20de%20sus%20servicios" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className={styles.socialIcon} />
                        </a>
                        {/* <a href="https://t.me/redesignarg" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className={styles.socialIcon} />
                        </a> */}
                        {/* <a href="https://www.linkedin.com/company/redesignarg" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.socialIcon} />
                        </a> */}
                    </div>
                   </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero