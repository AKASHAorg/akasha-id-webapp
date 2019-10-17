import lightTheme from '@akashaproject/design-system/dist/styles/themes/light-theme'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    blue: '#4E71FF',
    darkBlue: '#4E71FF',
  },
  shapes: {
    ...lightTheme.shapes,
    fontFamily: '"HK Grotesk Medium"',
  },
  spacing: {
    ...lightTheme.spacing,
    fontSize: '13px',
    lineHeight: '18px',
    components: {
      ...lightTheme.spacing.components,
      input: {
        borderSize: '1px',
        fontSize: '15px',
        iconPadding: '0px',
        lineHeight: '20px',
        padding: '10px 12.55px',
      },
      button: {
        borderWidth: '2px',
        fontSize: {
          normal: '15px',
          small: '13px',
        },
        padding: {
          normal: '8px 16px 10px 16px',
          small: '4px 8px',
        },
      },
      popover: {
        borderWidth: '1px',
        width: 'auto',
        searchPopover: {
          padding: '4px',
          maxHeight: '100px',
          iconSize: '18px',
          iconGap: '8px',
        },
        actionPopover: {
          padding: '16px',
          buttonGap: '8px',
        },
      },
    },
  },
}

export default theme
