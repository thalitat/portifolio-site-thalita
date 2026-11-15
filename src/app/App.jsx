import { useEffect, useState } from 'react'
import '../styles/app.css'
import { siteCopy } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import HomePage from '../pages/HomePage'

function getLanguageFromUrl() {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang')
  return requestedLanguage && Object.hasOwn(siteCopy, requestedLanguage)
    ? requestedLanguage
    : 'pt'
}

function getPageFromPathname() {
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname
  const pathname = window.location.pathname
  const routePath = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname.replace(/^\/+/, '')
  const pageSlug = routePath
    .split('/')
    .filter(Boolean)[0]

  return pageSlug || 'sobre'
}

function App() {
  const [language, setLanguage] = useState(getLanguageFromUrl)
  const [isDark, setIsDark] = useState(false)
  const page = getPageFromPathname()
  const copy = siteCopy[language]
  const pageTitle = copy.pageTitles[page] || copy.pageTitle

  useScrollReveal()

  useEffect(() => {
    const url = new URL(window.location.href)
    if (language === 'pt') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', language)
    }
    window.history.replaceState(null, '', url)

    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language
    document.title = pageTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.metaDescription)
  }, [isDark, language, page, pageTitle, copy.metaDescription])

  return (
    <HomePage
      copy={copy}
      language={language}
      setLanguage={setLanguage}
      isDark={isDark}
      setIsDark={setIsDark}
      page={page}
    />
  )
}

export default App
