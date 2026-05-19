import { useLang } from '../context/LanguageContext'

export default function Certifications() {
  const { t } = useLang()
  const c = t.certifications

  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{c.title}</h2>
        <ul className="certs__list" role="list">
          {c.items.map((cert, i) => (
            <li key={i} className="cert-item">
              <div className="cert-item__info">
                <span className="cert-item__name">{cert.name}</span>
                <span className="cert-item__issuer">{cert.issuer}</span>
              </div>
              <span className="cert-item__year">{cert.year}</span>
            </li>
          ))}
        </ul>
        <a
          href={c.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certs__more-link"
        >
          {c.linkedinLabel} →
        </a>
      </div>
    </section>
  )
}
