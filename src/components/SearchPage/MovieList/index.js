import { connect } from 'react-redux'
import Movie from './Movie';
import { Container } from './styled';

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