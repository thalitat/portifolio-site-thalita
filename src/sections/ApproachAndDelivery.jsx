import { useEffect, useState } from 'react'

function ApproachSection({ copy }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const currentSlide = copy.slides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % copy.slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [copy.slides.length])

  return (
    <section className="carousel-section section-band band-ice" id="conteudo">
      <div className="section-heading">
        <p className="eyebrow">{copy.approachEyebrow}</p>
        <h2>{copy.approachTitle}</h2>
      </div>

      <div className="carousel-card motion-card motion-hover">
        <div className="carousel-copy" aria-live="polite">
          <p className="carousel-eyebrow">{currentSlide.eyebrow}</p>
          <h3>{currentSlide.title}</h3>
          <p>{currentSlide.description}</p>
          <div className="tag-list">
            {currentSlide.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="carousel-side motion-card motion-hover">
          <div className="pixel-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="carousel-controls" aria-label={copy.carouselLabel}>
            {copy.slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSlide ? 'dot active' : 'dot'}
                aria-label={`${copy.showSlide} ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DeliverySection({ copy }) {
  return (
    <section className="delivery-section section-band band-aqua" aria-labelledby="delivery-title">
      <div className="delivery-layout">
        <div className="delivery-copy motion-card">
          <p className="eyebrow">{copy.deliveryEyebrow}</p>
          <h2 id="delivery-title">{copy.deliveryTitle}</h2>
          <p>{copy.deliveryIntro}</p>
          <p>
            {copy.deliveryConnection[0]}
            <strong>{copy.deliveryConnection[1]}</strong>
            {copy.deliveryConnection[2]}
          </p>
          <p>
            {copy.deliveryIdentity[0]}
            <strong>{copy.deliveryIdentity[1]}</strong>
            {copy.deliveryIdentity[2]}
          </p>
        </div>

        <figure className="delivery-image motion-card motion-hover">
          <img
            src={`${import.meta.env.BASE_URL}delivery-work.jpg`}
            alt={copy.deliveryImageAlt}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}

function ApproachAndDelivery({ copy }) {
  return (
    <>
      <ApproachSection copy={copy} />
      <DeliverySection copy={copy} />
    </>
  )
}

export default ApproachAndDelivery
