'use client';

import { useEffect } from 'react';

interface ParallaxProviderProps {
  children: React.ReactNode;
}

export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallaxContent');
      parallaxElements.forEach((element) => {
        const offset = window.scrollY * 0.5;
        (element as HTMLElement).style.setProperty('--scroll-offset', `${offset}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>{children}</>;
} 