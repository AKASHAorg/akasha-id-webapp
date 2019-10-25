import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components'

const onMobile = (
  content: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>,
) => css`
  @media (max-width: 1443px) {
    ${content}
  }
`

export default onMobile
