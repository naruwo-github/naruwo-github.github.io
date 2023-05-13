import './style.css'
import { useContext } from 'react'
import { LanguageContext } from '../../app'

type Props = {
  displayName: string
  title: string
  urlGithub: string
  urlHatena: string
  urlQiita: string
}

const Mv = ({ displayName, title, urlGithub, urlHatena, urlQiita }: Props) => {
  const { isSwitched, setIsSwitched } = useContext(LanguageContext)

  return (
    <div className="mv">
      <div className="mv-container">
        <p className="mv-title">{displayName}</p>
        <p className="mv-subtitle">{title}</p>
        <p className="mv-text">
          {isSwitched
            ? 'I make you satisfied with by creating some applications/softwares.'
            : 'Web、スマホ問わず満足できるアプリケーションの開発をします。'
          }
        </p>
        <p className="mv-text">
          {isSwitched && 'I am good at '}
          <a href="#skill">SKILL</a>
          {!isSwitched && 'に関連してはおまかせください。'}
        </p>
        <br />
        <br />
        <p className="mv-text">
          <a href={urlGithub} target="_blank" rel="noopener">Github</a>
          , <a href={urlHatena} target="_blank" rel="noopener">はてなブログ</a>
          , <a href={urlQiita} target="_blank" rel="noopener">Qiita</a>
          {isSwitched
            ? ' are also my portfolio, so please take a look :)'
            : 'にて情報発信しています。'
          }
        </p>
      </div>
    </div>
  )
}

export default Mv
