import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import AgenticDevelopment from './components/AgenticDevelopment'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './styles/iportfolio.css'
import './styles/additions.css'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <AgenticDevelopment />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      {/* Footer removed — copyright shown in sidebar via iPortfolio fixed footer */}
    </LanguageProvider>
  )
}
