import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1443px) {
    min-height: calc(100vh - 48px);
  }
`

export default FormContainer
