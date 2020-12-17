import { useContext } from 'react'
import Pagination from './Pagination'
import SearchForm from './SearchForm'
import Context from './Context'
import MovieList from './MovieList'

const Search = () => {
  const { hasMovies, loading } = useContext(Context)

  return (
    <div className="search">
      <SearchForm />

      {loading ? (<p>Loading...</p>) : null}

      <MovieList />

      {hasMovies ? (
        <Pagination />
      ) : null}
    </div>
  )
}

export default Search