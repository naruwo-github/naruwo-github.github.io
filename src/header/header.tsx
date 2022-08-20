import { AUTHOR } from '../config/env'
import './style.css'
import navigationItems from './navigationItems'
import Switch from 'react-switch'
import { StyledDiv, StyledLabel } from './style'

const EnglishSwitch = () => {
  return (
    <StyledDiv>
      <StyledLabel>English</StyledLabel>
      <Switch onChange={() => {}} checked={false} />
    </StyledDiv>
  )
}

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="header-logo">
            <a href=".">{AUTHOR}</a>
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
      <EnglishSwitch/>
    </>
  )
}

export default Header
