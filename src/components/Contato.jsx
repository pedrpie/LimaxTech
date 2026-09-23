import Reveal from './Reveal.jsx'
import { CONTACT } from '../data/content.js'

export default function Contato() {
  return (
    <section id="contato" className="topic-block contato-block">
      <div className="topic-header">
        <Reveal as="span" className="topic-tag">
          03 // CONTATO
        </Reveal>
      </div>

      <div className="contato-grid">
        <Reveal className="contato">
          <h2>Vamos conversar sobre o seu projeto.</h2>
          <p>Aberto a oportunidades, projetos e trocas sobre desenvolvimento web.</p>
          
          <div className="contact-cta-box">
            <span className="contact-label">E-mail para contato direto:</span>
            <a
              className="contact-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pedrolcosta360@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{CONTACT.email}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="contact-meta">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal as="div" className="contact-card" delay=".1s">
          <div className="c-title">Antes de escrever</div>
          <ul>
            <li>
              <span className="bullet-dot" />
              <span>Conte um pouco sobre o seu negócio ou ideia.</span>
            </li>
            <li>
              <span className="bullet-dot" />
              <span>Diga se já tem conteúdo (textos, fotos) ou se precisa de ajuda com isso também.</span>
            </li>
            <li>
              <span className="bullet-dot" />
              <span>Comente se há um prazo em mente.</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
