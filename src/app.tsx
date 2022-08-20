import './common/ress.css'
import './common/style.css'
import './common/script'
import Header from './header/header'
import Mv from './contents/mv/mv'
import About from './contents/about/about'
import Works from './contents/works/works'
import Skill from './contents/skill/skill'
import Contact from './contents/contact/contact'
import Footer from './footer/footer'
import { createContext, useState } from 'react'

export const LanguageContext = createContext()

const App = () => {
  const [isSwitched, setIsSwitched] = useState<boolean>(false)
  return (
    <LanguageContext.Provider value={{isSwitched, setIsSwitched}}>
      <Header/>
      <main className="content">
        <Mv/>
        <About/>
        <Works/>
        <Skill/>
        <Contact/>
        <div id="scroller-page-top" className="move-to-top">
          <span className="material-icons-outlined">expand_less</span>
        </div>
      </main>
      <Footer/>
    </LanguageContext.Provider>
  )
}

export default App