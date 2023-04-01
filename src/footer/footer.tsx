import { StyledFooter, StyledDiv } from './style'

type Props = {
  author: string
}

const Footer = ({ author }: Props) => {
  return (
    <StyledFooter className="footer">
      <StyledDiv className="copyright">&copy;{author}</StyledDiv>
    </StyledFooter>
  )
}

export default Footer