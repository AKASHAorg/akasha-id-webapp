import lightTheme from '@akashaproject/design-system/dist/styles/themes/light-theme'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    blue: '#2E3747',
    darkBlue: '#2E3747',
  },
  shapes: {
    ...lightTheme.shapes,
    fontFamily: '"SF UI Text Regular", Arial, sans-serif',
  },
  spacing: {
    ...lightTheme.spacing,
    fontSize: '13px',
    lineHeight: '18px',
    components: {
      ...lightTheme.spacing.components,
      input: {
        borderSize: '1px',
        fontSize: '13px',
        iconPadding: '0px',
        lineHeight: '18px',
        padding: '7px 12.55px',
      },
      button: {
        borderWidth: '2px',
        fontSize: {
          normal: '13px',
          small: '13px',
        },
        padding: {
          normal: '7px 10px',
          small: '7px 10px',
        },
      },
    },
  },
}

export default theme
