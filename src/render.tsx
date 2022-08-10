import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header/header'
import Mv from './contents/mv'
import About from './contents/about'
import Works from './contents/works'
import Skill from './contents/skill'
import Contact from './contents/contact'
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
