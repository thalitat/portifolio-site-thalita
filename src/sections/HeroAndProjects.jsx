const smartFarmaPrototypeUrl =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkUatamJMdBu6BE3JfWM34H%2FSmartFarma%3Fnode-id%3D6-70%26p%3Df%26viewport%3D377%252C1003%252C0.31%26t%3Dkf99q8Udn8zsFCDb-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1'
const palette = ['#071B33', '#102B49', '#18C6C3', '#A7F3E9', '#F5F8FA']

function HeroAndProjects({ copy }) {
  const featuredProject = copy.smartFarma

  return (
    <>
      <section className="hero-section hero-color-band" id="sobre">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.heroTitle}</h1>
          <p className="lead">{copy.heroDescription}</p>

          <div className="hero-actions">
            <a className="primary-btn" href="#servicos">{copy.servicesCta}</a>
            <a
              className="ghost-btn"
              href="https://www.linkedin.com/in/thalitaosb/"
              target="_blank"
              rel="noreferrer"
            >
              {copy.linkedin}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label={copy.brandLabel}>
          <div className="visual-card">
            <div className="pixel-spark pixel-spark-one" aria-hidden="true" />
            <div className="pixel-spark pixel-spark-two" aria-hidden="true" />
            <span className="mini-label">{copy.brandLabel}</span>

            <div className="visual-level">
              <span className="level-dot" />
              <span>LEVEL 01</span>
              <span className="level-line" />
              <span>UX / UI</span>
            </div>

            <h2>{copy.brandStatement}</h2>

            <div className="work-flow" aria-label={copy.questLabel}>
              {copy.questStages.slice(0, 3).map((stage, index) => (
                <div className="work-step" key={stage}>
                  <span className="work-step-marker" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="work-step-label">{stage}</span>
                </div>
              ))}
            </div>

            <div className="palette-row" aria-label={copy.paletteLabel}>
              {palette.map((color) => (
                <span
                  key={color}
                  className="color-swatch"
                  style={{ background: color }}
                  title={color}
                />
              ))}
            </div>

            <p className="pixel-caption">PRESS START TO CREATE</p>
          </div>
        </div>
      </section>

      <section className="stats-section section-band band-aqua" aria-label={copy.statsLabel}>
        <div className="stats-grid">
          {copy.stats.map(([value, label]) => (
            <div key={label} className="stat-item motion-card motion-hover">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section section-band band-ice" id="projetos">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">{copy.projectsEyebrow}</p>
            <h2>{copy.projectsTitle}</h2>
          </div>
          <p className="projects-intro">{copy.projectsDescription}</p>
        </div>
        <div className="projects-grid">
          {copy.projects.map(([index, title, description, href]) => (
            <article className="project-card motion-card motion-hover" key={title}>
              <span className="project-index">{index}</span>
              <div className="project-pixels" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              {href && (
                <a className="project-link" href={href} target="_blank" rel="noreferrer">
                  {copy.openPrototype} <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {featuredProject && (
        <section
          className="smartfarma-section section-band band-paper"
          aria-labelledby="smartfarma-title"
        >
          <div className="smartfarma-heading">
            <p className="eyebrow">{featuredProject.kicker}</p>
            <h2 id="smartfarma-title">{featuredProject.title}</h2>
            <p>{featuredProject.description}</p>
          </div>

          <div className="prototype-frame motion-card">
            <iframe
              src={smartFarmaPrototypeUrl}
              title={`${featuredProject.title} - protótipo navegável`}
              allow="fullscreen; clipboard-read; clipboard-write"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      )}
    </>
  )
}

export default HeroAndProjects
