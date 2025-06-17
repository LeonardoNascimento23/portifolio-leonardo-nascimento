import Image from 'next/image';
import SearchTrigger from './SearchTrigger';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/LogoLN.png"
        alt="Logo"
        width={200}
        height={200}
        priority
      />
      <h1>LEONARDO NASCIMENTO</h1>
      <div className={styles.cta}>
        <SearchTrigger
          onInfrastructureSelect={() => {
            const servicesSection = document.getElementById('services');
            servicesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWebSelect={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
} 