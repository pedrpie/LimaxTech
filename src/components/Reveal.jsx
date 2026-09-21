import { useInView } from '../hooks/useInView.js'

/**
 * Envolve qualquer elemento e o faz aparecer (fade + leve deslize) quando
 * entra na tela ao rolar a página. `delay` aceita qualquer valor válido de
 * transition-delay em CSS (ex.: "0.1s"), útil para escalonar itens de um grupo.
 */
export default function Reveal({ as: Tag = 'div', delay = '0s', className = '', children, ...rest }) {
  const { ref, isVisible } = useInView()
  const classes = ['reveal', isVisible ? 'is-visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} style={{ '--d': delay }} {...rest}>
      {children}
    </Tag>
  )
}
