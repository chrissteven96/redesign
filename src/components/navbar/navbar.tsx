import React, { useEffect } from 'react'
import styles from './navbar.module.css'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';


const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect( () => {
        const handleResize =() => {
            if(window.innerWidth < 1024) {
                setIsMenuOpen(false);
            }
        };

    const handleScroll = () => {
            const offset = window.scrollY;
        if (offset > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        const mobileMenu = document.querySelector(`.${styles.mobileMenu}`);
        const hamburgerButton = document.querySelector(`.${styles.hamburgerMenu}`);
        
        if (isMenuOpen && mobileMenu && hamburgerButton && 
            !mobileMenu.contains(target) && !hamburgerButton.contains(target)) {
            setIsMenuOpen(false);
        }
    };

 window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <div className={`${styles.navbarContainer} ${isScrolled ? styles.scrolled : ''}`}>
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

                    {/* Hamburger Button - Mobile */}
                    <button 
                        className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : ''}`} 
                        onClick={toggleMenu}
                        aria-label="Menú de navegación"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button> 
                    {/* Buton */}
                    <div className={styles.button}>
                        <a href="#contacto" className={styles.textButton} onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Cotizar <FaArrowRight /> </a>
                    </div>


                </nav>
            </div>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <a href="#hero" className={styles.hamburgerLink} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); closeMenu(); }}>
                    Inicio
                </a>
                <a href="#servicios" className={styles.hamburgerLink} onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); closeMenu(); }}>
                    Servicios <FaAngleRight />
                </a>
                <a href="#nosotros" className={styles.hamburgerLink} onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); closeMenu(); }}>
                    Nosotros <FaAngleRight />
                </a>
                <a href="#contacto" className={styles.hamburgerLink} onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); closeMenu(); }}>
                    Contacto <FaAngleRight />
                </a>
            </div>

        </React.Fragment>
    )
}

export default NavBar