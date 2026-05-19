import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>{c.title}</h2>
          <p>{c.description}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-card">
              {c.items.map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-icon">
                    <i className={item.icon} />
                  </div>
                  <div className="contact-text">
                    <h4>{item.label}</h4>
                    <p>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.value}</a>
                        : item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
