import styled, { css } from 'styled-components'

import { screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const StyledMobilePageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 84px;
  `)}
`

const DeleteContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  background: #fafafa;
  border-radius: ${props => props.theme.shapes.borderRadius};
  padding: 16px;
  margin-top: 56px;

  ${screen.onlyMobile}
`

const DeleteHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  line-height: 12px;
  font-size: 10px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0;
`

const DeleteText = styled.p`
  font-family: 'HK Grotesk Medium';
  line-height: 18px;
  font-size: 13px;
  letter-spacing: -0.2px;
  color: #a0a7b3;
  margin: 8px 0 14px 0;
`

export { StyledMobilePageContainer, DeleteContainer, DeleteHeader, DeleteText }
