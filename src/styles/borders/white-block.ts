import { css } from 'styled-components'

const whiteBlock = (padding: string = '17px', withShadow: boolean = false) => css`
  box-sizing: border-box;
  border: 1px solid #edf0f5;
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
  padding: ${padding};

  ${withShadow &&
    css`
      box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);
    `}
`

export default whiteBlock
