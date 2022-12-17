import './style.css'
import { AUTHOR, TITLE, URL_GITHUB, URL_HATENA, URL_QIITA } from '../../config/env'
import { useContext } from 'react'
import { LanguageContext } from '../../app'

const Mv = () => {
  const { isSwitched, setIsSwitched } = useContext(LanguageContext)

  return (
    <div className="mv">
      <div className="mv-container">
        <p className="mv-title">{AUTHOR}</p>
        <p className="mv-subtitle">{TITLE}</p>
        <p className="mv-text">
          {isSwitched
            ? 'I make you satisfied with by creating some applications/softwares.'
            : 'ユーザーとお客様が心から満足できるアプリケーション/ソフトウェアをお作りいたします。'
          }
        </p>
        <p className="mv-text">
          {isSwitched && 'I am good at coding related to '}
          <a href="#skill">SKILL</a>
          {!isSwitched && 'に関連するコーディングはおまかせください。'}
        </p>
        <br />
        <br />
        <p className="mv-text">
          <a href={URL_GITHUB} target="_blank" rel="noopener">Github</a>
          , <a href={URL_HATENA} target="_blank" rel="noopener">はてなブログ</a>
          , <a href={URL_QIITA} target="_blank" rel="noopener">Qiita</a>
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
