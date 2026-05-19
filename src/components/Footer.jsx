import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">{t.footer.text}</div>
      </div>
    </footer>
  )
}
