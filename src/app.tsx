import './common/ress.css'
import './common/style.css'
import './common/script'
import Header from './header/header'
import { DISPLAY_NAME, AUTHOR, TITLE, URL_GITHUB, URL_HATENA, URL_QIITA } from './config/env'
import Mv from './contents/mv/mv'
import profileImg from './assets/myself.png'
import About from './contents/about/about'
import worksItems from "./config/worksItems"
import Works from './contents/works/works'
import skillItems from './config/skillItems'
import Skill from './contents/skill/skill'
import { MAIL, URL_INSTAGRAM } from './config/env'
import Contact from './contents/contact/contact'
import Footer from './footer/footer'
import { createContext, useState } from 'react'

type Context = {
  isSwitched: boolean
  setIsSwitched: React.Dispatch<React.SetStateAction<boolean>>
}

export const LanguageContext = createContext<Context>({
  isSwitched: false,
  setIsSwitched: (boolean) => { }
})

const App = () => {
  const [isSwitched, setIsSwitched] = useState<boolean>(false)
  return (
    <LanguageContext.Provider value={{ isSwitched, setIsSwitched }}>
      <Header />
      <main className="content">
        <Mv displayName={DISPLAY_NAME} title={TITLE} urlGithub={URL_GITHUB} urlHatena={URL_HATENA} urlQiita={URL_QIITA} />
        <About profileImagePath={profileImg} />
        <Works worksItems={worksItems} />
        <Skill skillItems={skillItems} />
        <Contact mail={MAIL} urlInstagram={URL_INSTAGRAM} />
        <div id="scroller-page-top" className="move-to-top">
          <span className="material-icons-outlined">expand_less</span>
        </div>
      </main>
      <Footer author={AUTHOR} />
    </LanguageContext.Provider>
  )
}

export default App