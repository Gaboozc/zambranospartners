import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const PRODUCT_OPTIONS = [
  'Seguro de Salud',
  'Seguro de Vida',
  'Seguro de Auto',
  'Seguro de Viaje',
  'Seguro Comercial',
];

function estimateMonthlyPremium({ age, coverage, deductible, smoker }) {
  const ageBase = Math.max(22, Number(age) || 30);
  const base = Number(coverage) * 0.0017;
  const ageFactor = 1 + (ageBase - 30) * 0.012;
  const smokerFactor = smoker ? 1.28 : 1;
  const deductibleFactor = deductible === 'alto' ? 0.85 : deductible === 'medio' ? 1 : 1.16;
  const result = Math.max(28, base * ageFactor * smokerFactor * deductibleFactor);
  return Math.round(result * 100) / 100;
}

export default function LeadConversionSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    product: PRODUCT_OPTIONS[0],
    fullName: '',
    email: '',
    phone: '',
  });

  const [calculatorData, setCalculatorData] = useState({
    age: 34,
    coverage: 100000,
    deductible: 'medio',
    smoker: false,
  });

  const estimatedPremium = useMemo(
    () => estimateMonthlyPremium(calculatorData),
    [calculatorData]
  );

  const updateFormField = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateCalculatorField = (event) => {
    const { name, value, type, checked } = event.target;
    setCalculatorData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMultistepSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setStep(1);
    setFormData((prev) => ({ ...prev, fullName: '', email: '', phone: '' }));
  };

  const canContinueStepOne = Boolean(formData.product);
  const canSubmit =
    formData.fullName.trim().length >= 3 &&
    formData.email.trim().includes('@') &&
    formData.phone.trim().length >= 7;

  return (
    <section className="lead-tools ux-reveal" aria-labelledby="lead-tools-title">
      <div className="lead-tools__inner">
        <header className="lead-tools__header">
          <p className="lead-tools__eyebrow">COTIZA RAPIDO</p>
          <h2 id="lead-tools-title">Cotiza en 2 minutos. Sin compromisos.</h2>
        </header>

        <div className="lead-tools__grid">
          <article className="lead-tools__card" aria-labelledby="multistep-title">
            <h3 id="multistep-title">Que seguro necesitas?</h3>
            <p>
              Cuentanos que buscas y recibe una propuesta personalizada en menos de 24 horas.
            </p>

            <form className="lead-form" onSubmit={handleMultistepSubmit}>
              <p className="lead-form__step">Paso {step} de 2</p>

              {step === 1 && (
                <fieldset>
                  <legend>Que seguro buscas?</legend>
                  <div className="lead-form__choices" role="radiogroup" aria-label="Tipo de seguro">
                    {PRODUCT_OPTIONS.map((product) => (
                      <label key={product}>
                        <input
                          type="radio"
                          name="product"
                          value={product}
                          checked={formData.product === product}
                          onChange={updateFormField}
                        />
                        <span>{product}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <div className="lead-form__fields">
                  <label htmlFor="lead-fullName">Nombre completo</label>
                  <input
                    id="lead-fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={updateFormField}
                    required
                  />

                  <label htmlFor="lead-email">Correo</label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={updateFormField}
                    required
                  />

                  <label htmlFor="lead-phone">Telefono</label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={updateFormField}
                    required
                  />
                </div>
              )}

              <div className="lead-form__actions">
                {step === 2 && (
                  <button type="button" onClick={() => setStep(1)}>
                    Volver
                  </button>
                )}

                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!canContinueStepOne}
                  >
                    Continuar
                  </button>
                ) : (
                  <button type="submit" disabled={!canSubmit}>
                    Enviar solicitud
                  </button>
                )}
              </div>
            </form>

            {submitted && (
              <p className="lead-form__success" role="status">
                Gracias. Recibimos tu solicitud y un asesor te contactara pronto.
              </p>
            )}
          </article>

          <article className="lead-tools__card" aria-labelledby="calculator-title">
            <h3 id="calculator-title">Estima tu mensualidad</h3>
            <p>Un estimado rapido para que conozcas cuanto invertir en tu proteccion.</p>

            <form className="premium-calculator" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="calc-age">Edad</label>
              <input
                id="calc-age"
                name="age"
                type="number"
                min="18"
                max="80"
                value={calculatorData.age}
                onChange={updateCalculatorField}
              />

              <label htmlFor="calc-coverage">Cobertura estimada (USD)</label>
              <input
                id="calc-coverage"
                name="coverage"
                type="number"
                min="25000"
                step="5000"
                value={calculatorData.coverage}
                onChange={updateCalculatorField}
              />

              <label htmlFor="calc-deductible">Nivel de deducible</label>
              <select
                id="calc-deductible"
                name="deductible"
                value={calculatorData.deductible}
                onChange={updateCalculatorField}
              >
                <option value="alto">Alto</option>
                <option value="medio">Medio</option>
                <option value="bajo">Bajo</option>
              </select>

              <label className="premium-calculator__check" htmlFor="calc-smoker">
                <input
                  id="calc-smoker"
                  name="smoker"
                  type="checkbox"
                  checked={calculatorData.smoker}
                  onChange={updateCalculatorField}
                />
                Perfil con riesgo adicional
              </label>
            </form>

            <div className="premium-calculator__result" aria-live="polite">
              <p>Prima mensual estimada</p>
              <strong>${estimatedPremium.toLocaleString('en-US')} / mes</strong>
            </div>

            <div className="lead-tools__chatbot">
              <p>Dudas inmediatas? Habla con nuestro asistente IA 24/7.</p>
              <Link to="/evaluacion">Abrir asistente</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
