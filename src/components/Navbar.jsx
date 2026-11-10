import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import LanguageSwitch from './LanguageSwitch.jsx'
import './Navbar.css'

const LINK_IDS = ['inicio', 'sobre-mi', 'proyectos', 'contacto']

export default function Navbar() {
  const { t } = useI18n()
  const [active, setActive] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINK_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={(e) => handleClick(e, 'inicio')}>
          <span className="navbar__brand-bracket">{'<'}</span>
          JV
          <span className="navbar__brand-bracket">{'/>'}</span>
        </a>

        <div className="navbar__right">
          <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
            {LINK_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'is-active' : ''}
                  onClick={(e) => handleClick(e, id)}
                >
                  {t.nav.links[id]}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitch />

          <button
            className={`navbar__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}
