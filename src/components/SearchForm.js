import { useState } from 'react';
import { connect } from 'react-redux'
import { searchMovies } from '../redux/MoviesReducer';

const SearchForm = ({ page, searchMovies }) => {
  const [str, setStr] = useState('')

  return (
    <form onSubmit={e => {
      e.preventDefault()
      searchMovies(str, page)
    }}>
      <fieldset>
        <label htmlFor="search">Search for movies:</label>

        <input
          type="text"
          id="search"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />

        <button type="submit">Search</button>
      </fieldset>
    </form>
  );
}

const mapStateToProps = state => {
  const { page } = state
  return { page }
}

export default connect(mapStateToProps, { searchMovies })(SearchForm)