import styled from 'styled-components'

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    margin: 0;
    color: lightgrey;

    @media screen and (max-width: 576px) {
      font-size: .9em;
    }
  }
`

export default MovieInfo