import styled from 'styled-components'

const StyledAttribute = styled.li`
  margin: 0;
  padding: 8px 0 8px 8px;
  border-bottom: 1px solid ${props => props.theme.colors.darkBackground};

  :first-child {
    border-top: 1px solid ${props => props.theme.colors.darkBackground};
  }
`

export { StyledAttribute }
