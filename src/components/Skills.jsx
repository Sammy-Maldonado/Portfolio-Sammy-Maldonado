import { useLang } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  const leftBars = s.bars.slice(0, Math.ceil(s.bars.length / 2))
  const rightBars = s.bars.slice(Math.ceil(s.bars.length / 2))

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>{s.title}</h2>
          <p>{s.intro}</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            {leftBars.map(bar => (
              <div className="progress" key={bar.name}>
                <span className="skill">
                  {bar.name}
                  <i className="val">{bar.pct}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={bar.pct}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${bar.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {rightBars.map(bar => (
              <div className="progress" key={bar.name}>
                <span className="skill">
                  {bar.name}
                  <i className="val">{bar.pct}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={bar.pct}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${bar.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
