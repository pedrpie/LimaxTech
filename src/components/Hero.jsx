import Terminal from './Terminal.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { TAGLINE, TERMINAL_LINES, HERO_FACTS } from '../data/content.js'

export default function Hero() {
  const { displayedText, isDone } = useTypewriter(TAGLINE, { startDelay: 300 })

  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-grid">
        <div>
          <span className="badge">
            <span className="pulse" aria-hidden="true" /> Disponível para novos projetos
          </span>

          <h1>Limax Tech</h1>

          <p className="eyebrow" aria-label={TAGLINE}>
            <span aria-hidden="true">{displayedText}</span>
            <span className={`type-cursor${isDone ? ' done' : ''}`} aria-hidden="true" />
          </p>

          <p className="lede">
            Ajudo pessoas e pequenos negócios a colocar uma ideia no ar: um site simples,
            rápido e fácil de usar, do primeiro rascunho até o dia em que ele fica pronto.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contato">
              Falar com a Limax Tech
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/pedrpie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver GitHub
            </a>
          </div>

          <div className="hero-facts">
            {HERO_FACTS.map((fact) => (
              <div key={fact.id}>
                <div className="fact-title">{fact.title}</div>
                <div className="fact-desc">{fact.description}</div>
              </div>
            ))}
          </div>
        </div>

        <Terminal lines={TERMINAL_LINES} />
      </div>
    </section>
  )
}
