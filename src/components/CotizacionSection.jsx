import { useEffect } from 'react';

const SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

export default function CotizacionSection() {
  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="cotizacion" className="embed-section ux-reveal">
      <div className="embed-section__inner">
        <div className="embed-section__iframe-box" style={{ height: '922px' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/gUi4usQPeU3cTzeFSasn"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-gUi4usQPeU3cTzeFSasn"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="ENCUESTA PARA COTIZAR"
            data-height="922"
            data-layout-iframe-id="inline-gUi4usQPeU3cTzeFSasn"
            data-form-id="gUi4usQPeU3cTzeFSasn"
            title="ENCUESTA PARA COTIZAR"
          />
        </div>
      </div>
    </section>
  );
}
