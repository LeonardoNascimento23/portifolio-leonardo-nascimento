'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      
      <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/services">Serviços</Link>
        <Link href="/store">Loja</Link>
        <Link href="/contact">Contato</Link>
        <Link href="/blog">Blog</Link>
      </div>

      <button 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
} 