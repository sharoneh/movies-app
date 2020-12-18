import { connect } from 'react-redux'
import Pagination from './Pagination'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

const SearchPage = ({ movies, loading, error }) => (
  <div className="search">
    <SearchForm />

    {loading ? (<p>Loading...</p>) : null}
    {error ? (<p style={{ color: 'red' }}>{error}</p>) : null}

    <MovieList />

    {movies ? (
      <Pagination />
    ) : null}
  </div>
)

const mapStateToProps = state => {
  const { movies, loading, error } = state
  return { movies, loading, error }
}

export default connect(mapStateToProps)(SearchPage)