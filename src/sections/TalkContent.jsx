const talkUrl = 'https://www.youtube.com/live/WgqPl0FiYCM'
const talkEmbedUrl = 'https://www.youtube-nocookie.com/embed/WgqPl0FiYCM'
const youtubeChannelUrl = 'https://www.youtube.com/@MeninaUX'

function TalkContent({ copy }) {
  return (
    <section className="talk-section section-band band-navy" id="palestra">
      <div className="talk-copy">
        <p className="eyebrow">{copy.talkEyebrow}</p>
        <h1>{copy.talkTitle}</h1>
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
  )
}

export default TalkContent
