import { useRef, useState } from 'react'
import LanguageFlag from './LanguageFlag'

const languageOptions = [
  { code: 'pt', label: 'Português', shortLabel: 'PT' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Español', shortLabel: 'ES' }
]

function SiteHeader({ copy, language, setLanguage, isDark, setIsDark }) {
  const languagePickerRef = useRef(null)
  const mobileNavButtonRef = useRef(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const selectedLanguage = languageOptions.find((option) => option.code === language)

  return (
    <header className="topbar">
      <a className="brand-wrap" href="#sobre" aria-label={copy.homeLabel}>
        <span className="brand-mark" aria-hidden="true">TO</span>
        <span className="brand-text">
          <span className="brand-name">Thalita Oliveira</span>
          <span className="brand-role">{copy.role}</span>
        </span>
      </a>

      <nav
        className={`main-nav${isMobileNavOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label={copy.navigationLabel}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isMobileNavOpen) {
            setIsMobileNavOpen(false)
            mobileNavButtonRef.current?.focus()
          }
        }}
      >
        <ul>
          <li><a href="#sobre" onClick={() => setIsMobileNavOpen(false)}>{copy.nav[0]}</a></li>
          <li><a href="#projetos" onClick={() => setIsMobileNavOpen(false)}>{copy.nav[1]}</a></li>
          <li><a href="#servicos" onClick={() => setIsMobileNavOpen(false)}>{copy.nav[2]}</a></li>
          <li><a href="#palestra" onClick={() => setIsMobileNavOpen(false)}>{copy.nav[3]}</a></li>
          <li><a href="#impacto" onClick={() => setIsMobileNavOpen(false)}>{copy.nav[4]}</a></li>
          <li><a href="#contato" onClick={() => setIsMobileNavOpen(false)}>{copy.nav[5]}</a></li>
        </ul>
      </nav>

      <div className="header-tools">
        <button
          ref={mobileNavButtonRef}
          className={`mobile-nav-toggle${isMobileNavOpen ? ' is-open' : ''}`}
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMobileNavOpen}
          aria-label={isMobileNavOpen ? copy.mobileMenuClose : copy.mobileMenuOpen}
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          <span className="hamburger-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
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
  )
}

export default SiteHeader
