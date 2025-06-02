import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID do EmailJS
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Leonardo do Nascimento',
          to_email: 'leonardovitaldonascimento@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key do EmailJS
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Mensagem enviada com sucesso!'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Erro ao enviar mensagem. Tente novamente.'
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
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
        <label htmlFor="subject">Assunto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Assunto da mensagem"
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
          placeholder="Sua mensagem"
          rows={5}
          required
        />
      </div>

      {status.message && (
        <div className={`${styles.status} ${status.success ? styles.success : status.error ? styles.error : ''}`}>
          {status.message}
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary" 
        size="large"
        disabled={status.loading}
      >
        {status.loading ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
} 