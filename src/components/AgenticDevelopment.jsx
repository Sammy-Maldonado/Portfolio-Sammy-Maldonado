import { useLang } from '../context/LanguageContext'

export default function AgenticDevelopment() {
  const { t } = useLang()
  const a = t.agentic

  return (
    <section id="agentic" className="section">
      <div className="container">
        <h2 className="section__title">{a.title}</h2>
        <p className="agentic__summary">{a.summary}</p>
        <ul className="agentic__points" role="list">
          {a.points.map((point, i) => (
            <li key={i} className="agentic__point">
              <span className="agentic__bullet" aria-hidden="true">→</span>
              {point}
            </li>
          ))}
        </ul>
        <div className="agentic__tools">
          {a.tools.map(tool => (
            <span key={tool} className="tool-badge">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
