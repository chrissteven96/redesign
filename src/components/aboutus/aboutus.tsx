import React from 'react'

import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <React.Fragment>
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsContent}>
                <div className={styles.textContent}>
                    <h1>Más de una década<br />haciendo <span>publicidad</span></h1>
                    <p><span>R2A</span> nació con un objetivo claro: brindarles verdaderas soluciones publicitarias a nuestros clientes, mediante trabajos ágiles y de calidad.
                    <br /> <br />
                    Contamos con personal capacitado dispuesto a resolver todas sus inquietudes, materiales de calidad y maquinaria de última tecnología.</p>
                </div>
                <div className={styles.gridContent}>
                    <div className={styles.gridItem}><span>10+</span> <br />años de trayectoria</div>
                    <div className={styles.gridItem}><span>13</span> <br />servicios integrales</div>
                    <div className={styles.gridItem}><span>100%</span> <br />asesoría personalizada</div>
                    <div className={styles.gridItem}><span>1</span> <br />solo lugar para todo</div>

                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default AboutUs