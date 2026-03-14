import { useEffect, useState } from 'react';
import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CotizacionPage from './pages/CotizacionPage';
import EvaluacionPage from './pages/EvaluacionPage';
import NosotrosPage from './pages/NosotrosPage';
import BlogPage from './pages/BlogPage';
import ContactoPage from './pages/ContactoPage';
import SiteFooter from './components/SiteFooter';
import brandLogo from './assets/zambranopartners-tight.png';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsNavScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.ux-reveal'));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <main className="site-shell">
      <ScrollToTop />
      <a className="skip-link" href="#page-content">
        Saltar al contenido principal
      </a>
      <header className={`site-nav ${isNavScrolled ? 'is-scrolled' : ''}`}>
        <div className="site-nav__brand">
          <img className="site-nav__brand-logo" src={brandLogo} alt="Logo de Zambrano Partners" />
        </div>
        <nav aria-label="Navegacion principal">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/cotizacion">Cotizacion</NavLink>
          <NavLink to="/evaluacion">Evaluacion</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </header>

      <div className="site-content" id="page-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cotizacion" element={<CotizacionPage />} />
          <Route path="/evaluacion" element={<EvaluacionPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <SiteFooter />
    </main>
  );
}
