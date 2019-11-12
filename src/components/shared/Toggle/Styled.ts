import styled from 'styled-components'

export interface ToggleProps {
  checked?: boolean
}

const ToggleBackground = styled.div<ToggleProps>`
  cursor: pointer;
  background: ${props => (props.checked ? props.theme.colors.blue : '#B6BFD1')};
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 16px 0 rgba(83, 98, 124, 0.06);
  display: inline-block;
  position: relative;

  > input {
    display: none;
  }
`

const ToggleCircle = styled.div<ToggleProps>`
  background: ${props => props.theme.colors.white};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  transform: translateY(2px) translateX(${props => (props.checked ? '14px' : '2px')});
`

export { ToggleBackground, ToggleCircle }
