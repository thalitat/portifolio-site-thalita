import { useRef } from 'react'
import LanguageFlag from './LanguageFlag'

const languageOptions = [
  { code: 'pt', label: 'Português', shortLabel: 'PT' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Español', shortLabel: 'ES' }
]

function SiteHeader({ copy, language, setLanguage, isDark, setIsDark }) {
  const languagePickerRef = useRef(null)
  const selectedLanguage = languageOptions.find((option) => option.code === language)

  return (
    <header className="topbar">
      <a className="brand-wrap" href="#sobre" aria-label="Thalita Oliveira, início">
        <span className="brand-mark" aria-hidden="true">TO</span>
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
  )
}

export default SiteHeader
