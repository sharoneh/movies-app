import { connect } from 'react-redux'
import Pagination from './Pagination'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

const SearchPage = ({ movies, loading, error }) => (
  <div className="search">
    <h2>Search for movies</h2>

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
)

const mapStateToProps = state => {
  const { movies, loading, error } = state
  return { movies, loading, error }
}

export default connect(mapStateToProps)(SearchPage)