import { useEffect, useState } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Digita um texto caractere a caractere, uma única vez quando o
 * componente monta (por exemplo, ao recarregar a página).
 */
export function useTypewriter(text, { startDelay = 0, minSpeed = 32, maxSpeed = 70 } = {}) {
  const reduced = prefersReducedMotion()
  const [displayedText, setDisplayedText] = useState(reduced ? text : '')
  const [isDone, setIsDone] = useState(reduced)

  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    let index = 0
    let timeoutId

    const typeNextChar = () => {
      index += 1
      setDisplayedText(text.slice(0, index))

      if (index < text.length) {
        const delay = minSpeed + Math.random() * (maxSpeed - minSpeed)
        timeoutId = setTimeout(typeNextChar, delay)
      } else {
        setIsDone(true)
      }
    }

    timeoutId = setTimeout(typeNextChar, startDelay)
    return () => clearTimeout(timeoutId)
  }, [text, startDelay, minSpeed, maxSpeed])

  return { displayedText, isDone }
}
