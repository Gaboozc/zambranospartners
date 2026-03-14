import CotizacionSection from '../components/CotizacionSection';
import LeadConversionSection from '../components/LeadConversionSection';

export default function CotizacionPage() {
  return (
    <>
      <header className="inner-page-hero">
        <div className="inner-page-hero__inner">
          <p className="inner-page-hero__eyebrow">COTIZACION</p>
          <h1 className="inner-page-hero__title">
            Cotiza tu seguro <strong>en minutos</strong>
          </h1>
          <p className="inner-page-hero__lead">
            Completa el formulario y recibe una propuesta personalizada sin
            compromiso, en menos de 24 horas.
          </p>
        </div>
      </header>
      <section className="fixed-layout">
        <div className="fixed-layout__content">
          <CotizacionSection />
          <LeadConversionSection />
        </div>
      </section>
    </>
  );
}
