import { useState, useEffect } from 'react';
import styles from './SearchTrigger.module.css';
import TypingText from './TypingText';

interface SearchTriggerProps {
  onInfrastructureSelect: () => void;
  onWebSelect: () => void;
}

export default function SearchTrigger({ onInfrastructureSelect, onWebSelect }: SearchTriggerProps) {
  const [isTyping, setIsTyping] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'infrastructure' | 'web' | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    setIsExpanded(true);
    setIsTyping(false);
  };

  const handleOptionSelect = (option: 'infrastructure' | 'web') => {
    setSelectedOption(option);
    setIsExpanded(false);
    if (option === 'infrastructure') {
      onInfrastructureSelect();
    } else {
      onWebSelect();
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.optionButton} ${isExpanded ? styles.show : ''}`}
        onClick={() => handleOptionSelect('infrastructure')}
      >
        <span className={styles.optionIcon}>💻</span>
        <div className={styles.optionContent}>
          <h3>Problemas de infraestrutura e/ou equipamentos</h3>
        </div>
      </button>

      <div className={styles.searchContainer} onClick={handleClick}>
        {isTyping && !selectedOption && (
          <div className={styles.typingContainer}>
            <span className={styles.icon}>🔍︎</span>
            <TypingText text="Como posso te ajudar hoje?" />
          </div>
        )}
        {!isTyping && !selectedOption && (
          <div className={styles.typingContainer}>
            <span className={styles.icon}>{isMobile ? '↓' : '⟷'}</span>
            <TypingText text="Vamos criar soluções para você" />
          </div>
        )}
        {selectedOption && (
          <div className={styles.selectedOption}>
            <span className={styles.icon}>🔍︎</span>
            <span>
              {selectedOption === 'infrastructure'
                ? 'Tenho problemas de infraestrutura e/ou equipamentos'
                : 'Tenho uma idéia para lançar no mercado web'}
            </span>
          </div>
        )}
      </div>

      <button
        className={`${styles.optionButton} ${isExpanded ? styles.show : ''}`}
        onClick={() => handleOptionSelect('web')}
      >
        <span className={styles.optionIcon}>🌐</span>
        <div className={styles.optionContent}>
          <h3>Tenho uma idéia para lançar no mercado web</h3>
        </div>
      </button>
    </div>
  );
} 