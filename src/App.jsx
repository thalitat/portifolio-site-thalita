import { useEffect, useRef, useState } from 'react'
import './App.css'
import { siteCopy, socialLinks } from './data/siteContent'

const talkUrl = 'https://www.youtube.com/live/WgqPl0FiYCM'
const talkEmbedUrl = 'https://www.youtube-nocookie.com/embed/WgqPl0FiYCM'
const smartFarmaPrototypeUrl =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkUatamJMdBu6BE3JfWM34H%2FSmartFarma%3Fnode-id%3D6-70%26p%3Df%26viewport%3D377%252C1003%252C0.31%26t%3Dkf99q8Udn8zsFCDb-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1'
const palette = ['#071B33', '#102B49', '#18C6C3', '#A7F3E9', '#F5F8FA']
const languageOptions = [
  { code: 'pt', label: 'Português', shortLabel: 'PT' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Español', shortLabel: 'ES' }
]

function LanguageFlag({ code }) {
  return (
    <svg className="language-flag-icon" viewBox="0 0 36 24" aria-hidden="true">
      {code === 'pt' && (
        <>
          <rect width="36" height="24" fill="#009739" />
          <path d="M18 3 32 12 18 21 4 12Z" fill="#ffdf00" />
          <circle cx="18" cy="12" r="5.5" fill="#002776" />
          <path d="M13 11.6c3.5-.7 7.1.2 10 2.5" fill="none" stroke="#fff" strokeWidth="1" />
        </>
      )}
      {code === 'en' && (
        <>
          <rect width="36" height="24" fill="#fff" />
          {Array.from({ length: 7 }, (_, stripe) => (
            <rect
              key={stripe}
              y={stripe * (48 / 13)}
              width="36"
              height={24 / 13}
              fill="#b22234"
            />
          ))}
          <rect width="16" height="13" fill="#3c3b6e" />
          {Array.from({ length: 9 }, (_, star) => (
            <circle
              key={star}
              cx={2.5 + (star % 3) * 5}
              cy={2.3 + Math.floor(star / 3) * 4}
              r="0.8"
              fill="#fff"
            />
          ))}
        </>
      )}
      {code === 'es' && (
        <>
          <rect width="36" height="6" fill="#aa151b" />
          <rect y="6" width="36" height="12" fill="#f1bf00" />
          <rect y="18" width="36" height="6" fill="#aa151b" />
        </>
      )}
    </svg>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [language, setLanguage] = useState('pt')
  const [isDark, setIsDark] = useState(false)
  const smartFarmaSectionRef = useRef(null)
  const languagePickerRef = useRef(null)
  const copy = siteCopy[language]
  const selectedLanguage = languageOptions.find((option) => option.code === language)
  const currentSlide = copy.slides[activeSlide]
  const featuredProject = copy.smartFarma
  const whatsappUrl = `https://wa.me/5534998033208?text=${encodeURIComponent(copy.whatsappMessage)}`

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % copy.slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [copy.slides.length])

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language
  }, [isDark, language])

  useEffect(() => {
    const section = smartFarmaSectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      section.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const motionCards = [...document.querySelectorAll('.motion-card')]
    if (!motionCards.length) return

    if (!('IntersectionObserver' in window)) {
      motionCards.forEach((card) => card.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    motionCards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand-wrap" href="#sobre" aria-label="Thalita Oliveira, início">
          <span className="brand-mark" aria-hidden="true">
            TO
          </span>
          <span className="brand-text">
            <span className="brand-name">Thalita Oliveira</span>
            <span className="brand-role">{copy.role}</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#sobre">{copy.nav[0]}</a>
          <a href="#projetos">{copy.nav[1]}</a>
          <a href="#servicos">{copy.nav[2]}</a>
          <a href="#palestra">{copy.nav[3]}</a>
          <a href="#contato">{copy.nav[4]}</a>
        </nav>

        <div className="header-tools">
          <div className="language-picker">
            <details
              ref={languagePickerRef}
              className="language-menu"
              onKeyDown={(event) => {
                if (event.key === 'Escape' && languagePickerRef.current) {
                  languagePickerRef.current.open = false
                  languagePickerRef.current.querySelector('summary')?.focus()
                }
              }}
            >
              <summary aria-label={`${copy.languageLabel}: ${selectedLanguage.label}`}>
                <LanguageFlag code={selectedLanguage.code} />
                <span>{selectedLanguage.shortLabel}</span>
              </summary>
              <div className="language-options">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    className="language-option"
                    type="button"
                    aria-current={language === option.code ? 'true' : undefined}
                    onClick={() => {
                      setLanguage(option.code)
                      if (languagePickerRef.current) languagePickerRef.current.open = false
                    }}
                  >
                    <LanguageFlag code={option.code} />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </details>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? copy.themeSwitchToLight : copy.themeSwitchToDark}
            title={isDark ? copy.themeSwitchToLight : copy.themeSwitchToDark}
          >
            <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
            <span className="theme-toggle-text">
              {isDark ? copy.themeLight : copy.themeDark}
            </span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section hero-color-band" id="sobre">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.heroTitle}</h1>
            <p className="lead">{copy.heroDescription}</p>

            <div className="hero-actions">
              <a className="primary-btn" href="#servicos">
                {copy.servicesCta}
              </a>
              <a
                className="ghost-btn"
                href="https://www.linkedin.com/in/thalitaosb/"
                target="_blank"
                rel="noreferrer"
              >
                {copy.linkedin}
              </a>
            </div>

          </div>

          <div className="hero-visual" aria-label={copy.brandLabel}>
            <div className="visual-card">
              <div className="pixel-spark pixel-spark-one" aria-hidden="true" />
              <div className="pixel-spark pixel-spark-two" aria-hidden="true" />
              <span className="mini-label">{copy.brandLabel}</span>

              <div className="visual-level">
                <span className="level-dot" />
                <span>LEVEL 01</span>
                <span className="level-line" />
                <span>UX / UI</span>
              </div>

              <h2>{copy.brandStatement}</h2>

              <div className="work-flow" aria-label={copy.questLabel}>
                {copy.questStages.slice(0, 3).map((stage, index) => (
                  <div className="work-step" key={stage}>
                    <span className="work-step-marker" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className="work-step-label">{stage}</span>
                  </div>
                ))}
              </div>

              <div className="palette-row" aria-label={copy.paletteLabel}>
                {palette.map((color) => (
                  <span
                    key={color}
                    className="color-swatch"
                    style={{ background: color }}
                    title={color}
                  />
                ))}
              </div>

              <p className="pixel-caption">PRESS START TO CREATE</p>
            </div>
          </div>
        </section>

        <section className="stats-section section-band band-aqua" aria-label={copy.statsLabel}>
          <div className="stats-grid">
            {copy.stats.map(([value, label]) => (
              <div key={label} className="stat-item motion-card motion-hover">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section section-band band-ice" id="projetos">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">{copy.projectsEyebrow}</p>
              <h2>{copy.projectsTitle}</h2>
            </div>
            <p className="projects-intro">{copy.projectsDescription}</p>
          </div>
          <div className="projects-grid">
            {copy.projects.map(([index, title, description, href]) => (
              <article className="project-card motion-card motion-hover" key={title}>
                <span className="project-index">{index}</span>
                <div className="project-pixels" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {href && (
                  <a className="project-link" href={href} target="_blank" rel="noreferrer">
                    {copy.openPrototype} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {featuredProject && (
          <section
            ref={smartFarmaSectionRef}
            className="smartfarma-section section-band band-paper"
            aria-labelledby="smartfarma-title"
          >
            <div className="smartfarma-heading">
              <p className="eyebrow">{featuredProject.kicker}</p>
              <h2 id="smartfarma-title">{featuredProject.title}</h2>
              <p>{featuredProject.description}</p>
            </div>

            <div className="prototype-frame motion-card">
              <iframe
                src={smartFarmaPrototypeUrl}
                title={`${featuredProject.title} - protótipo navegável`}
                allow="fullscreen; clipboard-read; clipboard-write"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        <section className="carousel-section section-band band-ice" id="conteudo">
          <div className="section-heading">
            <p className="eyebrow">{copy.approachEyebrow}</p>
            <h2>{copy.approachTitle}</h2>
          </div>

          <div className="carousel-card motion-card motion-hover">
            <div className="carousel-copy" aria-live="polite">
              <p className="carousel-eyebrow">{currentSlide.eyebrow}</p>
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.description}</p>
              <div className="tag-list">
                {currentSlide.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="carousel-side motion-card motion-hover">
              <div className="pixel-orbit" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="carousel-controls" aria-label={copy.carouselLabel}>
                {copy.slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeSlide ? 'dot active' : 'dot'}
                    aria-label={`${copy.showSlide} ${index + 1}`}
                    aria-current={index === activeSlide ? 'true' : undefined}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

        </section>

        <section className="delivery-section section-band band-aqua" aria-labelledby="delivery-title">
          <div className="delivery-layout">
            <div className="delivery-copy motion-card">
              <p className="eyebrow">{copy.deliveryEyebrow}</p>
              <h2 id="delivery-title">{copy.deliveryTitle}</h2>
              <p>{copy.deliveryIntro}</p>
              <p>
                {copy.deliveryConnection[0]}
                <strong>{copy.deliveryConnection[1]}</strong>
                {copy.deliveryConnection[2]}
              </p>
              <p>
                {copy.deliveryIdentity[0]}
                <strong>{copy.deliveryIdentity[1]}</strong>
                {copy.deliveryIdentity[2]}
              </p>
            </div>

            <figure className="delivery-image motion-card motion-hover">
              <img src="/delivery-work.jpg" alt={copy.deliveryImageAlt} loading="lazy" />
            </figure>
          </div>
        </section>

        <section className="services-section section-band band-ice" id="servicos">
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.servicesEyebrow}</p>
            <h2>{copy.servicesTitle}</h2>
          </div>

          <div className="services-grid">
            {copy.services.map(([title, text], index) => (
              <article key={title} className="service-card motion-card motion-hover">
                <span className="service-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-section section-band band-paper" id="impacto">
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.impactEyebrow}</p>
            <h2>{copy.impactTitle}</h2>
          </div>

          <p className="impact-description">{copy.impactDescription}</p>

          <div className="services-grid">
            {copy.impactItems.map(([title, text], index) => (
              <article key={title} className="service-card motion-card motion-hover">
                <span className="service-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="location-section section-band band-ice" id="atendimento">
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.regionEyebrow}</p>
            <h2>{copy.regionTitle}</h2>
          </div>

          <div className="location-card motion-card motion-hover">
            <div className="map-panel motion-card" aria-label="Mapa de Uberaba e atendimento remoto">
              <iframe
                src="https://www.google.com/maps?q=Uberaba%2C%20MG&z=11&output=embed"
                title="Mapa de Uberaba, Minas Gerais"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="location-copy">
              <p>{copy.regionDescription}</p>
              <ul className="client-list">
                {copy.regionClients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="talk-section section-band band-navy" id="palestra">
          <div className="talk-copy">
            <p className="eyebrow">{copy.talkEyebrow}</p>
            <h2>{copy.talkTitle}</h2>
            <p>{copy.talkDescription}</p>
            <a className="primary-btn" href={talkUrl} target="_blank" rel="noreferrer">
              {copy.watchTalk}
            </a>
          </div>
          <div className="video-frame motion-card">
            <iframe
              src={talkEmbedUrl}
              title={copy.talkFrameTitle}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            TO
          </span>
          <span className="brand-text">
            <span className="brand-name">Thalita Oliveira</span>
            <span className="brand-role">{copy.role}</span>
          </span>
        </div>

        <p className="footer-note">{copy.footerNote}</p>

        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsapp}
        title={copy.whatsapp}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.6l6.3-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-4-.5-5.7-1.6l-.4-.2-3.7 1 1-3.6-.3-.5A10.3 10.3 0 1 1 16 26.4Zm5.7-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2.1-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.4 3.3c.2.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>
    </div>
  )
}

export default App
