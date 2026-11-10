import { useI18n } from '../i18n/LanguageContext.jsx'
import { CV_FILES } from '../data/links.js'
import './About.css'

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v11" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
)

export default function About() {
  const { lang, t } = useI18n()
  const cv = CV_FILES[lang]

  return (
    <section id="sobre-mi" className="section about">
      <div className="about__grid reveal">
        <div className="about__avatar-wrap">
          <div className="about__avatar">
            <span>JV</span>
          </div>
          <div className="about__avatar-glow" />
        </div>

        <div className="about__text">
          <p className="section-kicker">{t.about.kicker}</p>
          <div className="about__heading">
            <h2 className="section-title">{t.about.title}</h2>
            <a
              className="about__cv-btn"
              href={cv.href}
              download={cv.filename}
              title={t.about.downloadCvTitle}
            >
              <DownloadIcon />
              {t.about.downloadCv}
            </a>
          </div>

          {t.about.paragraphs.map((text) => (
            <p key={text} className="about__paragraph">{text}</p>
          ))}

          <div className="about__skills">
            {t.about.skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>

          <div className="about__stats">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
