import { useContext } from 'react'
import { LanguageContext } from '../../app'
import './style.css'

const Contact = () => {
  const {isSwitched, setIsSwitched} = useContext(LanguageContext)

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="title">CONTACT</h2>
        <p className="lead">
          {isSwitched
          ? 'Please contact me via SNS or email.'
          : 'お問い合わせは、SNSかメールにてお願いいたします。'
          }
        </p>
        <div className="contact-list">
          <a className="contact-item" href="https://www.instagram.com/chan_naru_way/" target="_blank" rel="noopener">Instagram</a>
          <span className="contact-item">narutyan0711@gmail.com</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
