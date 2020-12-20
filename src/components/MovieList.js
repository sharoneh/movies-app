import { connect } from 'react-redux'
import styled from 'styled-components'
import Movie from './Movie';

const Container = styled.div`
  overflow: auto;
  z-index: 1;
  margin-top: 10px;
  width: 100%;
  max-width: 577px;

  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`

const MovieList = ({ movies }) => {
  return !movies ? null : (
    <Container>
      {movies.map((movie, index) => (
        <Movie
          {...movie}
          key={`movie#${index}`}
        />
      ))}
    </Container>
  );
}

const mapStateToProps = state => {
  const { movies } = state
  return { movies }
}

export default connect(mapStateToProps)(MovieList)