import Reveal from './Reveal.jsx'
import { CONTACT } from '../data/content.js'

export default function Contato() {
  return (
    <section id="contato">
      <Reveal as="p" className="kicker">
        Contato
      </Reveal>

      <div className="contato-grid">
        <Reveal className="contato">
          <h2>Vamos conversar sobre o seu projeto.</h2>
          <p>Aberto a oportunidades, projetos e trocas sobre desenvolvimento web.</p>
          <a className="contact-link" href={"https://mail.google.com/mail/?view=cm&fs=1&to=pedrolcosta360@gmail.com"} target='_blank'>
            {CONTACT.email}
          </a>
          <div className="contact-meta">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal as="div" className="contact-card" delay=".1s">
          <div className="c-title">Antes de escrever</div>
          <ul>
            <li>— Conte um pouco sobre o seu negócio ou ideia.</li>
            <li>— Diga se já tem conteúdo (textos, fotos) ou se precisa de ajuda com isso também.</li>
            <li>— Comente se há um prazo em mente.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
