import React from 'react'
import styles from './contact.module.css'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
        <React.Fragment>
        <div className={styles.contact}>
            <div className={styles.contactContent}>
                <div className={styles.contactText}>
                    <h1>Publicidad estratégica <br /> <span>a tu alcance</span></h1>
                    <p>Cotiza tu proyecto con nosotros. Te respondemos en menos de 24 horas.</p>
                </div>

            <div className={styles.buttonSpace}>
                <a href="https://wa.me/593962725180?text=Hola%20R2A%20Publicidad%20quiero%20cotizar%20uno%20de%20sus%20servicios" target="_blank" rel="noopener noreferrer" className={styles.button1}> <FaWhatsapp size={30} /> 096 272 5180</a>
                <a href="mailto:r2apublicidad@hotmail.com" target="_blank" rel="noopener noreferrer" className={styles.button2}> <FaEnvelope size={20} /> Escríbenos</a>

            </div>

            <div className={styles.qr}>
                <img src="/r2a_qr.png" alt="QR" />
            </div>
                
            </div>
        </div>
        </React.Fragment>
    );
};

export default Contact;