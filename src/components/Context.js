import { createContext, useEffect, useRef, useState } from 'react';

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [str, setStr] = useState('')
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)

  const search = str => {
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

        setTotalPages(Math.ceil(totalResults / 10))
        setMovies(results)
      })
      .catch(console.error)
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

        search
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context