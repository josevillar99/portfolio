import { useI18n } from '../i18n/LanguageContext.jsx'
import './Hero.css'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="inicio" className="section hero">
      <div className="hero__content reveal">
        <p className="hero__eyebrow">
          <span className="hero__dot" />
          {t.hero.eyebrow}
        </p>
        <h1 className="hero__title">
          {t.hero.greeting} <span className="hero__title-accent">Jose Villar</span>
        </h1>
        <p className="hero__subtitle">
          {t.hero.subtitle}
        </p>
        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary" onClick={(e) => {
            e.preventDefault()
            document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            {t.hero.ctaProjects}
          </a>
          <a href="#contacto" className="btn btn--ghost" onClick={(e) => {
            e.preventDefault()
            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      <button
        className="hero__scroll-cue"
        aria-label={t.hero.scrollLabel}
        onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="hero__scroll-cue-text">{t.hero.scrollText}</span>
        <span className="hero__scroll-cue-line" />
      </button>
    </section>
  )
}
