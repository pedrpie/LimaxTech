import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Retorna uma ref e um booleano que vira `true` na primeira vez que o
 * elemento entra na viewport. Depois disso o observer é desligado —
 * o elemento não volta a ficar invisível ao rolar para cima.
 * Respeita a preferência do sistema por menos movimento.
 */
export function useInView(options) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (isVisible) return
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return { ref, isVisible }
}
