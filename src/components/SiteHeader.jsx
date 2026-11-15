import { useRef, useState } from 'react'
import LanguageFlag from './LanguageFlag'

const languageOptions = [
  { code: 'pt', label: 'Português', shortLabel: 'PT' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Español', shortLabel: 'ES' }
]

const pageSlugs = ['sobre', 'projetos', 'servicos', 'palestras', 'voluntariado', 'contato']

function SiteHeader({ copy, language, setLanguage, isDark, setIsDark, page }) {
  const languagePickerRef = useRef(null)
  const mobileNavButtonRef = useRef(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const selectedLanguage = languageOptions.find((option) => option.code === language)

  const pageHref = (slug) =>
    `${import.meta.env.BASE_URL}${slug === 'sobre' ? '' : `${slug}/`}?lang=${language}`

  return (
    <header className="topbar">
      <a className="brand-wrap" href={pageHref('sobre')} aria-label={copy.homeLabel}>
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
          {copy.nav.map((label, index) => {
            const slug = pageSlugs[index]
            return (
              <li key={slug}>
                <a
                  href={pageHref(slug)}
                  aria-current={page === slug ? 'page' : undefined}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {label}
                </a>
              </li>
            )
          })}
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
