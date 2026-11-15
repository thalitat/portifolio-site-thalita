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
            <a className="primary-btn" href="#projetos">{copy.projectsCta}</a>
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

        <div className="hero-visual">
          <div className="visual-card">
            <div className="pixel-spark pixel-spark-one" aria-hidden="true" />
            <div className="pixel-spark pixel-spark-two" aria-hidden="true" />

            <div className="visual-level">
              <span className="level-dot" />
              <span>{copy.levelLabel}</span>
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
              <div className="phase-witch" aria-hidden="true">
                <svg viewBox="0 0 64 88" role="presentation">
                  <g stroke="#071b33" strokeLinejoin="round" strokeWidth="2">
                    <path d="M22 22c-9 5-12 17-11 29l-5 8 9-3 3 12 7-10 17 5 7-11-6-25Z" fill="#d94f32" />
                    <path d="M23 39c-7-2-11 2-15 9m31-9c7-1 10 3 13 8" fill="none" stroke="#f1bf96" strokeLinecap="round" strokeWidth="4" />
                    <path d="m23 38-7 27q16 11 33 0l-8-28Z" fill="#2868c7" />
                    <path d="m25 42 7 8 8-8m-17 20q9 5 19 0" fill="none" stroke="#a7f3e9" strokeLinecap="round" strokeWidth="2" />
                    <path d="m23 62-4 15m17-15 4 15" fill="none" stroke="#f1bf96" strokeLinecap="round" strokeWidth="4" />
                    <path d="m16 77 7 1m14-1 7 1" fill="none" stroke="#071b33" strokeLinecap="round" strokeWidth="4" />
                    <path d="M21 18c-2 8-1 18 5 22l6-4 7 4c7-7 8-19 2-25Z" fill="#d94f32" />
                    <path d="M23 20c0-8 5-13 12-12 7 1 10 7 8 14l-4 11q-7 7-14 0Z" fill="#f1bf96" />
                    <path d="M25 25q4-4 8 0m3 0q4-4 7 0" fill="none" stroke="#3374a9" strokeLinecap="round" strokeWidth="2" />
                    <ellipse cx="30" cy="27" rx="2.2" ry="3.3" fill="#27678b" stroke="none" />
                    <ellipse cx="40" cy="27" rx="2.2" ry="3.3" fill="#27678b" stroke="none" />
                    <circle cx="30.7" cy="26.2" r="0.8" fill="#fff" stroke="none" />
                    <circle cx="40.7" cy="26.2" r="0.8" fill="#fff" stroke="none" />
                    <path d="m30 33q3 3 6 0" fill="none" stroke="#a94d45" strokeLinecap="round" strokeWidth="1.5" />
                    <path d="m18 19 13-16 17 17q-14 5-30-1Z" fill="#284ca8" />
                    <path d="M18 19q13 6 30 1" fill="none" stroke="#f2c65d" strokeLinecap="round" strokeWidth="3" />
                    <path d="m31 10 2 3 3 .5-2.5 2-.5 3-2-2.5-3-.5 2.5-2Z" fill="#f2c65d" stroke="none" />
                    <path d="m52 35 2 4 4 1.5-4 1.5-2 4-1.5-4-4-1.5 4-1.5Z" fill="#ffe38a" stroke="none" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="palette-row" aria-label={copy.paletteLabel}>
              {palette.map((color) => (
                <span
                  key={color}
                  className="color-swatch"
                  style={{ background: color, '--swatch-original': color }}
                  title={color}
                />
              ))}
            </div>

            <p className="pixel-caption">{copy.createCaption}</p>
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
            <p className="smartfarma-note">{featuredProject.note}</p>
            <div className="tag-list">
              {featuredProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
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
