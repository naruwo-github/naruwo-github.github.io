import { AUTHOR } from '../config/env'
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">&copy;{AUTHOR}</div>
    </footer>
  )
}

export default Footer