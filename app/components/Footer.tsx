import styles from './Footer.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Informações de Contato</h3>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FaEnvelope size={24} />
              <div>
                <h4>Email</h4>
                <p>leonardovitaldonascimento@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaPhone size={24} />
              <div>
                <h4>Telefone</h4>
                <p>+55 (67) 98207-0567</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt size={24} />
              <div>
                <h4>Localização</h4>
                <p>Dourados, MS - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Redes Sociais</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/leonardo-vital-do-nascimento-6b682622a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/LeonardoNascimento23" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Links Rápidos</h3>
          <nav className={styles.quickLinks}>
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="#services">Serviços</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Leonardo do Nascimento. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
} 