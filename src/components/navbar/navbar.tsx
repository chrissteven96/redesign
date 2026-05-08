import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';



const NavBar = () => {
    return (
        <React.Fragment>
            <div className={styles.navbarContainer}>
                <nav className={styles.navbar}>
                    {/*logo*/}
                    <div className={styles.logo}>
                        <a href="/">
                            <img src="/log_redesign.png" alt="Logo" className={styles.logoImage}/>
                        </a>
                    </div>
                    {/*Menu*/}
                    <div className={styles.menu}>
                        
                        <NavLink to="/services" className={styles.navlink}>Servicios</NavLink>
                        <NavLink to="/about" className={styles.navlink}>Nosotros</NavLink>
                        <NavLink to="/contact" className={styles.navlink}>Contacto</NavLink>
                    </div>
                    {/* Buton */}
                    <div className={styles.button}>
                        <a href="" className={styles.textButton}>Cotizar <FaArrowRight /> </a>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default NavBar