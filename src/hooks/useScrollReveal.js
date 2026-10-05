import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    let sectionObserver
    let motionObserver
    const section = document.querySelector('.smartfarma-section')

    if (section) {
      if (!('IntersectionObserver' in window)) {
        section.classList.add('is-visible')
      } else {
        sectionObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sectionObserver.disconnect()
          }
        }, { threshold: 0.15 })

        sectionObserver.observe(section)
      }
    }

    const motionCards = [...document.querySelectorAll('.motion-card')]

    if (!('IntersectionObserver' in window)) {
      motionCards.forEach((card) => card.classList.add('is-visible'))
    } else if (motionCards.length) {
      motionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            motionObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })

      motionCards.forEach((card) => motionObserver.observe(card))
    }

    return () => {
      sectionObserver?.disconnect()
      motionObserver?.disconnect()
    }
  }, [])
}
