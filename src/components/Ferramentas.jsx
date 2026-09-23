import Reveal from './Reveal.jsx'
import { STACK_BACKEND, STACK_FRONTEND } from '../data/content.js'

function StackCard({ stack, delay, tag }) {
  return (
    <Reveal as="div" className="stack-card" delay={delay}>
      <div className="stack-card-header">
        <span className="stack-badge">{tag}</span>
        <h3>{stack.title}</h3>
        <p className="stack-lead">{stack.lead}</p>
      </div>
      <ul className="stack-items">
        {stack.items.map((item) => (
          <li key={item.name}>
            <span className="item-name">{item.name}</span>
            <span className="item-desc">{item.desc}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function Ferramentas() {
  return (
    <section id="ferramentas" className="topic-block ferramentas-block">
      <div className="topic-header">
        <Reveal as="span" className="topic-tag">
          02 // FERRAMENTAS
        </Reveal>
        <Reveal as="h2">Como o site é construído</Reveal>
        <Reveal as="p" className="section-intro">
          Tecnologias diferentes cuidam de partes diferentes do site: umas cuidam do que a
          pessoa vê, outras do que acontece &quot;por baixo dos panos&quot; — como guardar
          informações com segurança.
        </Reveal>
      </div>

      <div className="stack-cols">
        <StackCard stack={STACK_BACKEND} delay="0s" tag="Back-End" />
        <StackCard stack={STACK_FRONTEND} delay=".1s" tag="Front-End" />
      </div>
    </section>
  )
}
