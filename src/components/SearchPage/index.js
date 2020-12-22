import { connect } from 'react-redux'

import { Container } from './styled'

import SearchForm from './SearchForm'
import MovieList from './MovieList'

const SearchPage = ({ movies, loading, error }) => (
  <Container>
    <div className="search-page">
      <SearchForm />

      <MovieList />
    </div>
  </Container>
)

const mapStateToProps = state => {
  const { movies, loading, error } = state
  return { movies, loading, error }
}

export default connect(mapStateToProps)(SearchPage)