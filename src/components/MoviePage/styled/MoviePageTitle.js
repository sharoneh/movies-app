import styled from 'styled-components'
import Title from '../../common/Title'
import { orange, breakpoints } from '../../common/variables'

const MoviePageTitle = styled(Title)`
  margin: 0;
  color: ${orange};

  @media screen and (max-width: ${breakpoints[1]}) {
    font-size: 1.2em;
  }
`

export default MoviePageTitle