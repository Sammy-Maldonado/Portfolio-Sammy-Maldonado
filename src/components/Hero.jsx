import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const TYPED_ITEMS = {
  en: ['Full-Stack Software Developer', 'Agentic Development Workflows', 'Cloud & Backend'],
  es: ['Desarrollador Full Stack', 'Flujos de Desarrollo Agéntico', 'Cloud & Backend'],
}

export default function Hero() {
  const { lang, t } = useLang()
  const [displayed, setDisplayed] = useState('')
  const [itemIndex, setItemIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setItemIndex(0)
    setCharIndex(0)
    setDeleting(false)
  }, [lang])

  useEffect(() => {
    const items = TYPED_ITEMS[lang]
    const current = items[itemIndex]

    let timeout
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setItemIndex(i => (i + 1) % items.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, itemIndex, lang])

  return (
    <section id="hero">
      <div className="hero-container" data-aos="fade-in">
        <h1>{t.hero.name}</h1>
        <p>
          <span className="typed-text">{displayed}</span>
          <span className="typed-cursor" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}
