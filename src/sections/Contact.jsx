import { useState } from 'react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from '../data/links.js'
import './Contact.css'

// key: clave de los textos en contact.* · value: lo que se ve · copy: lo que copia el botón
const SOCIALS = [
  { key: 'email', value: EMAIL, copy: EMAIL, href: `mailto:${EMAIL}` },
  { key: 'github', value: `@${GITHUB_USER}`, copy: GITHUB_URL, href: GITHUB_URL },
  { key: 'linkedin', value: 'Jose Villar', copy: LINKEDIN_URL, href: LINKEDIN_URL },
]

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Navegadores sin permiso para el portapapeles: copia con un textarea temporal
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  }
}

const OpenIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4h6v6" />
    <path d="M20 4l-9 9" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
)

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a1 1 0 0 1 1-1h10" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5 9-10" />
  </svg>
)

function SocialItem({ social }) {
  const { t } = useI18n()
  const label = t.contact.labels[social.key]
  const openLabel = t.contact.open[social.key]
  const [copied, setCopied] = useState(false)
  const external = social.href.startsWith('http')

  const handleCopy = async () => {
    if (await copyText(social.copy)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <li className="contact__social">
      <div className="contact__social-text">
        <span className="contact__social-label">{label}</span>
        <span className="contact__social-value">{social.value}</span>
      </div>
      <div className="contact__social-actions">
        <a
          className="contact__icon-btn"
          href={social.href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={openLabel}
          title={openLabel}
        >
          <OpenIcon />
        </a>
        <button
          type="button"
          className={`contact__icon-btn${copied ? ' is-copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? t.contact.copied : t.contact.copyLabel(label)}
          title={copied ? t.contact.copied : t.contact.copy}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
      <span className="contact__copied" role="status" aria-live="polite">
        {copied ? t.contact.copied : ''}
      </span>
    </li>
  )
}

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contacto" className="section contact">
      <div className="contact__inner reveal">
        <p className="section-kicker">{t.contact.kicker}</p>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-lead">{t.contact.lead}</p>

        <ul className="contact__socials">
          {SOCIALS.map((social) => (
            <SocialItem key={social.key} social={social} />
          ))}
        </ul>
      </div>
    </section>
  )
}
