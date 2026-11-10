import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import es from './es.js'
import en from './en.js'

const TEXTS = { es, en }
const STORAGE_KEY = 'portfolio-lang'

// Idioma inicial: el último elegido en este navegador; si no hay, el del navegador
// (español si empieza por "es", si no inglés).
function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && TEXTS[saved]) return saved
  } catch {
    // almacenamiento bloqueado: se usa el idioma del navegador
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const t = TEXTS[lang]

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin almacenamiento: el idioma no se recuerda, pero la web funciona igual
    }
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <LanguageProvider>')
  return ctx
}
