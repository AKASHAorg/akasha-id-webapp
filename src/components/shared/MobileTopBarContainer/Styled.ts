import styled from 'styled-components'

import { screen } from '../../../styles'

const Container = styled.div`
  ${screen.onlyMobile}

  position: fixed;
  width: 100%;
  height: 52px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 0 0 #edf0f5, 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 16px;
  z-index: 10;
`

export { Container }
