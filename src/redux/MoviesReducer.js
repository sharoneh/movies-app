const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

// initial state
const INITIAL_STATE = {
  movies: null,
  movie: null,
  searchStr: null,
  page: 1,
  totalPages: null,
  loading: false,
  error: null
}

// action types
const SEARCH_REQUEST = 'SEARCH_REQUEST'
const MOVIE_REQUEST = 'MOVIE_REQUEST'
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
const SET_MOVIE = 'SET_MOVIE'
const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'

// actions
export const searchRequest = searchStr => ({
  type: SEARCH_REQUEST,
  payload: searchStr
})

export const movieRequest = () => ({ type: MOVIE_REQUEST })

export const searchMovies = (str, page, year) => {
  return dispatch => {
    dispatch(searchRequest(str))

    fetch(`${baseUrl}&s=${str}&page=${page}${year ? `&y=${year}` : ''}`)
      .then(response => response.json())
      .then(response => {
        const {
          Response,
          Error: err,
          Search: movies,
          totalResults
        } = response

        if (err || Response === 'False') {
          dispatch(setError(err))
          dispatch(setLoading(false))
          return
        }

        const totalPages = Math.ceil(totalResults / 10)

        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: { movies, totalPages, page }
        })
      })
      .catch(err => {
        dispatch(setError(err))
        dispatch(setLoading(false))
      })
  }
}

export const searchMovieById = id => {
  return dispatch => {
    dispatch(movieRequest())

    fetch(`${baseUrl}&i=${id}&plot=full`)
      .then(response => response.json())
      .then(response => {
        console.log(response)

        const {
          Response,
          Error: err,
          ...movie
        } = response

        if (err || Response === 'False') {
          dispatch(setError(err))
          dispatch(setLoading(false))
          return
        }

        dispatch({
          type: SET_MOVIE,
          payload: movie
        })
      })
      .catch(err => {
        dispatch(setError(err))
        dispatch(setLoading(false))
      })
  }
}

export const changePage = page => {
  return (dispatch, getState) => {
    const { searchStr } = getState()

    dispatch(searchMovies(searchStr, page))
  }
}

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
})

// reducer
const MoviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        movies: null,
        searchStr: payload
      }
    case MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        movies: null,
        movie: null
      }
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        movies: payload.movies,
        totalPages: payload.totalPages,
        page: payload.page,
        loading: false
      }
    case SET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false
      }
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_ERROR:
      return { ...state, error: payload }
    default:
      return { ...state }
  }
}

export const setError = error => ({
  type: SET_ERROR,
  payload: error
})

export default MoviesReducer