import { useTheme } from './hooks/useTheme.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Ferramentas from './components/Ferramentas.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="wrap blocks-container">
        <Hero />
        <Sobre />
        <Ferramentas />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
