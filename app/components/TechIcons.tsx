import { useParallax } from '../hooks/useParallax';
import styles from './TechIcons.module.css';

const techIcons = [
  { name: 'React', icon: 'icons/react.svg', offset: 0.3 },
  { name: 'Next.js', icon: 'icons/nextjs.svg', offset: 0.4 },
  { name: 'TypeScript', icon: 'icons/typescript.svg', offset: 0.5 },
  { name: 'Node.js', icon: 'icons/nodejs.svg', offset: 0.6 },
  { name: 'Tailwind', icon: 'icons/tailwind.svg', offset: 0.7 },
  { name: 'Javascript', icon: 'icons/javascript.svg', offset: 0.8 },
  { name: 'CSS', icon: 'icons/css.svg', offset: 0.9 },
  { name: 'HTML', icon: 'icons/html.svg', offset: 1.0 },
  { name: 'Python', icon: 'icons/python.svg', offset: 1.1 },
  { name: 'Git', icon: 'icons/git.svg', offset: 1.2 },
  { name: 'Github', icon: 'icons/github.svg', offset: 1.3 },
];

export default function TechIcons() {
  const { ref, y } = useParallax();

  return (
    <div ref={ref} className={styles.container}>
      {techIcons.map((tech, index) => (
        <div
          key={tech.name}
          className={styles.iconWrapper}
          style={{
            transform: `translateY(${y * tech.offset}px)`,
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className={styles.icon}
            title={tech.name}
          />
        </div>
      ))}
    </div>
  );
} 