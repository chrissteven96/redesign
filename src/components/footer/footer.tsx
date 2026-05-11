import React from "react"
import styles from "./footer.module.css"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
    return (
        <React.Fragment>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <img src="/logo_hero.png" alt="Logo" className={styles.logo} />
                        <p>Rotulación y publicidad con +10 años de trayectoria en Quito - Ecuador.</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Contacto</h3>
                        <p> <FaPhone /> 0982221615 / 0962725180</p>
                        <p> <FaEnvelope /> halepublicidad@outlook.com</p>
                        <p> <FaEnvelope /> re_design@outlook.es</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Ubicación</h3>
                        <p> <FaMapMarkerAlt /> Galo Plaza Lasso y Río Bermejo (CARAPUNGO) Quito, Ecuador</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.copyright}>

                    <p>© 2026 RE Design. Todos los derechos reservados</p>
                    <p>Hecho con pasión en Quito 🇪🇨</p>
                </div>
            </div>
        </footer>
        </React.Fragment>
    )
}

export default Footer