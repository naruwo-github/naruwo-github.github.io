import iconSkill from '../../public/assets/icon_skill.png'

const skillItems = [
  {
    img: iconSkill,
    name: 'Computer Science',
    text: [
      '学士と修士の計6年間コンピュータサイエンスを専攻していました。コンピュータサイエンスに関して造詣を深めております。'
    ]
  },
  {
    img: iconSkill,
    name: 'Standard tools for software development',
    text: [
      'Git, Docker, Shell Script, Google Workspaceなどの理解と経験があります。'
    ]
  },
  {
    img: iconSkill,
    name: 'Knowledge of development methods',
    text: [
      'BDD(振る舞い駆動開発)やTDD(テスト駆動開発)などの基本的な理解があります。それらの知見を踏まえ、品質の高いプログラムを作成するよう常に心がけております。',
      'Robot Framework, Jest, react-testing-library, Pytestなどのフレームワークの経験があります。'
    ]
  },
  {
    img: iconSkill,
    name: 'Frontend Engineering',
    text: [
      'HTML5/CSS3, JavaScript/TypeScript, React.js, Next.js, npm/yarn, Webpack/Parcelなどの理解と経験があります。',
      '主観となりますがJavaScriptとTypeScriptは最も好き、そして最も得意な言語です。',
      'モジュールバンドラーは、既に実行環境が整った状態でその拡張を行うだけでなく、何もない状態から環境構築をした経験が複数回あります。'
    ]
  },
  {
    img: iconSkill,
    name: 'Mobile Engineering',
    text: [
      'Swift, Kotlin, Dart(flutter)の3つの技術を用いて、iOS/Androidアプリ開発を経験しています。',
      '特にiOSは5年以上の学習経験と2年程度の実務経験があるため、モノ作りに貢献できる自信があります。'
    ]
  },
  {
    img: iconSkill,
    name: 'Backend Engineering',
    text: [
      'ApacheやNginxを活用してWebサーバを立ち上げることができます。また、MySQLやMongoDBを活用しRDBMS/NoSQLのDBサーバを立ち上げることができます。'
    ]
  },
  {
    img: iconSkill,
    name: 'DevOps Engineering',
    text: [
      'Jenkinsを活用し、CI/CDパイプラインの構築ができます。',
      'VMインスタンスを立ち上げる、Webサーバやミドルウェアのログ監視を行う程度ですがAWSとGCPの経験があります。'
    ]
  }
]

const Skill = () => {
  return (
          <section className="skill section" id="skill">
        <div className="container">
          <h2 className="title">SKILL</h2>
          <div className="skill-list">
            {skillItems.map((item, index) => (
            <div key={index} className="skill-item">
              <p className="skill-img"><img src={item.img} alt=""/></p>
              <div className="skill-body">
                <h3 className="skill-name">{item.name}</h3>
                {item.text.map((sentence, index) => (
                <p key={index} className="skill-text">{sentence}</p>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skill
