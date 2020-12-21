import styled from 'styled-components'
import { breakpoints } from '../../../../common/variables'

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    margin: 0;
    color: lightgrey;

    @media screen and (max-width: ${breakpoints[1]}) {
      font-size: .9em;
    }
  }
`

export default MovieInfo