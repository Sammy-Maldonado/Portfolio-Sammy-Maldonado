import { useLang } from '../context/LanguageContext'

export default function LanguageSwitcher() {
  const { t, toggleLang } = useLang()

  return (
    <button
      className="lang-switcher"
      onClick={toggleLang}
      aria-label="Switch language"
    >
      {t.nav.language}
    </button>
  )
}
