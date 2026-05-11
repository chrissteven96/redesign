import React from 'react'
import styles from './contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <React.Fragment>
        <div className={styles.contact}>
            <div className={styles.contactContent}>
                <div className={styles.contactText}>
                    <h1>¿Listo para <br /> ser <span>visto</span>?</h1>
                    <p>Cotiza tu proyecto con nosotros. Te respondemos en menos de 24 horas.</p>
                </div>

            <div className={styles.buttonSpace}>
                <a href="" className={styles.button1}> <FaPhone /> 0987654321</a>
                <a href="" className={styles.button2}> <FaEnvelope /> Escribenos</a>

            </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Contact;