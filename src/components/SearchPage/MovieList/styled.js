import styled from 'styled-components'
import { breakpoints } from '../../common/variables'

export const Container = styled.div`
  overflow: auto;
  z-index: 0;
  margin-top: 10px;
  width: 100%;
  max-width: 577px;

  @media screen and (max-width: ${breakpoints[1]}) {
    margin-top: 20px;
  }
`

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`