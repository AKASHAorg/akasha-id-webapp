import styled from 'styled-components'

const MobileTopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(46, 55, 71, 0.1);
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 18px 12px 16px;
  z-index: 10;

  @media (min-width: 1444px) {
    display: none;
  }
`

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
  @media (max-width: 1443px) {
    margin: 88px 24px 24px 24px;
  }
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

export {
  MobileTopContainer,
  MobileSearchLabel,
  MobileSearchInput,
  MobileSearchClose,
  PageContainer,
  SearchHeader,
}
