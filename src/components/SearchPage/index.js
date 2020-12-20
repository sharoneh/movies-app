import { connect } from 'react-redux'

import { Container } from './styled'

import SearchForm from './SearchForm'
import MovieList from './MovieList'
import Pagination from './Pagination'

const SearchPage = ({ movies, loading, error }) => (
  <Container>
    <div className="search-page">
      <SearchForm />

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      <MovieList />

      {movies && (
        <Pagination />
      )}
    </div>
  </Container>
)

const mapStateToProps = state => {
  const { movies, loading, error } = state
  return { movies, loading, error }
}

export default connect(mapStateToProps)(SearchPage)