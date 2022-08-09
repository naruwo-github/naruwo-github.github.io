import profileImg from '../../public/assets/profile.jpg'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="title">ABOUT</h2>
        <div className="profile">
          <p className="profile-img">
            <img src={profileImg} alt=""/>
          </p>
          <div className="profile-body">
            <p>執筆中。</p>
            <p>執筆中。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
