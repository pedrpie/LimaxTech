export const TAGLINE = 'Criação de sites para a internet'

export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#ferramentas', label: 'Ferramentas' },
  { href: '#contato', label: 'Contato' },
]

export const TERMINAL_LINES = [
  { prompt: 'quem_somos', output: 'Limax Tech' },
  { prompt: 'o_que_fazemos', output: 'Sites para pessoas e negócios' },
  { prompt: 'como_trabalhamos', output: 'Conversa, planejamento, código, entrega' },
  { prompt: 'disponiveis_para_projetos', output: 'sim' },
]

export const HERO_FACTS = [
  {
    id: 'site-proprio',
    title: 'Site próprio',
    description: 'Sem depender de terceiros para publicar seu conteúdo.',
  },
  {
    id: 'sob-medida',
    title: 'Feito sob medida',
    description: 'Cada página pensada para o seu público, não um modelo pronto.',
  },
  {
    id: 'contato-direto',
    title: 'Contato direto',
    description: 'Você fala com quem escreve o código, sem intermediários.',
  },
]

// O id de cada valor é usado para escolher o ícone correspondente em Sobre.jsx
export const VALUES = [
  {
    id: 'comunicacao',
    title: 'Comunicação direta',
    description: 'Sem jargão técnico desnecessário — você entende cada etapa do projeto.',
  },
  {
    id: 'codigo',
    title: 'Código organizado',
    description: 'Um site fácil de manter e de atualizar no futuro, sem depender de retrabalho.',
  },
  {
    id: 'entrega',
    title: 'Do início ao ar',
    description: 'Acompanhamento desde a primeira ideia até o site publicado.',
  },
]

export const STACK_BACKEND = {
  title: 'o que fica por trás do site',
  lead: 'Responsável por guardar e organizar as informações com segurança.',
  items: [
    { name: 'Python', desc: 'linguagem principal' },
    { name: 'FastAPI', desc: 'conecta o site aos dados' },
    { name: 'PostgreSQL', desc: 'banco de dados' },
    { name: 'JWT', desc: 'login e autenticação' },
    { name: 'Bcrypt', desc: 'proteção de senhas' },
  ],
}

export const STACK_FRONTEND = {
  title: 'o que a pessoa vê e usa',
  lead: 'Responsável pela aparência e pela navegação do site.',
  items: [
    { name: 'React', desc: 'estrutura da interface' },
    { name: 'JavaScript', desc: 'interatividade' },
    { name: 'HTML', desc: 'conteúdo da página' },
    { name: 'CSS', desc: 'layout e estilo' },
    { name: 'Git & GitHub', desc: 'histórico do projeto' },
  ],
}

export const CONTACT = {
  email: 'pedrolcosta360@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pedro-costa-1374ba379/',
  github: 'https://github.com/pedrpie',
}
