function VolunteerContent({ copy }) {
  return (
    <section className="impact-section section-band band-paper" id="impacto">
      <div className="section-heading narrow">
        <p className="eyebrow">{copy.impactEyebrow}</p>
        <h1>{copy.impactTitle}</h1>
      </div>

      <p className="impact-description">{copy.impactDescription}</p>

      <div className="services-grid">
        {copy.impactItems.map(([title, text], index) => (
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

export default VolunteerContent
