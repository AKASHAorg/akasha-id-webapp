import { css, FlattenSimpleInterpolation } from 'styled-components'

const onMobile = (content: FlattenSimpleInterpolation) => css`
  @media (max-width: 1443px) {
    ${content}
  }
`

export default onMobile
