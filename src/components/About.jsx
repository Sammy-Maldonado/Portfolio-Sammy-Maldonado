import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">{a.title}</h2>
        <div className="about__content">
          {a.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
