import EvaluacionSection from '../components/EvaluacionSection';

export default function EvaluacionPage() {
  return (
    <>
      <header className="inner-page-hero">
        <div className="inner-page-hero__inner">
          <p className="inner-page-hero__eyebrow">EVALUACION</p>
          <h1 className="inner-page-hero__title">
            Habla con nuestra <strong>asistente IA</strong>
          </h1>
          <p className="inner-page-hero__lead">
            Agenda una cita, habla por voz con nuestra IA o deja tus datos
            y un asesor te llama a la brevedad.
          </p>
        </div>
      </header>
      <section className="fixed-layout">
        <div className="fixed-layout__content">
          <EvaluacionSection />
        </div>
      </section>
    </>
  );
}
