function ServicesContent({ copy }) {
  return (
    <section className="services-section section-band band-ice" id="servicos">
      <div className="section-heading narrow">
        <p className="eyebrow">{copy.servicesEyebrow}</p>
        <h1>{copy.servicesTitle}</h1>
      </div>

      <div className="services-grid">
        {copy.services.map(([title, text], index) => (
          <article key={title} className="service-card motion-card motion-hover">
            <span className="service-index">0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesContent
