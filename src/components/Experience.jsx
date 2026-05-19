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
            <h3 className="resume-title">{e.title}</h3>
            {e.items.map((job, i) => (
              <div className="resume-item" key={i}>
                <h4>{job.role}</h4>
                <h5>{job.dates}</h5>
                <p><em>{job.company}</em></p>
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
