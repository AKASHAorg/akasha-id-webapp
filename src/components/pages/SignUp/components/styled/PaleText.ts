import styled from 'styled-components'

const PaleText = styled.p`
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.shapes.fontFamily};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  margin: 0;
`

export default PaleText
