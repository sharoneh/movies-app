import styled from 'styled-components'
import { blue, breakpoints } from './variables'

const Title = styled.h2`
  text-align: center;
  color: ${blue};
  text-transform: uppercase;
  font-family: 'Zilla Slab', serif;

  @media screen and (max-width: ${breakpoints[1]}) {
    font-size: 1em;
  }
`

export default Title