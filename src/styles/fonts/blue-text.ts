import { css } from 'styled-components'

const blueText = css`
  color: ${props => props.theme.colors.blue};
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  font-family: 'HK Grotesk Medium';
  text-decoration: none;

  :hover,
  :visited {
    color: ${props => props.theme.colors.blue};
  }
`

export default blueText
