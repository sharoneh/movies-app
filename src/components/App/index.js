import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { GlobalStyle, StyledMain } from './styled'

import Footer from '../Footer'
import SearchPage from '../SearchPage'
import MoviePage from '../MoviePage'

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <StyledMain>
          <Switch>
            <Route path="/movie/:movieId">
              <MoviePage />
            </Route>

            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </StyledMain>

        <Footer />
      </Router>
    </>
  )
}

export default App
