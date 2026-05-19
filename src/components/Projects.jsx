import { useLang } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>{p.title}</h2>
        </div>

        <div className="row">
          {p.items.map((project, i) => (
            <div className="col-lg-12" key={i}>
              <div className="project-card-inner">
                <span className="project-status-badge">{project.status}</span>
                <h4>{project.name} — <span style={{ fontWeight: 400 }}>{project.subtitle}</span></h4>
                <p className="project-type">{project.type}</p>
                <p>{project.description}</p>
                <ul>
                  {project.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="project-tech-stack">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-github" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
