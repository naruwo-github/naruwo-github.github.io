import { author } from '../config/env'
import './style.css'
import navigationItems from './navigationItems'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-logo">
          <a href=".">{author}</a>
        </h1>
        <nav className="gnav">
          <ul className="gnav-list">
            {navigationItems.map((item, index) => (
            <li key={index} className="gnav-item">
              <a href={item.ref}>{item.val}</a>
            </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
