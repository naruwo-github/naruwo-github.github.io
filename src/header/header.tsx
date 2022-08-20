import { AUTHOR } from '../config/env'
import './style.css'
import navigationItems from './navigationItems'
import { useContext } from 'react'
import { LanguageContext } from '../app'
import Switch from 'react-switch'
import { StyledDiv, StyledLabel } from './style'

const Header = () => {
  const {isSwitched, setIsSwitched} = useContext(LanguageContext)

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
      <StyledDiv>
        <StyledLabel>English</StyledLabel>
        <Switch
          onChange={() => { setIsSwitched(prevState => !prevState) }}
          checked={isSwitched}
        />
      </StyledDiv>
    </>
  )
}

export default Header
