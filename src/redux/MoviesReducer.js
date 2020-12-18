// initial state
const INITIAL_STATE = {
  movies: null,
  searchStr: null,
  page: 1,
  totalPages: null,
  loading: false
}

// action types
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
const SEARCH_REQUEST = 'SEARCH_REQUEST'
const SET_PAGE = 'SET_PAGE'
const SET_LOADING = 'SET_LOADING'

// actions
export const searchRequest = searchStr => ({
  type: SEARCH_REQUEST,
  payload: searchStr
})

export const searchMovies = (str, page) => {
  return dispatch => {
    dispatch(searchRequest(str))

    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${str}&page=${page}`)
      .then(response => response.json())
      .then(response => {
        const {
          Response,
          Error,
          Search: movies,
          totalResults
        } = response

        if (Error || Response === 'False') {
          console.error(Error)
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
        console.error(err)
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

export const setPage = page => ({
  type: SET_PAGE,
  payload: page
})

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
        movies: null,
        searchStr: payload
      }
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        movies: payload.movies,
        totalPages: payload.totalPages,
        page: payload.page,
        loading: false
      }
    case SET_PAGE:
      return { ...state, page: payload }
    case SET_LOADING:
      return { ...state, loading: payload }
    default:
      return state
  }
}

export default MoviesReducer