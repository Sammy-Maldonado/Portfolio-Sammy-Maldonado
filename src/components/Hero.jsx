import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__location">📍 Ireland</p>
          <h1 className="hero__name">{h.name}</h1>
          <h2 className="hero__headline">{h.headline}</h2>
          <p className="hero__subheadline">{h.subheadline}</p>
          <p className="hero__summary">{h.summary}</p>
          <div className="hero__cta">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              {h.ctaPrimary}
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
              {h.ctaSecondary}
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="/profile-img.jpg"
            alt={`${h.name} — ${h.headline}`}
            width="320"
            height="320"
          />
        </div>
      </div>
    </section>
  )
}
