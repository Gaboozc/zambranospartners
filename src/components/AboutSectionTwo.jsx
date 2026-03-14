import { Link } from 'react-router-dom';

const STATS = [
  { value: '15+', label: 'Anos de experiencia' },
  { value: '2,000+', label: 'Familias protegidas' },
  { value: '10+', label: 'Aseguradoras aliadas' },
  { value: '24/7', label: 'Atencion disponible' },
];

const VALUES = [
  {
    title: 'Compromiso real',
    text: 'Nos involucramos con cada cliente como si fuera nuestra familia. Tu tranquilidad es nuestra meta, no solo una venta.',
  },
  {
    title: 'Transparencia total',
    text: 'Sin letras pequenas ni sorpresas. Te explicamos cada cobertura con claridad para que decidas con confianza.',
  },
  {
    title: 'Acompanamiento continuo',
    text: 'Estamos contigo antes, durante y despues de cualquier siniestro. No desaparecemos despues de la primera llamada.',
  },
];

export default function AboutSectionTwo() {
  return (
    <section id="nosotros" className="nosotros-page ux-reveal">

      {/* ── Hero ── */}
      <header className="nosotros-page__hero">
        <div className="nosotros-page__inner">
          <p className="nosotros-page__eyebrow">NOSOTROS</p>
          <h1 className="nosotros-page__title">
            La agencia que pone<br />
            <strong>tu familia primero</strong>
          </h1>
          <p className="nosotros-page__lead">
            Mas de 15 anos ayudando a familias latinas en Florida a vivir con
            seguridad y plena tranquilidad. Conocenos.
          </p>
        </div>
      </header>

      {/* ── Stats bar ── */}
      <div className="nosotros-page__stats-bar">
        <div className="nosotros-page__inner nosotros-page__stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="nosotros-page__stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Values ── */}
      <div className="nosotros-page__values">
        <div className="nosotros-page__inner">
          <h2 className="nosotros-page__section-title">Nuestros valores</h2>
          <div className="nosotros-page__values-grid">
            {VALUES.map((v) => (
              <article key={v.title} className="nosotros-page__value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── Story: text + photo ── */}
      <div className="nosotros-page__story">
        <div className="nosotros-page__inner nosotros-page__story-grid">
          <div className="nosotros-page__story-text">
            <p className="nosotros-page__eyebrow" style={{ marginBottom: '14px' }}>
              POR QUE ELEGIRNOS
            </p>
            <h2>
              Por que escoger a<br />
              <strong>Zambrano Partners?</strong>
            </h2>
            <p>
              Porque estamos comprometidos con la seguridad de nuestros
              clientes, nos involucramos con cada familia, ofreciendo un
              servicio completo. Ofrecemos atencion 24/7 porque sabemos que
              las emergencias pueden presentarse cualquier dia, a cualquier hora.
            </p>
            <p>
              Contamos con planes que se adaptan a sus necesidades y su bolsillo
              y hacemos de la seguridad de su familia nuestra prioridad. Ademas,
              tenemos una relacion consolidada con cada uno de nuestros
              proveedores, lo que se traduce en beneficios directos para
              nuestros clientes.
            </p>
            <Link to="/cotizacion" className="nosotros-page__cta-btn">
              Solicitar mi cotizacion
            </Link>
          </div>

          <figure className="nosotros-page__story-photo">
            <img
              src="https://www.zambranopartners.us/wp-content/uploads/2021/08/image-nosotros-escoger.jpg"
              alt="Equipo de Zambrano Partners en asesoria"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

    </section>
  );
}
