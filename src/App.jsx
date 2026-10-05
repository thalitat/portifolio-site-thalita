import { useEffect, useState } from 'react'
import './App.css'
import { siteCopy } from './data/siteContent'
import { useScrollReveal } from './hooks/useScrollReveal'
import HomePage from './pages/HomePage'

function App() {
  const [language, setLanguage] = useState('pt')
  const [isDark, setIsDark] = useState(false)
  const copy = siteCopy[language]

  useScrollReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language
  }, [isDark, language])

  return (
    <HomePage
      copy={copy}
      language={language}
      setLanguage={setLanguage}
      isDark={isDark}
      setIsDark={setIsDark}
    />
  )
}

export default App
