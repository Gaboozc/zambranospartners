import { useEffect } from 'react';

const SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

export default function EvaluacionSection() {
  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      document.body.appendChild(s);
    }

    const frame = document.getElementById('zp-assistant-frame');
    if (frame) {
      frame.addEventListener('load', () => {
        navigator.permissions
          ?.query({ name: 'microphone' })
          .catch(() => {});
      });
    }
  }, []);

  return (
    <section id="evaluacion" className="embed-section ux-reveal">
      <div className="embed-section__inner">
        <div className="embed-section__two-col">
          <div className="embed-section__card">
            <h3>Asistente IA</h3>
            <p>Presiona el orbe y habla directamente con nuestra IA.</p>
            <div className="embed-section__orb">
              <iframe
                src="https://iframes.ai/o/1762545750654x333189452739117060?color=132f83&icon="
                allow="microphone"
                style={{ width: '100%', height: '200px', border: 'none' }}
                id="zp-assistant-frame"
                title="Asistente IA Zambrano Partners"
              />
            </div>
            <p className="embed-section__phone-cta">
              O llamanos directamente:{' '}
              <a href="tel:+19548698831">+1 954-869-8831</a>
            </p>
          </div>

          <div className="embed-section__card">
            <h3>Agenda una Cita</h3>
            <p>Selecciona el horario que mejor te funcione.</p>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/c9WUwXb2gcclmBqw2EWM"
              style={{ width: '100%', height: '560px', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="c9WUwXb2gcclmBqw2EWM_1766584382701"
              title="Agenda tu cita"
            />
          </div>
        </div>

        <div className="embed-section__full">
          <h3>Encuesta para que te Llamemos</h3>
          <p>Completa el formulario y un asesor te contactara directamente.</p>
          <div className="embed-section__iframe-box" style={{ height: '1400px' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/WsmrMaKiEnYDz4UFgoB5"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
              id="inline-WsmrMaKiEnYDz4UFgoB5"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="ENCUESTA PARA LLAMAR"
              data-height="1400"
              data-layout-iframe-id="inline-WsmrMaKiEnYDz4UFgoB5"
              data-form-id="WsmrMaKiEnYDz4UFgoB5"
              title="ENCUESTA PARA LLAMAR"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
