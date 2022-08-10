import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Mv from './components/mv'
import About from './components/about'
import Works from './components/works'
import Skill from './components/skill'
import Contact from './components/contact'
import Footer from './components/footer'

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
      <div className="page-top" id="js-page-top">
        <span className="material-icons-outlined">expand_less</span>
      </div>
    </main>
    <Footer/>
  </React.StrictMode>
)
