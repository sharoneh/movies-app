import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MoviePage from './MoviePage'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Header />

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

      <Footer />
    </Router>
  )
}

export default App
