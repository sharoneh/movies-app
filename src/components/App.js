import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MoviePage from './MoviePage'

function App() {
  return (
    <Router>
      <header>
        <h1>Movies App</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movie">Movie</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Switch>
          <Route path="/movie">
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
