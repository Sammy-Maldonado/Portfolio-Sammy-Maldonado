import { useLang } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">{p.title}</h2>
        <div className="projects__grid">
          {p.items.map((project, i) => (
            <article key={i} className="project-card">
              <div className="project-card__header">
                <div>
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                </div>
                <span className="project-card__status">{project.status}</span>
              </div>
              <p className="project-card__type">{project.type}</p>
              <p className="project-card__description">{project.description}</p>
              <ul className="project-card__highlights" role="list">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="project-card__stack">
                {project.stack.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline project-card__link"
              >
                GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
