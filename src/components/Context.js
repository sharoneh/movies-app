import { createContext, useEffect, useRef, useState } from 'react';

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [str, setStr] = useState('')
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const search = str => {
    setLoading(true)

    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${str}&page=${page}`)
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

        setLoading(false)
        setTotalPages(Math.ceil(totalResults / 10))
        setMovies(results)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  // prevent effect from running at first render
  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    search(str)
  }, [page])

  return (
    <Context.Provider
      value={{
        str,
        setStr,

        movies,
        setMovies,

        totalPages,
        setTotalPages,

        page,
        setPage,

        loading,
        setLoading,

        hasMovies: !!movies.length,

        search
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context