function ContactContent({ copy }) {
  const whatsappUrl = `https://wa.me/5534998033208?text=${encodeURIComponent(copy.whatsappMessage)}`

  return (
    <section className="location-section section-band band-ice" id="atendimento">
      <div className="section-heading narrow">
        <p className="eyebrow">{copy.regionEyebrow}</p>
        <h1>{copy.regionTitle}</h1>
      </div>

      <div className="location-card motion-card motion-hover">
        <div className="map-panel" aria-label={copy.mapPanelLabel}>
          <iframe
            src={`https://www.google.com/maps?q=Uberaba%2C%20MG&z=11&output=embed&hl=${copy.mapLocale}`}
            title={copy.mapFrameTitle}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="location-copy">
          <p>{copy.regionDescription}</p>
          <ul className="client-list">
            {copy.regionClients.map((client) => <li key={client}>{client}</li>)}
          </ul>
          <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
            {copy.regionCta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactContent
