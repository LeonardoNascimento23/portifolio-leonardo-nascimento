import { useState, useEffect, useRef } from 'react';
import styles from './DigitalServiceForm.module.css';

interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    nextQuestion?: string;
    action?: 'contact' | 'end';
    reason?: string;
    message?: string;
  }[];
}

const questions: Question[] = [
  {
    id: 'start',
    text: 'Qual serviço você está procurando?',
    options: [
      {
        id: 'repair',
        text: 'Reparo e Montagem de Computadores',
        nextQuestion: 'repair_type',
        message: 'Serviço: Reparo e Montagem de Computadores'
      },
      {
        id: 'webdev',
        text: 'Desenvolvimento Web',
        nextQuestion: 'webdev_type',
        message: 'Serviço: Desenvolvimento Web'
      },
      {
        id: 'other',
        text: 'Outros',
        action: 'contact',
        reason: 'Outros',
        message: 'Serviço: Outros'
      }
    ]
  },
  {
    id: 'repair_type',
    text: 'Qual tipo de serviço de computador você precisa?',
    options: [
      {
        id: 'hardware',
        text: 'Problemas de Hardware',
        nextQuestion: 'hardware_issue',
        message: 'Tipo: Problemas de Hardware'
      },
      {
        id: 'software',
        text: 'Problemas de Software',
        nextQuestion: 'software_issue',
        message: 'Tipo: Problemas de Software'
      },
      {
        id: 'build',
        text: 'Montagem de Computador',
        nextQuestion: 'build_type',
        message: 'Tipo: Montagem de Computador'
      }
    ]
  },
  {
    id: 'hardware_issue',
    text: 'Qual problema de hardware você está enfrentando?',
    options: [
      {
        id: 'not_turning_on',
        text: 'Computador não liga',
        action: 'contact',
        reason: 'Reparo de Hardware - Computador não liga',
        message: 'Problema: Computador não liga'
      },
      {
        id: 'overheating',
        text: 'Superaquecimento',
        action: 'contact',
        reason: 'Reparo de Hardware - Superaquecimento',
        message: 'Problema: Superaquecimento'
      },
      {
        id: 'noise',
        text: 'Barulhos estranhos',
        action: 'contact',
        reason: 'Reparo de Hardware - Barulhos estranhos',
        message: 'Problema: Barulhos estranhos'
      }
    ]
  },
  {
    id: 'software_issue',
    text: 'Qual problema de software você está enfrentando?',
    options: [
      {
        id: 'slow',
        text: 'Computador lento',
        action: 'contact',
        reason: 'Reparo de Software - Computador lento',
        message: 'Problema: Computador lento'
      },
      {
        id: 'virus',
        text: 'Vírus/Malware',
        action: 'contact',
        reason: 'Reparo de Software - Vírus/Malware',
        message: 'Problema: Vírus/Malware'
      },
      {
        id: 'os',
        text: 'Problemas com Sistema Operacional',
        action: 'contact',
        reason: 'Reparo de Software - Problemas com Sistema Operacional',
        message: 'Problema: Problemas com Sistema Operacional'
      }
    ]
  },
  {
    id: 'build_type',
    text: 'Que tipo de computador você quer montar?',
    options: [
      {
        id: 'gaming',
        text: 'Computador para Jogos',
        action: 'contact',
        reason: 'Montagem de Computador - PC Gamer',
        message: 'Tipo de PC: Computador para Jogos'
      },
      {
        id: 'work',
        text: 'Computador para Trabalho',
        action: 'contact',
        reason: 'Montagem de Computador - PC para Trabalho',
        message: 'Tipo de PC: Computador para Trabalho'
      },
      {
        id: 'budget',
        text: 'Computador Econômico',
        action: 'contact',
        reason: 'Montagem de Computador - PC Econômico',
        message: 'Tipo de PC: Computador Econômico'
      }
    ]
  },
  {
    id: 'webdev_type',
    text: 'Que tipo de desenvolvimento web você precisa?',
    options: [
      {
        id: 'website',
        text: 'Website',
        nextQuestion: 'website_type',
        message: 'Tipo: Website'
      },
      {
        id: 'ecommerce',
        text: 'E-commerce',
        nextQuestion: 'ecommerce_type',
        message: 'Tipo: E-commerce'
      },
      {
        id: 'webapp',
        text: 'Aplicação Web',
        nextQuestion: 'webapp_type',
        message: 'Tipo: Aplicação Web'
      }
    ]
  },
  {
    id: 'website_type',
    text: 'Que tipo de website você precisa?',
    options: [
      {
        id: 'landing',
        text: 'Landing Page',
        action: 'contact',
        reason: 'Desenvolvimento Web - Landing Page',
        message: 'Tipo de Website: Landing Page'
      },
      {
        id: 'institutional',
        text: 'Site Institucional',
        action: 'contact',
        reason: 'Desenvolvimento Web - Site Institucional',
        message: 'Tipo de Website: Site Institucional'
      },
      {
        id: 'blog',
        text: 'Blog',
        action: 'contact',
        reason: 'Desenvolvimento Web - Blog',
        message: 'Tipo de Website: Blog'
      }
    ]
  },
  {
    id: 'ecommerce_type',
    text: 'Que tipo de e-commerce você precisa?',
    options: [
      {
        id: 'shopify',
        text: 'Loja Virtual Completa',
        action: 'contact',
        reason: 'Desenvolvimento Web - E-commerce Completo',
        message: 'Tipo de E-commerce: Loja Virtual Completa'
      },
      {
        id: 'marketplace',
        text: 'Marketplace',
        action: 'contact',
        reason: 'Desenvolvimento Web - Marketplace',
        message: 'Tipo de E-commerce: Marketplace'
      },
      {
        id: 'simple',
        text: 'Loja Virtual Simples',
        action: 'contact',
        reason: 'Desenvolvimento Web - Loja Virtual Simples',
        message: 'Tipo de E-commerce: Loja Virtual Simples'
      }
    ]
  },
  {
    id: 'webapp_type',
    text: 'Que tipo de aplicação web você precisa?',
    options: [
      {
        id: 'saas',
        text: 'SaaS (Software as a Service)',
        action: 'contact',
        reason: 'Desenvolvimento Web - Aplicação SaaS',
        message: 'Tipo de Aplicação: SaaS (Software as a Service)'
      },
      {
        id: 'dashboard',
        text: 'Dashboard/Admin',
        action: 'contact',
        reason: 'Desenvolvimento Web - Dashboard/Admin',
        message: 'Tipo de Aplicação: Dashboard/Admin'
      },
      {
        id: 'custom',
        text: 'Aplicação Personalizada',
        action: 'contact',
        reason: 'Desenvolvimento Web - Aplicação Personalizada',
        message: 'Tipo de Aplicação: Aplicação Personalizada'
      }
    ]
  }
];

export function DigitalServiceForm() {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    // Primeiro, vamos garantir que o formulário de contato esteja visível
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Rola até a seção de contato
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Após o scroll, vamos focar no formulário
      setTimeout(() => {
        const contactForm = document.querySelector('#contact-form textarea');
        if (contactForm instanceof HTMLElement) {
          contactForm.focus();
        }
      }, 500);
    }
  };

  const handleAnswer = (option: Question['options'][0]) => {
    const newAnswers = [...answers, option.message || option.text];
    setAnswers(newAnswers);

    if (option.action === 'contact') {
      const message = `Olá! Estou interessado(a) no seguinte serviço:\n\n${newAnswers.join('\n')}\n\nPor favor, me envie mais informações sobre este serviço.`;
      
      // Ativa o estado de loading
      setIsLoading(true);
      
      // Simula um pequeno delay para mostrar a animação
      setTimeout(() => {
        // Salva as informações no localStorage
        localStorage.setItem('contactMessage', message);
        localStorage.setItem('contactReason', option.reason || '');
        
        // Redireciona para a seção de contato
        window.location.href = '/#contact';
        
        // Força o recarregamento da página após um pequeno delay
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }, 1500);
    } else if (option.nextQuestion) {
      const nextQuestion = questions.find(q => q.id === option.nextQuestion);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      }
    }
  };

  const handleReset = () => {
    setCurrentQuestion(questions[0]);
    setAnswers([]);
    setShowContactForm(false);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.loadingContainer}>
            <p className={styles.loadingText}>Carregando sua resposta...</p>
            <div className={styles.loadingSpinner}></div>
          </div>
        </div>
      </div>
    );
  }

  if (showContactForm) {
    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Formulário de Contato</h2>
          <p>Baseado nas suas respostas, preparamos um formulário de contato personalizado.</p>
          <div className={styles.answers}>
            <h3>Suas respostas:</h3>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
          <div id="contact-form" ref={contactFormRef}></div>
          <button onClick={handleReset} className={styles.resetButton}>
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>{currentQuestion.text}</h2>
        <div className={styles.options}>
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option)}
              className={styles.optionButton}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 