import styled from 'styled-components'

const AccountHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  font-weight: 500;

  @media (max-width: 1443px) {
    letter-spacing: -0.25px;
    line-height: 22px;
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (min-width: 1444px) {
    line-height: 25px;
    font-size: 20px;
    margin-bottom: 40px;
  }
`

const PasswordHeader = styled.h3`
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  letter-spacing: -0.25px;
  line-height: 22px;
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 20px;

  @media (min-width: 1444px) {
    display: none;
  }
`

const FieldContainer = styled.div`
  @media (max-width: 1443px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1444px) {
    margin-bottom: 24px;
  }
`

const ButtonContainer = styled.div`
  @media (max-width: 1443px) {
    text-align: left;
  }

  @media (min-width: 1444px) {
    text-align: right;
  }
`

export { AccountHeader, PasswordHeader, FieldContainer, ButtonContainer }
