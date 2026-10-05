import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import WhatsAppButton from '../components/WhatsAppButton'
import ApproachAndDelivery from '../sections/ApproachAndDelivery'
import HeroAndProjects from '../sections/HeroAndProjects'
import LocationAndTalk from '../sections/LocationAndTalk'
import ServicesAndImpact from '../sections/ServicesAndImpact'

function HomePage({ copy, language, setLanguage, isDark, setIsDark }) {
  return (
    <div className="page-shell">
      <SiteHeader
        copy={copy}
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main>
        <HeroAndProjects copy={copy} />
        <ApproachAndDelivery copy={copy} />
        <ServicesAndImpact copy={copy} />
        <LocationAndTalk copy={copy} />
      </main>

      <SiteFooter copy={copy} />
      <WhatsAppButton copy={copy} />
    </div>
  )
}

export default HomePage
