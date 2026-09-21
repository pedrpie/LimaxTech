import Reveal from './Reveal.jsx'
import { STACK_BACKEND, STACK_FRONTEND } from '../data/content.js'

function StackColumn({ stack, delay }) {
  return (
    <Reveal as="div" className="stack-col" delay={delay}>
      <h3>{stack.title}</h3>
      <p className="stack-lead">{stack.lead}</p>
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
    <section id="ferramentas">
      <Reveal as="p" className="kicker">
        Ferramentas
      </Reveal>
      <Reveal as="h2">Como o site é construído</Reveal>
      <Reveal as="p" className="section-intro">
        Tecnologias diferentes cuidam de partes diferentes do site: umas cuidam do que a
        pessoa vê, outras do que acontece &quot;por baixo dos panos&quot; — como guardar
        informações com segurança.
      </Reveal>

      <div className="stack-cols">
        <StackColumn stack={STACK_BACKEND} delay="0s" />
        <StackColumn stack={STACK_FRONTEND} delay=".1s" />
      </div>
    </section>
  )
}
