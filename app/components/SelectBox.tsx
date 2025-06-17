import { SelectHTMLAttributes, useState } from 'react';
import styles from './SelectBox.module.css';
import TypingText from './TypingText';

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder: string;
}

export default function SelectBox({
  options,
  placeholder,
  className,
  onChange,
  ...props
}: SelectBoxProps) {
  const [isTyping, setIsTyping] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    setIsTyping(false);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.selectContainer}>
      {isTyping && !selectedValue && (
        <div className={styles.typingContainer}>
          <span className={styles.icon}>🔍︎</span>
          <TypingText text="Como posso te ajudar hoje?" />
        </div>
      )}
      <select
        className={`${styles.select} ${className || ''}`}
        value={selectedValue}
        onChange={handleChange}
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} 