// initial state
const INITIAL_STATE = {
  teste: 'teste'
}

// action types
const ACTION_TESTE = 'action teste'

// actions
export const actionTeste = () => ({
  type: ACTION_TESTE
})

// reducer
const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TESTE:
      return {
        ...state,
        teste: 'mudou'
      }
    default:
      return state
  }
}

export default MoviesReducer