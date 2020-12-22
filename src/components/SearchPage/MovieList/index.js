import { connect } from 'react-redux'
import { Container } from './styled';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return movies && (
    <Container>
      {movies.map((movie, index) => (
        <Movie
          {...movie}
          key={`movie#${index}`}
        />
      ))}
    </Container>
  )
}

const mapStateToProps = state => {
  const { movies } = state
  return { movies }
}

export default connect(mapStateToProps)(MovieList)