import signboardPreparing from '../../public/assets/signboard_preparing.png'

const worksItems = [
  {
    ref: 'works.html',
    img: signboardPreparing,
    name: '作品名が入る',
    info: 'Design / Coding(Responsive)'
  },
  {
    ref: 'works.html',
    img: signboardPreparing,
    name: '執筆中。。。',
    info: '執筆中。。。'
  },
  {
    ref: 'works.html',
    img: signboardPreparing,
    name: '執筆中。。。',
    info: '執筆中。。。'
  },
  {
    ref: '',
    img: '',
    name: '',
    info: ''
  }
]

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
