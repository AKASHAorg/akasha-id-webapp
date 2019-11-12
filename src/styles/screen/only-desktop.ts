import { css } from 'styled-components'

import onMobile from './on-mobile'

const onlyDesktop = onMobile(css`
  display: none;
`)

export default onlyDesktop
