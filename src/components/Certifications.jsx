import { useLang } from '../context/LanguageContext'

export default function Certifications() {
  const { t } = useLang()
  const c = t.certifications

  return (
    <section id="certifications" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>{c.title}</h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {c.items.map((cert, i) => (
              <div className="resume-item" key={i}>
                <span className="resume-dates">{cert.year}</span>
                <div className="resume-item-header">
                  <span className="resume-company">{cert.name}</span>
                </div>
                <p className="resume-role">{cert.issuer}</p>
              </div>
            ))}
            <p style={{ marginTop: '16px' }}>
              <a
                href={c.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                {c.linkedinLabel} →
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
