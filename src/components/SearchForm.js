import { useState } from 'react';
import { connect } from 'react-redux'
import { searchMovies } from '../redux/MoviesReducer';

const SearchForm = ({ page, searchMovies }) => {
  const [str, setStr] = useState('')
  const [year, setYear] = useState('')

  return (
    <form onSubmit={e => {
      e.preventDefault()
      searchMovies(str, page, year)
    }}>

      <input
        type="text"
        placeholder="title"
        aria-label="Title"
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />

      <input
        type="number"
        placeholder="year"
        aria-label="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

const mapStateToProps = state => {
  const { page } = state
  return { page }
}

export default connect(mapStateToProps, { searchMovies })(SearchForm)