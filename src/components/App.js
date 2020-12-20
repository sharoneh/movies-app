import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styled from 'styled-components'

import MoviePage from './MoviePage'
import Footer from './Footer'
import GlobalStyle from '../globalStyles'

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Main>
          <Switch>
            <Route path="/movie/:movieId">
              <MoviePage />
            </Route>

            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </Main>

        <Footer />
      </Router>
    </>
  )
}

export default App
