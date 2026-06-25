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
                        <p>De la idea al impacto en la calle. <br /> Te acompañamos en cada paso del proceso.</p>
                    </div>
                </div>

                <div className={styles.servicesGrid}>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/diseno.jpeg" alt="Diseño Gráfico" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Diseño Gráfico</h3>
                                <p>Asesoramiento 100% personalizado.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/gigan.jpeg" alt="Gigan" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Gigantografía</h3>
                                <p>Lona, vinil, microperforada y más.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/rotulo.jpeg" alt="Rótulos" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Rótulos</h3>
                                <p>Bastidores, cajas de luz, rótulos 3D.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/neon.jpeg" alt="Neón" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Rótulos neón flex</h3>
                                <p>Iluminación de alto impacto.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/display.jpeg" alt="Display" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Display</h3>
                                <p>Roll Up, stands, backings.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/senaletica.jpeg" alt="Señalética" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Señalética</h3>
                                <p>Sintra, tool, acrílico y vidrio</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/imprenta.jpg" alt="Imprenta" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Imprenta</h3>
                                <p>Tarjetas, volantes, carpetas.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/branding.jpg" alt="Branding Vehicular" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Branding Vehicular</h3>
                                <p>Autos, motos, camiones.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/inflable.jpeg" alt="Inflables" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Inflables</h3>
                                <p>Llamadores, botargas, arcos, carpas</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/carpas.jpeg" alt="Neon" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Carpas y banderines</h3>
                                <p>Material publicitario para eventos.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/ruletas.jpeg" alt="Display" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Ruletas publicitarias</h3>
                                <p>En pvc o en acrílico.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/sublimacion.jpeg" alt="Sublimación" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Sublimación</h3>
                                <p>Tazas, camisetas, llaveros, pulseras, etc.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceCardImg}>
                            <div className={styles.serviceCardOverlay}></div>
                            <img src="/dron.jpeg" alt="Filmación con dron y gimbal" className={styles.serviceCardPhoto} />
                            <div className={styles.serviceCardText}>
                                <h3>Filmación con dron y gimbal</h3>
                                <p>Tomas aéreas profesionales.</p>
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