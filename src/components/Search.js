import { connect } from 'react-redux'
import Pagination from './Pagination'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

const Search = ({ movies, loading }) => (
  <div className="search">
    <SearchForm />

    {loading ? (<p>Loading...</p>) : null}

    <MovieList />

    {movies ? (
      <Pagination />
    ) : null}
  </div>
)

const mapStateToProps = state => {
  const { movies, loading } = state
  return { movies, loading }
}

export default connect(mapStateToProps)(Search)