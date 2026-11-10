import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { EMAIL, LINKEDIN_URL, PROJECT_LINKS } from '../data/links.js'
import './Projects.css'


function ProjectLink({ href, label, disabledTitle }) {
  if (!href) {
    return (
      <span className="project-card__link--disabled" aria-disabled="true" title={disabledTitle}>
        {label}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label} ↗
    </a>
  )
}

function DemoModal({ project, onClose }) {
  const { t } = useI18n()
  const m = t.projects.modal
  const dialogRef = useRef(null)
  const firstButtonRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    firstButtonRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll('a, button')
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  const subject = m.mailSubject(project.name)
  const body = m.mailBody(project.name)
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  // Portal a <body>: <main> crea su propio contexto de apilado y la navbar quedaría por encima.
  return createPortal(
    <div className="demo-modal__backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={dialogRef}
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        aria-describedby="demo-modal-text"
      >
        <button className="demo-modal__close" onClick={onClose} aria-label={m.close}>×</button>
        <p className="demo-modal__kicker">{project.name}</p>
        <h3 id="demo-modal-title" className="demo-modal__title">{m.title}</h3>
        <div id="demo-modal-text" className="demo-modal__text">
          <p>{m.intro}</p>
          <ul>
            {m.options.map((option) => (
              <li key={option.title}><strong>{option.title}</strong> {option.text}</li>
            ))}
          </ul>
        </div>
        <div className="demo-modal__actions">
          <a ref={firstButtonRef} className="btn btn--primary" href={mailto}>{m.email}</a>
          <a className="btn btn--ghost" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">{m.linkedin} ↗</a>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function Projects() {
  const { t } = useI18n()
  const [demoProject, setDemoProject] = useState(null)
  const projects = t.projects.items.map((item, i) => ({ ...item, ...PROJECT_LINKS[i] }))

  return (
    <section id="proyectos" className="section projects">
      <div className="projects__inner reveal">
        <p className="section-kicker">{t.projects.kicker}</p>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-lead">{t.projects.lead}</p>

        <div className="projects__grid">
          {projects.map((project) => {
            const wip = project.status === 'wip'
            return (
              <article key={project.name} className={`project-card${wip ? ' project-card--wip' : ''}`}>
                <div className="project-card__header">
                  <h3>{project.name}</h3>
                  {wip && <span className="project-card__badge">{t.projects.wipBadge}</span>}
                </div>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  {wip ? (
                    <ProjectLink href={null} label={t.projects.demo} disabledTitle={t.projects.demoSoon} />
                  ) : project.demoUrl ? (
                    <ProjectLink href={project.demoUrl} label={t.projects.demo} />
                  ) : (
                    <button type="button" className="project-card__link-btn" onClick={() => setDemoProject(project)}>
                      {t.projects.demoOnDemand}
                    </button>
                  )}
                  <ProjectLink
                    href={project.codeUrl}
                    label={wip ? t.projects.codeSoon : t.projects.code}
                    disabledTitle={t.projects.codeSoonTitle}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {demoProject && <DemoModal project={demoProject} onClose={() => setDemoProject(null)} />}
    </section>
  )
}
