import { useEffect, useRef, useState } from 'react';
import styles from './ParallaxSection.module.css';

interface ParallaxSectionProps {
  children: React.ReactNode;
  type: 'black' | 'white';
  backgroundImage?: string;
}

export default function ParallaxSection({ children, type, backgroundImage }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && contentRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        contentRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className={`${styles.section} ${styles[`section-${type}`]} ${isVisible ? styles.visible : ''}`} 
      ref={containerRef}
    >
      {backgroundImage && (
        <div className={styles.parallaxContainer}>
          <div 
            className={styles.parallaxContent}
            ref={contentRef}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
      )}
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
} 