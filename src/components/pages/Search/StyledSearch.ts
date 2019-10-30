import styled, { css } from 'styled-components'

import { screen } from '../../../styles'

const MobileSearchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  margin-right: 8px;
`

const MobileSearchInput = styled.input`
  border: 0;
  outline: 0;
  font-family: 'HK Grotesk Medium';
  letter-spacing: -0.2px;
  color: #2b2e33;
  padding: 0;
  height: 18px;
  margin-left: 8px;
  flex-grow: 1;
`

const MobileSearchClose = styled.button`
  border: 0;
  outline: 0;
  width: 24px;
  height: 21px;
  padding: 0;
  background: transparent;
`

const PageContainer = styled.div`
  ${screen.onMobile(css`
    margin: 88px 24px 24px 24px;
  `)}
`

const SearchHeader = styled.h4`
  font-family: 'HK Grotesk Medium';
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.2px;
  font-weight: 500;
  color: #a0a7b3;
  text-transform: uppercase;
  margin-bottom: 16px;

  :not(:first-child) {
    margin-top: 32px;
  }
`

export { MobileSearchLabel, MobileSearchInput, MobileSearchClose, PageContainer, SearchHeader }
