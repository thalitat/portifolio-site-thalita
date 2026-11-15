const smartFarmaPrototypeUrl =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkUatamJMdBu6BE3JfWM34H%2FSmartFarma%3Fnode-id%3D6-70%26p%3Df%26viewport%3D377%252C1003%252C0.31%26t%3Dkf99q8Udn8zsFCDb-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1'

function ProjectsContent({ copy }) {
  const featuredProject = copy.smartFarma

  return (
    <>
      <section className="projects-section section-band band-ice" id="projetos">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">{copy.projectsEyebrow}</p>
            <h1>{copy.projectsTitle}</h1>
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
              <h2>{title}</h2>
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
              title={`${featuredProject.title} - ${copy.prototypeEyebrow}`}
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

export default ProjectsContent
