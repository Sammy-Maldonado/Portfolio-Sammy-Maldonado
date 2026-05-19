import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>{a.title}</h2>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="/profile-img.jpg" className="img-fluid" alt="Sammy Maldonado" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{a.role}</h3>
            <p className="fst-italic">{a.tagline}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {a.infoLeft.map(item => (
                    <li key={item.label}>
                      <i className="bi bi-chevron-right" />
                      <strong>{item.label}:</strong>
                      <span>
                        {item.href
                          ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.value}</a>
                          : item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {a.infoRight.map(item => (
                    <li key={item.label}>
                      <i className="bi bi-chevron-right" />
                      <strong>{item.label}:</strong>
                      <span>
                        {item.href
                          ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.value}</a>
                          : item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
