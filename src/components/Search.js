import { useEffect, useState } from 'react'

const Search = () => {
  const [str, setStr] = useState('')
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)

  const search = e => {
    e && e.preventDefault()

    fetch(`http://www.omdbapi.com/?apikey=d010db29&s=${str}&page=${page}`)
      .then(response => response.json())
      .then(response => {
        const {
          Response: res,
          Error: error,
          Search: results,
          totalResults
        } = response

        if (error || res === 'False') {
          console.error(error)
          return
        }

        setTotalPages(Math.ceil(totalResults / 10))
        setMovies(results)
      })
      .catch(console.error)
  }

  useEffect(search, [page])

  return (
    <div className="search">
      <form onSubmit={search}>
        <fieldset>
          <label htmlFor="search">Search for movies:</label>

          <input
            type="text"
            id="search"
            value={str}
            onChange={(e) => setStr(e.target.value)}
          />

          <button type="submit">Search</button>
        </fieldset>
      </form>

      <ol className="results">
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ol>

      {movies.length ? (
        <div className="pagination">
          <button
            className="prev-page"
            disabled={page - 1 <= 0}
            onClick={() => setPage(page - 1)}
          >previous page</button>

          <div className="page">
            <span><strong>{page}</strong> of {totalPages}</span>
          </div>

          <button
            className="next-page"
            disabled={page + 1 > totalPages}
            onClick={() => setPage(page + 1)}
          >next page</button>
        </div>
      ) : null}
    </div>
  )
}

export default Search