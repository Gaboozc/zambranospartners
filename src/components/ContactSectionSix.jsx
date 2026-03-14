import { Link } from 'react-router-dom';

const CONTACT_CHANNELS = [
  {
    title: 'Llamadas 24/7',
    value: '+1 (305) 555 0142',
    detail: 'Atencion inmediata para emergencias y orientacion.',
  },
  {
    title: 'Correo',
    value: 'info@zambranopartners.us',
    detail: 'Respuesta de un asesor en menos de 24 horas.',
  },
  {
    title: 'Oficina',
    value: 'Miami, Florida',
    detail: 'Atencion presencial con cita previa.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Nos ayudaron a elegir un plan completo y transparente para toda la familia. El acompanamiento fue excelente.',
    author: 'M. Rodriguez',
  },
  {
    quote:
      'Cuando tuvimos una emergencia, respondieron de inmediato y nos guiaron en cada paso del proceso.',
    author: 'L. Zamora',
  },
];

export default function ContactSectionSix() {
  return (
    <section id="contacto" className="contact-six ux-reveal">
      <div className="contact-six__hero">
        <div className="contact-six__inner">
          <p className="contact-six__eyebrow">CONTACTO</p>
          <h2>Contacto</h2>
          <p>
            Hable con nuestro equipo para recibir una asesoria clara, humana y
            enfocada en su tranquilidad.
          </p>
        </div>
      </div>

      <div className="contact-six__inner contact-six__grid">
        {CONTACT_CHANNELS.map((item) => (
          <article key={item.title} className="contact-six__card">
            <h3>{item.title}</h3>
            <p className="contact-six__value">{item.value}</p>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="contact-six__inner contact-six__content">
        <div className="contact-six__form-wrap">
          <h3>Envienos un mensaje</h3>
          <form className="contact-six__form">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" required />

            <label htmlFor="email">Correo electronico</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="telefono">Telefono</label>
            <input id="telefono" name="telefono" type="tel" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required />

            <button type="submit">Enviar solicitud</button>
          </form>
        </div>

        <div className="contact-six__extra">
          <div className="contact-six__testimonials">
            <h3>Testimonios</h3>
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.author}>
                <p>{item.quote}</p>
                <cite>{item.author}</cite>
              </blockquote>
            ))}
          </div>

          <div className="contact-six__map">
            <h3>Donde estamos</h3>
            <iframe
              title="Mapa de oficina Zambrano Partners"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-80.2505%2C25.7408%2C-80.1708%2C25.8029&layer=mapnik"
            />
          </div>
        </div>
      </div>

      <div className="contact-six__cta">
        <div className="contact-six__inner contact-six__cta-inner">
          <p>Proteja hoy lo que mas le importa.</p>
          <Link to="/cotizacion">Solicitar asesoria</Link>
        </div>
      </div>
    </section>
  );
}
