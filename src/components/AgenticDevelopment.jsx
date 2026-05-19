import { useLang } from '../context/LanguageContext'

export default function AgenticDevelopment() {
  const { t } = useLang()
  const a = t.agentic

  return (
    <section id="agentic" className="agentic">
      <div className="container">

        <div className="section-title">
          <h2>{a.title}</h2>
          <p className="agentic-intro">{a.summary}</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul className="agentic-points">
              {a.points.map((point, i) => (
                <li key={i}>
                  <i className="bi bi-chevron-right" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="agentic-tools">
              {a.tools.map(tool => (
                <span key={tool} className="tool-chip">{tool}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
