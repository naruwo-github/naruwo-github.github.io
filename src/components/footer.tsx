import { author } from '../config/env'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">&copy;{author}</div>
    </footer>
  )
}

export default Footer
