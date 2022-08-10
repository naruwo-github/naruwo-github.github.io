import { author, title } from '../config/env'

const Mv = () => {
  return (
    <div className="mv">
      <div className="mv-container">
        <p className="mv-title">{author}</p>
        <p className="mv-subtitle">{title}</p>
        <p className="mv-text">
          ユーザーとお客様が心から満足できるアプリケーション/ソフトウェアをお作りいたします。
        </p>
        <p className="mv-text">
          <a href="#skill">SKILL</a>に関連するコーディングはおまかせください。
        </p>
        <br/>
        <br/>
        <p className="mv-text">
          <a href="https://github.com/naruwo-github" target="_blank" rel="noopener">Github</a>
          , <a href="https://chan-naru.hatenablog.com/" target="_blank" rel="noopener">はてなブログ</a>
          , <a href="https://qiita.com/chan_naruwo" target="_blank" rel="noopener">Qiita</a>
          にて情報発信しています。
        </p>
      </div>
    </div>
  )
}

export default Mv
