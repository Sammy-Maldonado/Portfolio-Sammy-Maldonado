import { useLang } from '../context/LanguageContext'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>{e.title}</h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {e.items.map((job, i) => (
              <div className="resume-item" key={i}>
                <span className="resume-dates">{job.dates}</span>
                <div className="resume-item-header">
                  <span className="resume-company">{job.company}</span>
                </div>
                <p className="resume-role">{job.role}</p>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
