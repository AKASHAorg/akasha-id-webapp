import { css } from 'styled-components'

import onDesktop from './on-desktop'

const onlyMobile = onDesktop(css`
  display: none;
`)

export default onlyMobile
