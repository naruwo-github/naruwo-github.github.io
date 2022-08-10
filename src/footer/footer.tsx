import { author } from '../config/env'
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">&copy;{author}</div>
    </footer>
  )
}

export default Footer