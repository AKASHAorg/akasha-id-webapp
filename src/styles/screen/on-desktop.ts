import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components'

const onDesktop = (
  content: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>,
) => css`
  @media (min-width: 1444px) {
    ${content}
  }
`

export default onDesktop
