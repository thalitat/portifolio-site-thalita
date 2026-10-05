function ServicesAndImpact({ copy }) {
  return (
    <>
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
    </>
  )
}

export default ServicesAndImpact
