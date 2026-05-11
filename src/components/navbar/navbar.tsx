import React from 'react'
import styles from './navbar.module.css'
import { FaArrowRight } from 'react-icons/fa';

const NavBar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Altura aproximada del navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <React.Fragment>
            <div className={styles.navbarContainer}>
                <nav className={styles.navbar}>
                    {/*logo*/}
                    <div className={styles.logo}>
                        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                            <img src="/log_redesign.png" alt="Logo" className={styles.logoImage}/>
                        </a>
                    </div>
                    {/*Menu*/}
                    <div className={styles.menu}>
                        
                        <a href="#servicios" className={styles.navlink} onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a>
                        <a href="#nosotros" className={styles.navlink} onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>Nosotros</a>
                        <a href="#contacto" className={styles.navlink} onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Contacto</a>
                    </div>
                    {/* Buton */}
                    <div className={styles.button}>
                        <a href="#contacto" className={styles.textButton} onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Cotizar <FaArrowRight /> </a>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default NavBar