import profileImg from '../../public/assets/myself.png'

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
            <p>おしゃべりとスノーボードが好きな兵庫県在住アラサーエンジニアです。</p>
            <p>
              現在、Webフロントエンドのエンジニアという肩書で、ECサイトのUI/UX改善やモダナイゼーションを主に担当しています。
            </p>
            <p>
              直近半年は、社内業務Webアプリケーションの立ち上げから保守運用、ECサイトのE2Eテスト環境の改善、Google Analytics4の導入などに密に携わり、Webフロントエンド以外の領域でも奮闘しておりました。
            </p>
            経歴(ざっくり)
            <br></br>
            ・学士と修士の計6年間、筑波大学でコンピュータサイエンスを学ぶ
            <br></br>
            ・修士学生の時に1年半iOSエンジニアとして実務経験を積む
            <br></br>
            ・現在は、社名の可愛い某EC企業にてWebフロントエンドエンジニアとして業務に励む
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
