import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const links = [
    { label: c.labels.email, value: c.email, href: `mailto:${c.email}`, icon: '✉' },
    { label: c.labels.linkedin, value: 'linkedin.com/in/sammy-maldonado', href: c.linkedin, icon: '💼' },
    { label: c.labels.github, value: 'github.com/Sammy-Maldonado', href: c.github, icon: '⌨' },
    { label: c.labels.whatsapp, value: '+353 83 487 2041', href: c.whatsapp, icon: '💬' },
    { label: c.labels.location, value: c.location, href: null, icon: '📍' },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">{c.title}</h2>
        <p className="contact__description">{c.description}</p>
        <ul className="contact__list" role="list">
          {links.map(link => (
            <li key={link.label} className="contact__item">
              <span className="contact__icon" aria-hidden="true">{link.icon}</span>
              <div className="contact__info">
                <span className="contact__label">{link.label}</span>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="contact__value contact__value--link"
                  >
                    {link.value}
                  </a>
                ) : (
                  <span className="contact__value">{link.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
