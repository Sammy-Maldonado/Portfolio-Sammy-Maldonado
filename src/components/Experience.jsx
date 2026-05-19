import { useLang } from '../context/LanguageContext'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{e.title}</h2>
        <div className="experience__list">
          {e.items.map((job, i) => (
            <article key={i} className="experience__item">
              <div className="experience__header">
                <div>
                  <h3 className="experience__company">{job.company}</h3>
                  <p className="experience__role">{job.role}</p>
                </div>
                <span className="experience__dates">{job.dates}</span>
              </div>
              <ul className="experience__bullets" role="list">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
