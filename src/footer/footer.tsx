import { StyledFooter, StyledDiv } from './style'
import { AUTHOR } from '../config/env'

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <StyledDiv className="copyright">&copy;{AUTHOR}</StyledDiv>
    </StyledFooter>
  )
}

export default Footer