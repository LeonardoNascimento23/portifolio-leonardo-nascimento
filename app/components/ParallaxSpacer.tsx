import { useEffect, useRef, useState } from 'react';
import styles from './ParallaxSpacer.module.css';

interface ParallaxSpacerProps {
  section: string;
  text?: string;
}

export function ParallaxSpacer({ section, text }: ParallaxSpacerProps) {
  const spacerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            setIsVisible(true);
          } else {
            entry.target.classList.remove(styles.visible);
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (spacerRef.current) {
      observer.observe(spacerRef.current);
    }

    return () => {
      if (spacerRef.current) {
        observer.unobserve(spacerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={spacerRef}
      className={styles.spacer} 
      data-section={section}
    >
      {text && (
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${isVisible ? styles.typing : ''}`}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
}