import styled from 'styled-components'
import { orange, floralWhite, breakpoints } from '../../common/variables'

const Header = styled.header`
  background-color: ${floralWhite};
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  padding: 1em 20px 1em 50px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: normal;
    font-family: 'Zilla Slab', serif;
    text-transform: none;
    text-align: center;
    margin: 0;
    color: ${orange};
  }

  @media screen and (max-width: ${breakpoints[1]}) {
    padding: .8em 10px .8em 35px;

    h3 {
      font-size: 1em;
    }
  }
`

export default Header