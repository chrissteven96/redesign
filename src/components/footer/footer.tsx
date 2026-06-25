import React from "react"
import styles from "./footer.module.css"
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
    return (
        <React.Fragment>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <img src="/logo_hero.png" alt="Logo" className={styles.logo} />
                        <p>Rotulación y publicidad con +12 años de trayectoria en Quito - Ecuador.</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Contacto</h3>
                        <p> <FaWhatsapp size={20} /> 096 272 5180</p>
                        <p> <FaEnvelope size={20} /> r2apublicidad@hotmail.com</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Ubicación</h3>
                        <p> <FaMapMarkerAlt size={30} /> Carapungo: Rumiñahui & Sagaloa Nº 15-222 (Una cuadra detrás del Pollo Gus)</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.copyright}>

                    <p>© 2026 R2A Publicidad. Todos los derechos reservados</p>
                    <p>Hecho con pasión en Quito 🇪🇨</p>
                </div>
            </div>
        </footer>
        </React.Fragment>
    )
}

export default Footer