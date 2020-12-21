import styled from 'styled-components'
import { breakpoints, darkBlue } from '../common/variables'

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .search-page {
    position: relative;
    padding: 20px;

    &:before {
      content: '';
      display: block;
      height: 20px;
      background-color: ${darkBlue};
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1;
    }

    @media screen and (max-width: ${breakpoints[1]}) {
      padding: 0;
    }
  }
`