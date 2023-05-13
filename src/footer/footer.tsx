import { StyledFooter, StyledDiv } from './style'

type Props = {
  author: string
}

const Footer = ({ author }: Props) => {
  return (
    <StyledFooter className="footer">
      <StyledDiv className="copyright">&copy;2022 {author}</StyledDiv>
    </StyledFooter>
  )
}

export default Footer