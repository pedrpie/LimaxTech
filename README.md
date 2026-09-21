# Limax Tech

A Limax Tech é uma iniciativa de tecnologia especializada no desenvolvimento de websites modernos, estratégicos e personalizados para empresas, profissionais e marcas que buscam fortalecer sua presença digital.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```
src/
  data/
    content.js        # todo o texto e as listas do site (fácil de editar sem tocar em JSX)
  hooks/
    useTheme.js        # tema claro/escuro + persistência em localStorage
    useInView.js        # detecta quando um elemento entra na tela (para as animações de rolagem)
    useTypewriter.js     # efeito de digitação de um texto, uma única vez
  components/
    Nav.jsx
    ThemeToggle.jsx
    Reveal.jsx           # wrapper genérico que aplica a animação de "aparecer ao rolar"
    Hero.jsx
    Terminal.jsx          # terminal animado do hero
    Sobre.jsx
    Ferramentas.jsx
    Contato.jsx
    Footer.jsx
  App.jsx                  # junta todas as seções
  main.jsx                  # ponto de entrada do React
  index.css                  # todas as variáveis de tema e estilos
```