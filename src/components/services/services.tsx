import React from "react"
import styles from "./services.module.css"

const Services = () => {
    return (
        <React.Fragment>
        <div className={styles.services}>
            <div className={styles.servicesContent}>
                <div className={styles.servicesText}>
                    <div className={styles.servicestextLeft}>
                        <span>Todo lo que tu <br /> marca necesita</span>
                    </div>
                    <div className={styles.servicesTextRight}>
                        <p>De la idea al impacto en la calle. Te acompañamos en cada paso del proceso.</p>
                    </div>
                </div>

                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <img src="/diseño1.png" alt="Diseño Gráfico" className={styles.serviceCardPhoto} />
                        </div>
                        <div className={styles.serviceCardText}>
                            <h3>Diseño Gráfico</h3>
                            <p>Asesoramiento 100% personalizado</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <img src="/icons/icon2.png" alt="Icon 2" />
                        </div>
                        <div className={styles.serviceCardText}>
                            <h3>Service 2</h3>
                            <p>Description 2</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <img src="/icons/icon3.png" alt="Icon 3" />
                        </div>
                        <div className={styles.serviceCardText}>
                            <h3>Service 3</h3>
                            <p>Description 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Services