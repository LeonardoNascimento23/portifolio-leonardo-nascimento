import { useEffect, useState } from 'react';
import styles from './TypingText.module.css';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={styles.typingText}>
      {displayText}
      <span className={styles.cursor}>|</span>
    </span>
  );
} 