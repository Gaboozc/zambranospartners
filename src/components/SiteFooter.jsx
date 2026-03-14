import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/cotizacion', label: 'Cotizacion' },
  { to: '/evaluacion', label: 'Evaluacion' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <div className="site-footer__inner">
        <div className="site-footer__brand-col">
          <h2 id="site-footer-title">Zambrano Partners</h2>
          <p>
            Proteccion inteligente para su salud, familia y patrimonio.
            Asesoria humana con atencion 24/7.
          </p>
        </div>

        <nav className="site-footer__links" aria-label="Enlaces del pie de pagina">
          <h3>Navegacion</h3>
          <ul>
            {QUICK_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h3>Contacto</h3>
          <p>+1 954-869-8831</p>
          <p>info@zambranopartners.us</p>
          <p>Miami, Florida</p>
        </div>
      </div>

      <div className="site-footer__legal">
        <p>© {year} Zambrano Partners. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
