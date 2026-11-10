// Datos que no cambian con el idioma: enlaces, usuario y archivos.
export const EMAIL = 'josevillarcorrales99@gmail.com'
export const GITHUB_USER = 'josevillar99'
export const GITHUB_URL = `https://github.com/${GITHUB_USER}?tab=repositories`
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jose-villar-57293a1ab/'

// CV para descargar (archivos en public/cv/)
export const CV_FILES = {
  es: { href: '/cv/cv-jose-villar-es.pdf', filename: 'CV-Jose-Villar-ES.pdf' },
  en: { href: '/cv/cv-jose-villar-en.pdf', filename: 'CV-Jose-Villar-EN.pdf' },
}

// Enlaces de cada proyecto, en el mismo orden que projects.items en es.js / en.js.
// status: 'live' = publicado en GitHub · 'wip' = en desarrollo
// demoUrl: null en un proyecto publicado = demo bajo demanda (abre el modal)
// codeUrl: null = botón de código deshabilitado
export const PROJECT_LINKS = [
  { status: 'live', demoUrl: null, codeUrl: `${GITHUB_URL}/ha-job-alert-bot` },
  { status: 'live', demoUrl: null, codeUrl: `${GITHUB_URL}/barbershop` },
  { status: 'wip', demoUrl: null, codeUrl: null },
  { status: 'wip', demoUrl: null, codeUrl: null },
]
