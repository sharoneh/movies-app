const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

// initial state
const INITIAL_STATE = {
  movies: null,
  movie: null,
  searchStr: '',
  year: null,
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
const RESET_PAGE = 'RESET_PAGE'
const NEXT_PAGE_RESULTS = 'NEXT_PAGE_RESULTS'

// actions
export const searchRequest = (str, year) => {
  return (dispatch, getState) => {
    const strChanged = str !== getState().searchStr
    const yearChanged = year !== getState().year

    if (strChanged || yearChanged) {
      dispatch({ type: RESET_PAGE })
    }

    dispatch({
      type: SEARCH_REQUEST,
      payload: { str, year }
    })
  }
}

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

export const searchMovies = (str, year) => {
  if (!str) return

  return (dispatch, getState) => {
    dispatch(searchRequest(str, year))

    const { page } = getState()

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

export const nextPage = () => {
  return (dispatch, getState) => {
    const { searchStr, page, year } = getState()

    request(dispatch, `${baseUrl}&s=${searchStr}&page=${page + 1}${year ? `&y=${year}` : ''}`)
      .then(response => {
        const {
          Search: movies,
          totalResults
        } = response

        const totalPages = Math.ceil(totalResults / 10)

        dispatch({
          type: NEXT_PAGE_RESULTS,
          payload: { movies, totalPages, page: page + 1 }
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

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error
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
        searchStr: payload.str,
        year: payload.year || null
      }
    case MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
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
    case NEXT_PAGE_RESULTS:
      return {
        ...state,
        movies: [
          ...state.movies,
          ...payload.movies
        ],
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
    case RESET_PAGE:
      return { ...state, page: 1 }
    default:
      return { ...state }
  }
}

export default MoviesReducer