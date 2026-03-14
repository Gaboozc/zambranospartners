import { Link } from 'react-router-dom';

const POSTS = [
  {
    title: 'Como elegir una cobertura familiar sin pagar de mas',
    date: '12 Enero, 2024',
    excerpt:
      'Conozca los criterios clave para comparar planes y proteger a su familia con una decision clara y segura.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '5 recomendaciones para actuar en una emergencia medica',
    date: '28 Febrero, 2024',
    excerpt:
      'Un protocolo simple para reaccionar con rapidez, reducir riesgos y comunicarse de forma efectiva con su aseguradora.',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Seguros internacionales: lo que debe revisar antes de viajar',
    date: '15 Marzo, 2024',
    excerpt:
      'Antes de su proximo viaje, confirme coberturas, exclusiones y canales de asistencia para evitar sorpresas.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  },
];

const RECENT_POSTS = POSTS.map((post) => post.title);

export default function BlogSectionFive() {
  return (
    <section id="blog" className="blog-five ux-reveal">
      <div className="blog-five__inner">
        <header className="blog-five__header">
          <p className="blog-five__eyebrow">BLOG & NOTICIAS</p>
          <h2 className="blog-five__title">Blog</h2>
          <p className="blog-five__lead">
            Noticias, guias y recomendaciones practicas para tomar mejores
            decisiones sobre seguridad y proteccion familiar.
          </p>
        </header>

        <div className="blog-five__layout">
          <div className="blog-five__posts">
            {POSTS.map((post) => (
              <article key={post.title} className="blog-five__post-card">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="blog-five__post-body">
                  <p className="blog-five__post-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to="/contacto">Leer mas</Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog-five__sidebar" aria-label="Contenido lateral del blog">
            <div className="blog-five__widget">
              <h3>Buscar</h3>
              <form>
                <label htmlFor="blog-search" className="blog-five__sr-only">
                  Buscar en el blog
                </label>
                <input
                  id="blog-search"
                  type="search"
                  placeholder="Buscar articulo"
                />
              </form>
            </div>

            <div className="blog-five__widget">
              <h3>Publicaciones recientes</h3>
              <ul>
                {RECENT_POSTS.map((title) => (
                  <li key={title}>
                    <Link to="/contacto">{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
