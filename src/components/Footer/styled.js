import styled from 'styled-components'
import { lightGrey, breakpoints } from '../common/variables'

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 10px 20px;
  background-color: #101018;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  z-index: 2;
  width: 100vw;

  p, a {
    color: ${lightGrey};
  }

  p {
    margin: 0;
  }

  a {
    outline-color: white;
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    p, a {
      font-size: .8em;
    }
  }
`