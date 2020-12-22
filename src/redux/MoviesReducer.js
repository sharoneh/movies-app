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

export const request = (dispatch, url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const {
          Response,
          Error: err,
          ...data
        } = response

        if (err || Response === 'False') {
          dispatch(setError(err))
          dispatch(setLoading(false))
          return
        }

        resolve(data)
      })
      .catch(err => {
        dispatch(setError(err))
        dispatch(setLoading(false))
        reject(err)
      })

  })
}

export const searchMovies = (str, page, year) => {
  if (!str) return

  return dispatch => {
    dispatch(searchRequest(str))

    request(dispatch, `${baseUrl}&s=${str}&page=${page}${year ? `&y=${year}` : ''}`)
      .then(response => {
        const {
          Search: movies,
          totalResults
        } = response

        const totalPages = Math.ceil(totalResults / 10)

        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: { movies, totalPages, page }
        })
      })
  }
}

export const searchMovieById = id => {
  return dispatch => {
    dispatch(movieRequest())

    request(dispatch, `${baseUrl}&i=${id}&plot=full`)
      .then(movie => {
        dispatch({
          type: SET_MOVIE,
          payload: movie
        })
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