import { useState, FormEvent, useEffect } from 'react';
import styles from './ContactForm.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const contactReasons = [
  {
    id: 'repair',
    label: 'Reparo e Montagem de Computadores',
    message: `Olá!

Meu nome é {name} e gostaria de solicitar um serviço de reparo ou montagem de computador.

Você pode me contatar por e-mail em {email} ou pelo telefone {phone}.

{mensagem}

Aguardo seu retorno para combinarmos os detalhes.

Obrigado!`
  },
  {
    id: 'webdev',
    label: 'Desenvolvimento Web',
    message: `Olá!

Meu nome é {name} e gostaria de conversar sobre um projeto de desenvolvimento web.

Você pode me contatar por e-mail em {email} ou pelo telefone {phone}.

{mensagem}

Aguardo seu retorno para discutirmos mais detalhes sobre o projeto.

Obrigado!`
  },
  {
    id: 'other',
    label: 'Outros',
    message: `Olá!

Meu nome é {name} e gostaria de conversar sobre outro assunto.

Você pode me contatar por e-mail em {email} ou pelo telefone {phone}.

{mensagem}

Aguardo seu retorno para conversarmos melhor.

Obrigado!`
  }
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const savedMessage = localStorage.getItem('contactMessage');
    
    if (savedMessage) {
      setFormData(prev => ({
        ...prev,
        message: savedMessage
      }));
      localStorage.removeItem('contactMessage');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `Olá!

Meu nome é ${formData.name} e gostaria de conversar sobre um serviço.

Você pode me contatar por e-mail em ${formData.email} ou pelo telefone ${formData.phone}.

${formData.message}

Aguardo seu retorno para conversarmos melhor.

Obrigado!`;
    
    const whatsappMessage = encodeURIComponent(message);

    const whatsappNumber = '5567982070567';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleQuestionnaire = () => {
    window.location.href = '/#services';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formFields}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Digite sua mensagem aqui..."
            rows={5}
            required
          />
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>
          Enviar <FaWhatsapp className={styles.whatsappIcon} />
        </button>
        <button 
          type="button" 
          onClick={handleQuestionnaire}
          className={styles.questionnaireButton}
        >
          Responder Questionário
        </button>
      </div>
    </form>
  );
} 