'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const whatsappNumber = '5567982070567';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      className={`${styles.floatingButton} ${isVisible ? styles.visible : ''}`}
      onClick={handleClick}
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </button>
  );
} 