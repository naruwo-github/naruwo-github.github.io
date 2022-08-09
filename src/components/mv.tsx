import { author, title } from '../config/env'

const Mv = () => {
  return (
    <div className="mv">
      <div className="mv-container">
        <p className="mv-title">{author}</p>
        <p className="mv-subtitle">{title}</p>
        <p className="mv-text">
          ユーザーとお客様が心から満足できるアプリケーション/ソフトウェアをお作りいたします。
          {/*
          <br className="sp-only">アプリケーション/ソフトウェアをお作りいたします。</br>
          */}
          <a href="#skill">SKILL</a>
          に関連するコーディングはおまかせください。
          {/*
          <br className="sp-only">おまかせください。</br>
          */}
        </p>
      </div>
    </div>
  )
}

export default Mv
