'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Desmarca o checkbox para fechar o menu
      const checkbox = document.getElementById('menuToggle') as HTMLInputElement;
      if (checkbox) checkbox.checked = false;
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/LogoLN.png" alt="Logo" />
        </div>

        <div className={styles.menuToggle}>
          <input type="checkbox" id="menuToggle" />
          <span></span>
          <span></span>
          <span></span>
          <ul className={styles.menuItem}>
            <li><button onClick={() => scrollToSection('about')}>Sobre</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projetos</button></li>
            <li><button onClick={() => scrollToSection('services')}>Serviços</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 