# Portfólio Profissional - Leonardo Nascimento

## 📋 Sobre o Projeto

Este é um portfólio profissional desenvolvido com Next.js 15.3.3, apresentando uma experiência moderna e interativa. O site foi construído com foco em performance, acessibilidade e design responsivo.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.3.3**: Framework React com suporte a SSR e otimizações automáticas
- **TypeScript**: Para tipagem estática e melhor desenvolvimento
- **CSS Modules**: Para estilização modular e escopo local
- **EmailJS**: Para funcionalidade de envio de emails
- **React Hooks**: Para gerenciamento de estado e efeitos
- **Intersection Observer API**: Para animações baseadas em scroll

## 🎨 Estrutura do Projeto

```
project-portifolio-curriculum/
├── app/
│   ├── components/
│   │   ├── BackgroundSVG.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ParallaxSpacer.tsx
│   │   └── TechIcons.tsx
│   ├── page.tsx
│   └── layout.tsx
├── public/
│   ├── icons/
│   └── images/
└── package.json
```

## 🛠️ Componentes Principais

### 1. ParallaxSpacer
Componente responsável pelo efeito parallax e textos animados entre as seções.

**Funcionalidades:**
- Efeito parallax suave durante o scroll
- Animações de texto com efeito de digitação
- Gradientes dinâmicos para transições suaves
- Sistema de visibilidade baseado em Intersection Observer

**Estilização:**
- Fonte Audiowide para textos de impacto
- Animações CSS personalizadas
- Gradientes para efeitos de profundidade
- Responsividade em diferentes tamanhos de tela

### 2. ContactForm
Formulário de contato com integração ao EmailJS.

**Funcionalidades:**
- Validação de campos em tempo real
- Feedback visual durante o envio
- Integração com EmailJS para envio de emails
- Mensagens de sucesso/erro personalizadas

**Estilização:**
- Campos com fundo escuro e texto claro
- Efeitos de foco e hover
- Design responsivo
- Feedback visual para interações

### 3. TechIcons
Exibição de ícones de tecnologias com efeito parallax.

**Funcionalidades:**
- Grid responsivo de ícones
- Animações de flutuação
- Efeito parallax no scroll
- Filtros de cor para consistência visual

### 4. BackgroundSVG
Componente de fundo animado com ondas SVG.

**Funcionalidades:**
- Animações de ondas suaves
- Cores dinâmicas baseadas no tema
- Responsividade em diferentes resoluções
- Performance otimizada

## 🎯 Seções do Site

### 1. Hero
- Logo animado
- Título principal
- Botões de call-to-action
- Background dinâmico

### 2. Sobre
- Biografia profissional
- Stack tecnológica
- Grid de habilidades
- Ícones de tecnologias

### 3. Projetos
- Cards de projetos
- Imagens e descrições
- Links para repositórios
- Tags de tecnologias

### 4. Serviços
- Cards de serviços
- Lista de recursos
- Ícones ilustrativos
- Descrições detalhadas

### 5. Contato
- Formulário de contato
- Informações de contato
- Links para redes sociais
- Feedback de envio

## 🎨 Sistema de Design

### Cores
- Verde Principal: `#4D6A2A`
- Verde Escuro: `#2a3a1a`
- Branco: `#ffffff`
- Preto: `#000000`

### Tipografia
- Títulos: Audiowide
- Corpo: Sistema

### Espaçamento
- Base: 1rem
- Gaps: 1.5rem
- Padding: 0.75rem

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Execute o projeto:
```bash
npm run dev
```

## 📱 Responsividade

O site é totalmente responsivo, com breakpoints específicos:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

Otimizações implementadas:
- Lazy loading de imagens
- Componentes otimizados
- Animações CSS eficientes
- Bundle size reduzido

## 🔒 Segurança

- Validação de formulários
- Proteção contra spam
- Sanitização de inputs
- HTTPS obrigatório

## 📈 SEO

- Meta tags otimizadas
- Sitemap.xml
- robots.txt
- Schema.org markup

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Leonardo Nascimento - leonardovitaldonascimento@gmail.com

LinkedIn: [Leonardo Nascimento](https://www.linkedin.com/in/leonardo-vital-do-nascimento-6b682622a/)
GitHub: [LeonardoNascimento23](https://github.com/LeonardoNascimento23)
