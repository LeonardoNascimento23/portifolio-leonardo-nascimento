import Card from '../components/Card';
import Button from '../components/Button';
import styles from './page.module.css';

const posts = [
  {
    id: 1,
    title: 'Como começar com Next.js',
    excerpt: 'Um guia completo para iniciantes que querem aprender Next.js e criar aplicações web modernas.',
    date: '2024-03-15',
    category: 'Desenvolvimento Web',
    readTime: '5 min',
    image: '/blog/nextjs.jpg',
  },
  {
    id: 2,
    title: 'Melhores práticas de UI/UX',
    excerpt: 'Dicas e truques para criar interfaces de usuário intuitivas e experiências memoráveis.',
    date: '2024-03-10',
    category: 'Design',
    readTime: '8 min',
    image: '/blog/uiux.jpg',
  },
  {
    id: 3,
    title: 'TypeScript para iniciantes',
    excerpt: 'Aprenda os conceitos básicos de TypeScript e como ele pode melhorar seu código JavaScript.',
    date: '2024-03-05',
    category: 'Desenvolvimento Web',
    readTime: '6 min',
    image: '/blog/typescript.jpg',
  },
];

export default function Blog() {
  return (
    <div className={styles.blog}>
      <section className={styles.header}>
        <h1>Blog</h1>
        <p>Artigos e tutoriais sobre desenvolvimento web, design e tecnologia</p>
      </section>

      <div className={styles.content}>
        <section className={styles.featured}>
          <Card className={styles.featuredPost}>
            <div className={styles.imageContainer}>
              <img src="/blog/featured.jpg" alt="Post em destaque" />
            </div>
            <div className={styles.postContent}>
              <div className={styles.meta}>
                <span className={styles.category}>Destaque</span>
                <span className={styles.date}>15 de Março, 2024</span>
              </div>
              <h2>O futuro do desenvolvimento web em 2024</h2>
              <p>
                Uma análise profunda das tendências e tecnologias que estão
                moldando o futuro do desenvolvimento web.
              </p>
              <Button variant="primary">Ler mais</Button>
            </div>
          </Card>
        </section>

        <section className={styles.posts}>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Card key={post.id} className={styles.postCard}>
                <div className={styles.imageContainer}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.footer}>
                    <span className={styles.readTime}>{post.readTime}</span>
                    <Button variant="outline">Ler mais</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 