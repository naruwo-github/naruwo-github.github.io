import './style.css'
import skillItems from "./skillItems"
import { useContext } from 'react'
import { LanguageContext } from '../../app'

const Skill = () => {
  const {isSwitched, setIsSwitched} = useContext(LanguageContext)

  return (
    <section className="skill section" id="skill">
      <div className="container">
        <h2 className="title">SKILL</h2>
        <div className="skill-list">
          {skillItems.map((item, index) => (
          <div key={index} className="skill-item">
            <p className="skill-img"><img src={item.img} alt=""/></p>
            <div className="skill-body">
              <h3 className="skill-name">{item.name}</h3>
              {isSwitched
              ? item.textEn.map((sentence, index) => (
                <p key={index} className="skill-text">{sentence}</p>
                ))
              : item.textJp.map((sentence, index) => (
                <p key={index} className="skill-text">{sentence}</p>
                ))
              }
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
