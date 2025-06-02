import { useEffect, useRef, useState } from 'react';

export function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const elementBottom = rect.bottom + scrollY;
        const viewportHeight = window.innerHeight;
        
        if (scrollY + viewportHeight > elementTop && scrollY < elementBottom) {
          const progress = (scrollY + viewportHeight - elementTop) / (elementBottom - elementTop);
          const targetY = progress * 200; // Aumentado para 200px de movimento
          
          // Suavização da transição
          rafId = requestAnimationFrame(() => {
            setY(prevY => prevY + (targetY - prevY) * 0.1);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { ref, y };
} 