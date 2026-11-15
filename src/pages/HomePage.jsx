import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import WhatsAppButton from '../components/WhatsAppButton'
import ApproachAndDelivery from '../sections/ApproachAndDelivery'
import ContactContent from '../sections/ContactContent'
import HeroAndMetrics from '../sections/HeroAndMetrics'
import ProjectsContent from '../sections/ProjectsContent'
import ServicesContent from '../sections/ServicesContent'
import TalkContent from '../sections/TalkContent'
import EducationContent from '../sections/EducationContent'

function HomePage({ copy, language, setLanguage, isDark, setIsDark, page }) {
  const pageContent = {
    sobre: (
      <>
        <HeroAndMetrics copy={copy} language={language} />
        <ApproachAndDelivery copy={copy} />
      </>
    ),
    projetos: <ProjectsContent copy={copy} />,
    servicos: <ServicesContent copy={copy} />,
    palestras: <TalkContent copy={copy} />,
    educacional: <EducationContent copy={copy} />,
    contato: <ContactContent copy={copy} />
  }

  return (
    <div className="page-shell">
      <SiteHeader
        copy={copy}
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
        page={page}
      />

      <main id="main-content">
        {pageContent[page] || (
          <section className="section-band band-ice not-found-section">
            <h1>{copy.notFoundTitle}</h1>
            <p>{copy.notFoundMessage}</p>
            <a className="primary-btn" href={`${import.meta.env.BASE_URL}?lang=${language}`}>
              {copy.backHome}
            </a>
          </section>
        )}
      </main>

      <SiteFooter copy={copy} />
      <WhatsAppButton copy={copy} />
    </div>
  )
}

export default HomePage
