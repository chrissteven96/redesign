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
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/diseño1.png" alt="Diseño Gráfico" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Diseño Gráfico</h3>
                                <p>Asesoramiento 100% personalizado.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/gigan1.png" alt="Gigan" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Gigantografía</h3>
                                <p>Lona, vinil, microperforada y más.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/rotulo.png" alt="Icon 3" />
                            <div className={styles.serviceCardText}>
                                <h3>Rótulos</h3>
                                <p>Bastidores, cajas de luz, rótulos 3D.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Services