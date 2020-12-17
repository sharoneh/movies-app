import { useContext } from 'react'
import Pagination from './Pagination'
import SearchForm from './SearchForm'
import Context from './Context'

const Search = () => {
  const { movies, loading } = useContext(Context)

  return (
    <div className="search">
      <SearchForm />

      {loading ? (<p>Loading...</p>) : null}

      <ol className="results">
        {movies.map((movie, index) => (
          <li key={`movie#${index}`}>{movie.Title}</li>
        ))}
      </ol>

      {movies.length ? (
        <Pagination />
      ) : null}
    </div>
  )
}

export default Search