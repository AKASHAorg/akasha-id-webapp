import { css, FlattenSimpleInterpolation } from 'styled-components'

const onDesktop = (content: FlattenSimpleInterpolation) => css`
  @media (min-width: 1444px) {
    ${content}
  }
`

export default onDesktop
