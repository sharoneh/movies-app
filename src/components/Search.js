import { useState } from 'react'

const Search = () => {
  const [str, setStr] = useState('')
  const [movies, setMovies] = useState([])

  const search = e => {
    e.preventDefault()

    fetch(`http://www.omdbapi.com/?apikey=d010db29&s=${str}`)
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

        setMovies(results)
      })
      .catch(console.error)
  }

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

      <ul className="results">
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search