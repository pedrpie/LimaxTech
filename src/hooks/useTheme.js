import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'light' ? 'light' : 'dark'
  } catch {
    // localStorage pode estar bloqueado (modo privado, restrições do navegador) —
    // nesse caso o site simplesmente sempre abre no tema claro.
    return 'dark'
  }
}

/**
 * Controla o tema claro/escuro do site, aplicando o atributo data-theme
 * no <html> e lembrando a escolha da pessoa entre visitas.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Sem persistência disponível — a preferência vale só para esta sessão.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
