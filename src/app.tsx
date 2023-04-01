import './common/ress.css'
import './common/style.css'
import './common/script'
import Header from './header/header'
import Mv from './contents/mv/mv'
import profileImg from './assets/myself.png'
import About from './contents/about/about'
import Works from './contents/works/works'
import Skill from './contents/skill/skill'
import Contact from './contents/contact/contact'
import Footer from './footer/footer'
import { createContext, useState } from 'react'
import { AUTHOR } from './config/env'

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
      <Header author={AUTHOR} />
      <main className="content">
        <Mv />
        <About profileImagePath={profileImg} />
        <Works />
        <Skill />
        <Contact />
        <div id="scroller-page-top" className="move-to-top">
          <span className="material-icons-outlined">expand_less</span>
        </div>
      </main>
      <Footer author={AUTHOR} />
    </LanguageContext.Provider>
  )
}

export default App