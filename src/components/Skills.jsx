import { useLang } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{s.title}</h2>
        <div className="skills__grid">
          {s.groups.map(group => (
            <div key={group.name} className="skill-group">
              <h3 className="skill-group__name">{group.name}</h3>
              <ul className="skill-group__list" role="list">
                {group.items.map(item => (
                  <li key={item} className="skill-tag">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
