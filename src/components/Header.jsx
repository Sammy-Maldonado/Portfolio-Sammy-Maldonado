import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_SECTIONS = ['home', 'about', 'skills', 'agentic', 'experience', 'projects', 'certifications', 'contact']
const SECTION_IDS = { home: 'hero', about: 'about', skills: 'skills', agentic: 'agentic', experience: 'experience', projects: 'projects', certifications: 'certifications', contact: 'contact' }

export default function Header() {
  const { t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_SECTIONS.map(key => document.getElementById(SECTION_IDS[key])).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 100) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="nav__brand" href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero') }}>
          SM
        </a>

        <ul className={`nav__list${menuOpen ? ' nav__list--open' : ''}`} role="list">
          {NAV_SECTIONS.map(key => (
            <li key={key}>
              <a
                href={`#${SECTION_IDS[key]}`}
                className={`nav__link${activeSection === SECTION_IDS[key] ? ' nav__link--active' : ''}`}
                onClick={e => { e.preventDefault(); scrollTo(SECTION_IDS[key]) }}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`hamburger${menuOpen ? ' hamburger--open' : ''}`} />
        </button>
      </nav>
    </header>
  )
}
