import './style.css'
import worksItems from "./worksItems"

const Works = () => {
  return (
    <section className="works section" id="works">
      <div className="container">
        <h2 className="title">WORKS</h2>
        <div className="works-list">
          {worksItems.map((item, index) => (
          <a key={index} className="works-item" href={item.ref}>
            <div className="works-img"><img src={item.img} alt=""/></div>
            <p className="works-name">{item.name}</p>
            <p className="works-info">{item.info}</p>
          </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
