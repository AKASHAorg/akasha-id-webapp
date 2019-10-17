import styled from 'styled-components'

const ModalContent = styled.div`
  padding: 24px 25px 16px 23px;
  max-width: 343px;
`

const ModalHeader = styled.h1`
  font-family: 'HK Grotesk Medium';
  font-weight: 600;
  line-height: 28px;
  font-size: 20px;
  color: #132540;
  margin-bottom: 12px;
  margin-top: 0;
`

const ModalText = styled.p`
  color: #132540;
  font-family: 'HK Grotesk Medium';
  line-height: 18px;
  font-size: 13px;
  margin: 0;
`

const ModalAppsList = styled.ul`
  margin-top: 20px;
  margin-bottom: 40px;
  list-style: none;
  padding: 0;
`

const ModalAppsRow = styled.li`
  padding: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;

  :not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  :not(:first-child) {
    padding-top: 16px;
  }
`

const AppIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  border: 1px solid rgba(19, 37, 64, 0.08);
  box-sizing: border-box;

  > img {
    width: 40px;
    height: 40px;
  }
`

const AppTextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
`

const AppHeader = styled.h4`
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #132540;
  font-family: 'HK Grotesk Medium';
  margin: 0;
`

const AppDate = styled.div`
  font-family: 'HK Grotesk Medium';
  font-size: 13px;
  line-height: 18px;
  color: #949eb3;
`

const ModalButtonContainer = styled.div`
  text-align: right;

  > button:last-child {
    margin-left: 13px;
  }
`

export {
  ModalContent,
  ModalHeader,
  ModalText,
  ModalAppsList,
  ModalAppsRow,
  AppIconContainer,
  AppTextContainer,
  AppHeader,
  AppDate,
  ModalButtonContainer,
}
