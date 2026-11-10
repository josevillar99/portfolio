import { useI18n } from '../i18n/LanguageContext.jsx'
import './LanguageSwitch.css'

const FlagES = () => (
  <svg viewBox="0 0 30 20" aria-hidden="true">
    <rect width="30" height="20" fill="#AA151B" />
    <rect y="5" width="30" height="10" fill="#F1BF00" />
  </svg>
)

const FlagGB = () => (
  <svg viewBox="0 0 60 30" aria-hidden="true">
    <clipPath id="flag-gb-s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
    <clipPath id="flag-gb-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
    <g clipPath="url(#flag-gb-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-gb-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
)

const OPTIONS = [
  { code: 'es', Flag: FlagES },
  { code: 'en', Flag: FlagGB },
]

export default function LanguageSwitch() {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {OPTIONS.map(({ code, Flag }) => (
        <button
          key={code}
          type="button"
          className={`lang-switch__btn${lang === code ? ' is-active' : ''}`}
          aria-pressed={lang === code}
          aria-label={t.nav.switchTo[code]}
          title={t.nav.switchTo[code]}
          onClick={() => setLang(code)}
        >
          <Flag />
        </button>
      ))}
    </div>
  )
}
