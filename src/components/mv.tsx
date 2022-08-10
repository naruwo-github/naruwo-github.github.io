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
      </div>
    </div>
  )
}

export default Mv
