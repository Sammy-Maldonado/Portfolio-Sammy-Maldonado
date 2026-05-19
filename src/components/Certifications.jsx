import { useLang } from '../context/LanguageContext'

export default function Certifications() {
  const { t } = useLang()
  const c = t.certifications

  return (
    <section id="certifications" className="resume section-bg">
      <div className="container">

        <div className="section-title">
          <h2>{c.title}</h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h3 className="resume-title">{c.title}</h3>
            {c.items.map((cert, i) => (
              <div className="resume-item" key={i}>
                <h4>{cert.name}</h4>
                <h5>{cert.year}</h5>
                <p><em>{cert.issuer}</em></p>
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
