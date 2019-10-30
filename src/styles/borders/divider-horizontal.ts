import { css } from 'styled-components'

const dividerHorizontal = (topGap: string, bottomGap: string) =>
  css`
    flex-grow: 1;
    border-top: 1px solid #edf0f5;
    width: 100%;
    height: 0;
    margin: ${topGap} 0 ${bottomGap} 0;
  `

export default dividerHorizontal
