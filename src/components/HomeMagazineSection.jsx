import { Link } from 'react-router-dom';
import brandLogo from '../assets/zambranopartners-tight.png';

const HOME_MAGAZINE_ITEMS = [
  {
    title: 'Seguro de Salud para su familia',
    excerpt:
      'Coberturas medicas y hospitalarias adaptadas a su presupuesto y etapa de vida.',
    image:
      'https://static.vecteezy.com/system/resources/previews/011/942/756/non_2x/medical-and-health-insurance-protection-happy-family-in-hospital-bed-with-medical-insurance-shield-to-support-medical-surgery-expenses-and-hospital-bill-vector.jpg',
    tag: 'Principal',
    link: '/cotizacion',
  },
  {
    title: 'Seguro de Vida con respaldo real',
    excerpt:
      'Proteccion financiera para quienes mas importan, con asesoria clara y sin letras pequenas.',
    image:
      'https://bruno.com.mx/wp-content/uploads/2021/05/tu-legado-01.png',
    tag: 'Recomendado',
    link: '/cotizacion',
  },
  {
    title: 'Seguro de Viaje para todo destino',
    excerpt:
      'Asistencia internacional, emergencias y apoyo inmediato para viajar con tranquilidad.',
    image:
      'https://i0.wp.com/atiempo.tv/wp-content/uploads/2025/06/IMG_6732.jpeg?fit=678%2C452&ssl=1',
    tag: 'Cobertura global',
    link: '/evaluacion',
  },
];

const EXTRA_SERVICES = [
  { title: 'Seguro de Auto', text: 'Cobertura para danos, responsabilidad civil y asistencia vial.' },
  { title: 'Embarcaciones', text: 'Proteccion para botes y yates con planes adaptados al uso.' },
  { title: 'Seguros Complementarios', text: 'Refuerce su cobertura principal con beneficios adicionales.' },
  { title: 'Seniors', text: 'Opciones especializadas para salud, retiro y tranquilidad familiar.' },
  { title: 'Locales Comerciales', text: 'Proteja su negocio frente a riesgos operativos y patrimoniales.' },
];

const ASSOCIATED_COMPANIES = [
  {
    name: 'VUMI',
    logo: 'https://blog.vumigroup.com/wp-content/uploads/2022/09/cropped-Logo.png',
  },
  {
    name: 'GBG',
    logo: 'https://www.promotoriadeseguros.com.mx/wp-content/uploads/2019/10/GBG-01.png',
  },
  {
    name: 'Bupa',
    logo: 'https://1000marcas.net/wp-content/uploads/2021/06/Bupa-Logo.png',
  },
  {
    name: 'National Life Group',
    logo: 'https://www.nationallife.com/-/media/Images/NationalLife/public/home-page/home-feature/NLG-logo.png',
  },
];

const FEATURED_RAIL = {
  title: 'Asesoria personalizada 24/7',
  excerpt:
    'Nuestro equipo le ayuda a comparar opciones, elegir coberturas y resolver reclamos cuando mas lo necesita.',
  image:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
};

export default function HomeMagazineSection() {
  const [featured, compactA, compactB] = HOME_MAGAZINE_ITEMS;

  return (
    <section id="home" className="home-magazine ux-reveal">
      <div className="home-magazine__inner">
        <header className="home-magazine__masthead">
          <div className="home-magazine__headline">
            <img className="home-magazine__headline-logo" src={brandLogo} alt="Logo de Zambrano Partners" />
            <div className="home-magazine__headline-copy">
              <h1>Su tranquilidad respaldada por aliados globales.</h1>
              <p>
                Explore nuestras recomendaciones principales, compare planes y solicite su
                cotizacion personalizada en minutos.
              </p>
            </div>
          </div>
        </header>

        <div className="home-magazine__grid">
          <article className="home-magazine__card home-magazine__card--featured">
            <img src={featured.image} alt={featured.title} loading="lazy" />
            <div>
              <span>{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
            </div>
          </article>

          <article className="home-magazine__card home-magazine__card--compact">
            <img src={compactA.image} alt={compactA.title} loading="lazy" />
            <div>
              <span>{compactA.tag}</span>
              <h3>{compactA.title}</h3>
              <p>{compactA.excerpt}</p>
            </div>
          </article>

          <article className="home-magazine__card home-magazine__card--compact">
            <img src={compactB.image} alt={compactB.title} loading="lazy" />
            <div>
              <span>{compactB.tag}</span>
              <h3>{compactB.title}</h3>
              <p>{compactB.excerpt}</p>
            </div>
          </article>

          <aside className="home-magazine__rail" aria-label="Asesoria destacada">
            <img src={FEATURED_RAIL.image} alt={FEATURED_RAIL.title} loading="lazy" />
            <div>
              <span>Atencion 24/7</span>
              <h3>{FEATURED_RAIL.title}</h3>
              <p>{FEATURED_RAIL.excerpt}</p>
              <Link to="/evaluacion">Hablar con un asesor</Link>
            </div>
          </aside>
        </div>

        <section className="home-partners" aria-labelledby="empresas-asociadas">
          <header className="home-partners__header">
            <p className="home-partners__eyebrow">EMPRESAS ASOCIADAS</p>
            <h2 id="empresas-asociadas">Trabajamos con aseguradoras de confianza internacional</h2>
          </header>
          <div className="home-partners__logos" role="list" aria-label="Empresas asociadas">
            {ASSOCIATED_COMPANIES.map((company) => (
              <article key={company.name} className="home-partners__logo" role="listitem">
                <img src={company.logo} alt={`Logo de ${company.name}`} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section className="home-services" aria-labelledby="servicios-adicionales">
          <header className="home-services__header">
            <p className="home-services__eyebrow">MAS SERVICIOS</p>
            <h2 id="servicios-adicionales">Coberturas complementarias para cada necesidad</h2>
          </header>

          <div className="home-services__grid">
            {EXTRA_SERVICES.map((service) => (
              <article key={service.title} className="home-services__card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
