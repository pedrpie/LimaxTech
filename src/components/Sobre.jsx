import Reveal from './Reveal.jsx'
import { VALUES } from '../data/content.js'

// Caminhos de ícone por id de valor — mantidos aqui (fora de content.js)
// porque são detalhes de apresentação, não conteúdo.
const VALUE_ICON_PATHS = {
  comunicacao: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1 0-17 8.38 8.38 0 0 1 8.5 8.5Z" />
      <path d="M8 12h8M8 16h5" />
    </>
  ),
  codigo: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v5" />
    </>
  ),
  entrega: (
    <>
      <path d="M12 2 3 7l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
}

export default function Sobre() {
  return (
    <section id="sobre" className="topic-block sobre-block">
      <div className="topic-header">
        <Reveal as="span" className="topic-tag">
          01 // SOBRE
        </Reveal>
        <Reveal as="h2">A Limax Tech</Reveal>
      </div>

      <div className="sobre-grid">
        <Reveal className="sobre-story">
          <p>
            <strong>Limax Tech</strong> é o nome por trás do trabalho de Pedro Costa, natural
            de Natal, Rio Grande do Norte, dedicado a aprender a construir sites do começo ao fim.
          </p>
          <p>
            Gosto de entender um problema por inteiro: como a informação é guardada, como ela
            chega até a página e como fica fácil de encontrar para quem visita o site.
          </p>
          <p>
            Cada projeto é tratado como se fosse único — porque é. Um site institucional, uma
            landing page ou um sistema simples pedem decisões diferentes, e essas decisões são
            conversadas com quem contrata, não impostas de cima para baixo.
          </p>
        </Reveal>

        <Reveal as="div" className="values-grid" delay=".1s">
          {VALUES.map((value) => (
            <div key={value.id} className="value-card">
              <div className="v-icon-wrapper">
                <svg
                  className="v-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {VALUE_ICON_PATHS[value.id]}
                </svg>
              </div>
              <div className="v-content">
                <div className="v-title">{value.title}</div>
                <div className="v-desc">{value.description}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
