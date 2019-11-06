import styled, { css } from 'styled-components'

import { screen } from '../../../../styles'
import { MobilePageContainer } from '../../../shared/MobilePageContainer'

const StyledPageContainer = styled(MobilePageContainer)`
  ${screen.onlyMobile}

  ${screen.onMobile(css`
    padding-bottom: 96px;
  `)}
`

const PhotoContainer = styled.div`
  border: 2px solid #edf0f5;
  border-radius: 4px;
  width: 120px;
  height: 120px;
  overflow: hidden;

  > img {
    width: 120px;
    height: 120px;
  }
`

const PictureContainer = styled.div`
  border: 1px solid #edf0f5;
  width: 100%;
  overflow: hidden;
  opacity: 0.99;

  > img {
    width: 100%;
    min-height: 120px;
    max-height: 160px;
  }
`

const FormContainer = styled.ul`
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const FormField = styled.li`
  padding: 0;
  width: 100%;
  box-sizing: border-box;

  :not(:first-child) {
    padding-top: 20px;
  }
`

const BottomContainer = styled.div`
  left: 0;
  bottom: 0;
  padding: 20px 16px;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 -1px 0 0 #edf0f5, 0 -4px 16px 0 rgba(83, 98, 124, 0.06);
`

export {
  StyledPageContainer,
  PhotoContainer,
  PictureContainer,
  FormContainer,
  FormField,
  BottomContainer,
}
