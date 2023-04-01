import './style.css'
import { useContext } from 'react'
import { LanguageContext } from '../../app'

type Props = {
  profileImagePath: string
}
const About = ({ profileImagePath }: Props) => {
  const { isSwitched, setIsSwitched } = useContext(LanguageContext)

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="title">ABOUT</h2>
        <div className="profile">
          <p className="profile-img">
            <img src={profileImagePath} alt="" />
          </p>
          {createProfileBody(isSwitched)}
        </div>
      </div>
    </section>
  )
}

const createProfileBody = (isEnglish: boolean) => {
  if (isEnglish) {
    return (
      <div className="profile-body">
        <p>Chatting and snowboarding lover living in Hyogo prefecture.</p>
        <p>Currently, I am improving the UI/UX of EC sites and its modernizing as a web front-end engineer.</p>
        <p>In the last six months, I was struggling in outside of front-end. For example, improving local develop environment with WSL2/DockerCE for in-house developer, refactoring regacy JavaScript codes on frontend, and improving the E2E test environment.</p>
        Career(roughly)
        <br></br>
        ・I am bachelor/master on computer science at the University of Tsukuba
        <br></br>
        ・Gained practical experience as an iOS engineer for a year and a half when I was a master's student
        <br></br>
        ・Work hard as a web engineer at a certain EC company with a cute name
      </div>
    )
  }
  return (
    <div className="profile-body">
      <p>おしゃべりとスノーボードが好きなアラサー兵庫県民。</p>
      <p>現在、WebフロントエンドのエンジニアとしてECサイトのUI/UX改善やモダナイゼーションをしています。</p>
      <p>直近半年は、WSL2とDockerCEを用いた開発者のローカル開発環境整備、レガシーフロントエンドのリファクタリング、E2Eテスト環境の改善に携わり、Webフロントエンド以外の領域でも奮闘しておりました。</p>
      経歴(ざっくり)
      <br></br>
      ・学士と修士の計6年間、筑波大学でコンピュータサイエンスを学ぶ
      <br></br>
      ・修士学生の頃、1年半iOSエンジニアとして実務経験を積む
      <br></br>
      ・社名の可愛い某EC企業にてWebエンジニアとして業務に励む
    </div>
  )
}

export default About
