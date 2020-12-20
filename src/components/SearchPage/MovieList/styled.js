import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  z-index: 1;
  margin-top: 10px;
  width: 100%;
  max-width: 577px;

  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`