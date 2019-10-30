import styled, { css } from 'styled-components'

import { fonts, screen } from '../../../styles'
import { MobilePageContainer } from '../../shared/MobilePageContainer'

const StyledMobilePageContainer = styled(MobilePageContainer)`
  ${screen.onMobile(css`
    padding-top: 84px;
  `)}
`

const DeleteContainer = styled.div`
  ${screen.onlyMobile}

  margin-top: 32px;
`

const DeleteHeader = styled.h3`
  ${fonts.textLabel}

  margin: 0;
`

const DeleteText = styled.p`
  ${fonts.greyText}

  margin: 8px 0 16px 0;
`

export { StyledMobilePageContainer, DeleteContainer, DeleteHeader, DeleteText }
