import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MoviePage from './MoviePage'

function App() {
  return (
    <Router>
      <header>
        <h1>Movies App</h1>
      </header>

      <main>
        <Switch>
          <Route path="/movie/:movieId">
            <MoviePage />
          </Route>

          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </main>

      <footer>
        <p>Movies App by Sharon Hasegawa</p>
        <p>This app uses <a href="http://www.omdbapi.com">OMDb API</a>.</p>
      </footer>
    </Router>
  )
}

export default App
