'use client';

import { useEffect, useRef } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import styles from './page.module.css';
import { ParallaxSpacer } from './components/ParallaxSpacer';
import TechIcons from './components/TechIcons';
import { ContactForm } from './components/ContactForm';
import { DigitalServiceForm } from './components/DigitalServiceForm';
import { FaLaptopCode, FaGlobe, FaTools, FaCode, FaServer, FaGitAlt, FaFigma, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiPython, SiDjango, SiNodedotjs } from 'react-icons/si';

// Dados estáticos
const projects = [
  {
    id: 1,
    title: 'Portal XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física',
    description: 'Website Institucional do curso de Educação Física da UFGD.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'Netilify'],
    image: 'images/portalseminaredfis.png',
    link: 'https://seminarioedfisufgd.netlify.app/',
    repo: 'https://github.com/LeonardoNascimento23/portal-seminario-edfis'
  }
];

const services = [
  {
    id: 1,
    title: 'Para o seu computador',
    description: 'Ofereço suporte completo em manutenção e otimização de computadores, incluindo:',
    features: [
      'Formatação e instalação de sistemas operacionais (Windows e Linux)',
      'Montagem, upgrade e reparo de hardware',
      'Limpeza e manutenção preventiva',
      'Instalação e configuração de programas',
      'Remoção de vírus e malwares',
      'Otimização de desempenho',
      'Configuração de redes',
      'Atendimento personalizado'
    ],
    icon: <FaLaptopCode size={40} />,
  },
  {
    id: 2,
    title: 'Para o seu negócio',
    description: 'Soluções completas para sua presença digital.',
    features: [
      'Configuração de Blog',
      'Atualização de Website',
      'Landing Page',
      'Sistema Web Personalizado',
      'E-commerce',
      'Site Institucional'
    ],
    icon: <FaGlobe size={40} />,
  }
];

const contactInfo = {
  email: 'leonardovitaldonascimento@gmail.com',
  phone: '+55 (67) 98207-0567',
  location: 'Dourados, MS - Brasil',
  social: {
    linkedin: 'https://www.linkedin.com/in/leonardo-vital-do-nascimento-6b682622a/',
    github: 'https://github.com/LeonardoNascimento23'
  }
};

const parallaxTexts = {
  about: 'FULL STACK DEV',
  projects: 'INOVAÇÃO DIGITAL',
  services: 'SUA REALIZAÇÃO',
  contact: 'VAMOS CRIAR'
};

export default function Home() {
  const sections = [
    { id: 'hero', ref: useRef<HTMLElement>(null) },
    { id: 'about', ref: useRef<HTMLElement>(null) },
    { id: 'projects', ref: useRef<HTMLElement>(null) },
    { id: 'services', ref: useRef<HTMLElement>(null) },
    { id: 'contact', ref: useRef<HTMLElement>(null) }
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ ref }, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const scrollY = window.scrollY;
          const offset = rect.top + scrollY;
          const speed = 0.15;
          const direction = index % 2 === 0 ? 1 : -1;
          
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = (scrollY - offset) * speed * direction;
            const scale = 1 + Math.abs(yPos) * 0.0003;
            const opacity = 1 - Math.abs(yPos) * 0.001;
            
            ref.current.style.transform = `translateY(${yPos}px) scale(${scale})`;
            ref.current.style.opacity = `${Math.max(0.6, opacity)}`;
          } else {
            ref.current.style.transform = 'translateY(0) scale(1)';
            ref.current.style.opacity = '1';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = sections.find(s => s.id === id);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.page}>
      <section ref={sections[0].ref} id="hero" className={styles.hero}>
        <img src="images/LogoLN.png" alt="Logo" />
        <h1>LEONARDO DO NASCIMENTO</h1>
        <p>A razão para alcançar o impensável</p>
        <div className={styles.cta}>
          <Button variant="primary" size="large" onClick={() => scrollToSection('services')}>
            Sou cliente
          </Button>
          <Button variant="outline" size="large" onClick={() => scrollToSection('contact')}>
            Sou empreendedor
          </Button>
        </div>        
      </section>

      <ParallaxSpacer 
        section="about"
        text={parallaxTexts.about}
      />

      <section ref={sections[1].ref} id="about" className={styles.about}>
        <h2>Sobre Mim</h2>
        <p>Conheça mais sobre minha jornada e experiência</p>
        <Card className={styles.bio}>
          <h3>Minha História</h3>
          <p>
            Sou Leonardo do Nascimento, Técnico em Informática para Internet pelo IFMS e atualmente graduando em Sistemas de Informação pela UFGD. Atuo no Exército Brasileiro, onde realizo suporte técnico, manutenção, montagem, formatação de computadores e desenvolvimento Full Stack.
          </p>
          <p>
            No desenvolvimento, trabalho com uma stack diversificada que inclui Front-End com JavaScript, TypeScript, React, Next.js, Tailwind CSS e Bootstrap; Back-End com Python (Django) e Node.js; além de práticas DevOps utilizando Git e GitHub. Também aplico conhecimentos em design e UI/UX com ferramentas como Figma, Photoshop e Illustrator.
          </p>
        </Card>
        <div className={styles.skills}>
          <h2><FaTools size={30} /> Dev Stack para Desenvolvimento Web</h2>
          <p>Essas são as ferramentas e tecnologias que utilizo no meu dia a dia como desenvolvedor Full Stack:</p>
          <div className={styles.skillGrid}>
            <Card>
              <h3><FaCode size={24} /> Front-End</h3>
              <ul>
                <li><SiJavascript size={20} /> JavaScript</li>
                <li><SiTypescript size={20} /> TypeScript</li>
                <li><SiReact size={20} /> React</li>
                <li><SiNextdotjs size={20} /> Next.js</li>
                <li><SiTailwindcss size={20} /> Tailwind CSS</li>
                <li><SiBootstrap size={20} /> Bootstrap</li>
              </ul>
            </Card>
            <Card>
              <h3><FaServer size={24} /> Back-End</h3>
              <ul>
                <li><SiPython size={20} /> Python com Django</li>
                <li><SiNodedotjs size={20} /> Node.js</li>
              </ul>
            </Card>
            <Card>
              <h3><FaGitAlt size={24} /> DevOps</h3>
              <ul>
                <li><FaGitAlt size={20} /> Git</li>
                <li><FaGithub size={20} /> GitHub</li>
              </ul>
            </Card>
            <Card>
              <h3><FaFigma size={24} /> Design e UI/UX</h3>
              <ul>
                <li><FaFigma size={20} /> Figma</li>
                <li><FaTools size={20} /> Photoshop</li>
                <li><FaTools size={20} /> Illustrator</li>
              </ul>
            </Card>
          </div>
        </div>
        <TechIcons />
      </section>

      <ParallaxSpacer 
        section="projects"
        text={parallaxTexts.projects}
      />

      <section ref={sections[2].ref} id="projects" className={styles.projects}>
        <h2>Meus Projetos</h2>
        <p>Conheça alguns dos projetos que desenvolvi</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} className={styles.projectCard}>
              <div className={styles.iframeContainer}>
                <iframe 
                  src={project.link}
                  title={project.title}
                  className={styles.projectIframe}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <Button variant="primary" onClick={() => window.open(project.link, '_blank')}>
                    Ver projeto
                  </Button>
                  <Button variant="outline" onClick={() => window.open(project.repo, '_blank')}>
                    Ver Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <ParallaxSpacer 
        section="services"
        text={parallaxTexts.services}
      />

      <section ref={sections[3].ref} id="services" className={styles.services}>
        <h2>Meus Serviços</h2>
        <p>Conheça as soluções que posso oferecer para seu negócio</p>
        <div className={styles.serviceContent}>
          <div className={styles.digitalService}>
            <h3>Atendimento Digital</h3>
            <p>Responda algumas perguntas rápidas para encontrarmos a melhor solução para você</p>
            <DigitalServiceForm />
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Card key={service.id} className={styles.serviceCard}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSpacer 
        section="contact"
        text={parallaxTexts.contact}
      />

      <section ref={sections[4].ref} id="contact" className={styles.contact}>
        <h2>Entre em Contato</h2>
        <p>Vamos conversar sobre seu projeto</p>
        <div className={styles.content}>
          <Card className={styles.formCard}>
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  );
}
