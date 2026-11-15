const talkUrl = 'https://www.youtube.com/live/WgqPl0FiYCM'
const talkEmbedUrl = 'https://www.youtube-nocookie.com/embed/WgqPl0FiYCM'
const youtubeChannelUrl = 'https://www.youtube.com/@MeninaUX'

function LocationAndTalk({ copy }) {
  return (
    <>
      <section className="location-section section-band band-ice" id="atendimento">
        <div className="section-heading narrow">
          <p className="eyebrow">{copy.regionEyebrow}</p>
          <h2>{copy.regionTitle}</h2>
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
          </div>
        </div>
      </section>

      <section className="talk-section section-band band-navy" id="palestra">
        <div className="talk-copy">
          <p className="eyebrow">{copy.talkEyebrow}</p>
          <h2>{copy.talkTitle}</h2>
          <p>{copy.talkDescription}</p>
          <div className="talk-actions">
            <a className="primary-btn" href={talkUrl} target="_blank" rel="noreferrer">
              {copy.watchTalk}
            </a>
            <a className="ghost-btn" href={youtubeChannelUrl} target="_blank" rel="noreferrer">
              {copy.watchChannel}
            </a>
          </div>
        </div>
        <div className="video-frame motion-card">
          <iframe
            src={talkEmbedUrl}
            title={copy.talkFrameTitle}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}

export default LocationAndTalk
