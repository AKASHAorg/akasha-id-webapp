import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const StyledRow = styled.li`
  background: ${props => props.theme.colors.white};
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #edf0f5;

  @media (max-width: 1443px) {
    border-radius: 8px;

    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media (min-width: 1444px) {
    border-radius: 1px;

    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

const StyledLink = styled(NavLink)<NavLinkProps>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1443px) {
    padding: 10px 16px 12px 16px;
  }

  @media (min-width: 1444px) {
    padding: 24px;
  }
`

const StyledImageContainer = styled.div`
  background: #f0f0f0;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 1443px) {
    border: 1px solid rgba(19, 37, 64, 0.1);
    width: 41px;
    height: 41px;
    border-radius: 4px;

    > img {
      width: 41px;
      height: 41px;
    }
  }

  @media (min-width: 1444px) {
    width: 40px;
    height: 40px;
    border-radius: 20px;

    > img {
      width: 40px;
      height: 40px;
    }
  }
`

const StyledTextContainer = styled.div`
  margin-left: 11.5px;
  flex-grow: 1;
`

const StyledHeader = styled.h4`
  color: #132540;

  @media (max-width: 1443px) {
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
    margin: 0;
    font-family: 'HK Grotesk Medium';
  }

  @media (min-width: 1444px) {
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: -0.08px;
    margin: 0 0 2px 0;
    font-family: 'SF UI Text Semibold';
  }
`

const StyledSubheaderContainer = styled.div`
  display: flex;
`

const StyledStatus = styled.div`
  line-height: 12px;
  font-size: 10px;
  letter-spacing: 0.12px;
  padding: 4px 6px;
  border-radius: ${props => props.theme.shapes.borderRadius};
  background: #f3f3f4;
  height: 20px;
  box-sizing: border-box;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};

  @media (max-width: 1443px) {
    display: none;
  }
`

const StyledDate = styled.div`
  line-height: 16px;
  font-size: 11px;
  letter-spacing: 0.06px;
  color: ${props => props.theme.colors.grey};
  padding: 2px 0;
  margin-left: 4px;

  @media (max-width: 1443px) {
    display: none;
  }
`

const StyledDescription = styled.div`
  line-height: 18px;
  font-size: 13px;
  color: #949eb3;
  font-weight: 500;
  font-family: 'HK Grotesk Medium';

  @media (min-width: 1444px) {
    display: none;
  }
`

export {
  StyledRow,
  StyledImageContainer,
  StyledTextContainer,
  StyledHeader,
  StyledSubheaderContainer,
  StyledStatus,
  StyledDate,
  StyledLink,
  StyledDescription,
}
