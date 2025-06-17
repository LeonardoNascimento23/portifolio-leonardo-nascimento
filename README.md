# Portfólio Profissional - Leonardo do Nascimento

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

Leonardo do Nascimento - leonardovitaldonascimento@gmail.com

LinkedIn: [Leonardo do Nascimento](https://www.linkedin.com/in/leonardo-vital-do-nascimento-6b682622a/)
GitHub: [LeonardoNascimento23](https://github.com/LeonardoNascimento23)

## Guia de Comandos Git

### Comandos Básicos

```bash
# Verificar status do repositório
git status

# Adicionar arquivos ao stage
git add <arquivo>          # Adiciona arquivo específico
git add .                  # Adiciona todos os arquivos modificados
git add app/components/*   # Adiciona todos os arquivos de um diretório

# Criar commit
git commit -m "mensagem"   # Cria commit com mensagem
git commit -am "mensagem"  # Adiciona e commita em um único comando

# Enviar alterações
git push origin main      # Envia alterações para o repositório remoto
git pull origin main      # Atualiza repositório local com alterações remotas

# Verificar atualizações
git fetch origin          # Busca atualizações do repositório remoto
```

### Boas Práticas

1. **Commits**
   - Use mensagens descritivas
   - Siga o padrão: `tipo: descrição`
   - Tipos comuns: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

2. **Branches**
   - `main`: código em produção
   - `develop`: desenvolvimento
   - `feature/*`: novas funcionalidades
   - `hotfix/*`: correções urgentes

3. **Arquivos Não Rastreados (Untracked)**
   - Sempre verifique com `git status`
   - Adicione arquivos importantes ao Git
   - Use `.gitignore` para arquivos desnecessários

### Estrutura do Projeto

```
portifolio-leonardo-nascimento/
├── app/
│   ├── components/       # Componentes React
│   ├── page.tsx         # Página principal
│   └── page.module.css  # Estilos da página
├── public/              # Arquivos estáticos
└── README.md           # Este arquivo
```

### Dicas Importantes

1. **Antes de Começar**
   - Sempre faça `git pull` antes de começar a trabalhar
   - Verifique se está na branch correta

2. **Durante o Desenvolvimento**
   - Faça commits frequentes e pequenos
   - Mantenha mensagens claras e descritivas
   - Verifique o status regularmente

3. **Antes de Enviar**
   - Teste suas alterações
   - Verifique se não há conflitos
   - Revise o código

4. **Arquivos Sensíveis**
   - Nunca comite senhas ou chaves
   - Use variáveis de ambiente
   - Mantenha o `.gitignore` atualizado

### Comandos Úteis Adicionais

```bash
# Ver histórico de commits
git log

# Desfazer alterações
git checkout -- <arquivo>  # Descarta alterações não commitadas
git reset HEAD <arquivo>   # Remove do stage

# Criar e mudar de branch
git branch <nome>          # Cria nova branch
git checkout <nome>        # Muda para a branch
git checkout -b <nome>     # Cria e muda para nova branch

# Mesclar branches
git merge <branch>         # Mescla branch atual com a especificada
```

### Resolução de Problemas Comuns

1. **Conflitos**
   - Identifique os arquivos com conflito
   - Resolva manualmente
   - Adicione e comite as alterações

2. **Commits Errados**
   - Use `git reset` para desfazer
   - Cuidado com `git push --force`

3. **Arquivos Não Rastreados**
   - Verifique se devem ser versionados
   - Adicione ao `.gitignore` se necessário
   - Use `git add` para arquivos importantes

### Links Úteis

- [Documentação Git](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
