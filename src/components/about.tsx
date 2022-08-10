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
            <ul>
              <li>
                学士と修士の計6年間コンピュータサイエンスを学ぶ
              </li>
              <li>
                修士学生の時、スタートアップ企業で1年半、iOSエンジニアとして勤務
              </li>
              <li>
                某EC企業にてWebフロントエンドエンジニアとして勤務(現職)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
