import styled from 'styled-components'

const MobileTopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(46, 55, 71, 0.1);
  opacity: 0.99;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 10;

  @media (min-width: 1444px) {
    display: none;
  }
`

const BackButton = styled.button`
  top: 18px;
  left: 16px;
  width: 21px;
  height: 21px;
  padding: 0;
  background: transparent;
  border: none;
  position: absolute;
`

const TopContainerLabel = styled.div`
  flex-grow: 1;
  color: ${props => props.theme.colors.dark};
  font-family: 'HK Grotesk Medium';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.25px;
  text-align: center;
`

const PageContainer = styled.div`
  @media (max-width: 1443px) {
    width: 100%;
    padding: 88px 24px 24px 24px;
    box-sizing: border-box;
  }
`

const DeleteContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  background: #fafafa;
  border-radius: ${props => props.theme.shapes.borderRadius};
  padding: 16px;
  margin-top: 56px;

  @media (min-width: 1444px) {
    display: none;
  }
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

export {
  MobileTopContainer,
  BackButton,
  TopContainerLabel,
  PageContainer,
  DeleteContainer,
  DeleteHeader,
  DeleteText,
}
