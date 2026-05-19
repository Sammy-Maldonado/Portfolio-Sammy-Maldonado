import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const NAV_ITEMS = [
  { key: 'home',           id: 'hero',           icon: 'bx bx-home' },
  { key: 'about',          id: 'about',          icon: 'bx bx-user' },
  { key: 'skills',         id: 'skills',         icon: 'bx bx-book' },
  { key: 'agentic',        id: 'agentic',        icon: 'bx bx-bot' },
  { key: 'experience',     id: 'experience',     icon: 'bx bx-file-blank' },
  { key: 'projects',       id: 'projects',       icon: 'bx bx-book-content' },
  { key: 'certifications', id: 'certifications', icon: 'bx bx-award' },
  { key: 'contact',        id: 'contact',        icon: 'bx bx-envelope' },
]

export default function Header() {
  const { t, toggleLang } = useLang()
  const [activeId, setActiveId] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 120) {
          setActiveId(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }
    return () => document.body.classList.remove('mobile-nav-active')
  }, [mobileOpen])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="mobile-nav-toggle bi bi-list"
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(v => !v)}
      />

      <header id="header">
        <div className="d-flex" style={{ flexDirection: 'column' }}>

          {/* Profile */}
          <div className="profile">
            <img src="/profile-img.jpg" alt="Sammy Maldonado" className="img-fluid" />
            <h1 className="text-light">
              <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero') }}>
                Sammy Maldonado
              </a>
            </h1>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sammy-maldonado/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bx bxl-linkedin" />
              </a>
              <a href="mailto:sammy.maldodev@gmail.com" aria-label="Email">
                <i className="bx bxl-gmail" />
              </a>
              <a href="https://github.com/Sammy-Maldonado" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bx bxl-github" />
              </a>
              <a href="https://wa.me/353834872041" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bx bxl-whatsapp" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              {NAV_ITEMS.map(item => (
                <li key={item.key}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link scrollto${activeId === item.id ? ' active' : ''}`}
                    onClick={e => { e.preventDefault(); scrollTo(item.id) }}
                  >
                    <i className={item.icon} />
                    <span>{t.nav[item.key]}</span>
                  </a>
                </li>
              ))}

              {/* Language switcher — same visual as a nav item */}
              <li>
                <button className="lang-btn" onClick={toggleLang} aria-label="Switch language">
                  <i className="bx bx-globe" />
                  <span>{t.nav.language}</span>
                </button>
              </li>
            </ul>
          </nav>

        </div>
      </header>
    </>
  )
}
