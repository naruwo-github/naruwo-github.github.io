import React from 'react'
import ReactDOM from 'react-dom/client'
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

const domContent = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(domContent)
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
)
