import styled from 'styled-components'
import { blue, breakpoints, lightGrey, orange } from './variables'

const Title = styled.h2`
  text-align: center;
  color: ${blue};
  text-transform: uppercase;
  font-family: 'Zilla Slab', serif;

  @media screen and (max-width: ${breakpoints[1]}) {
    font-size: 1em;
  }
`

export const SearchPageTitle = styled(Title)`
  margin-top: 0;
`

export const MoviePageTitle = styled(Title)`
  margin: 0;
  color: ${orange};

  @media screen and (max-width: ${breakpoints[1]}) {
    font-size: 1.2em;
  }
`

export const ErrorTitle = styled(Title)`
  color: ${lightGrey};
  margin: 0 0 20px;

  ${props => props.secondary ? `
    font-weight: normal;
    margin: 0;
  ` : ''}
`

export default Title