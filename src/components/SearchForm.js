import { useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { searchMovies } from '../redux/MoviesReducer';

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  padding: 40px;
  border-radius: 10px;
  background-color: floralwhite;
  position: relative;
  z-index: 2;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin-top: 0;
    color: #151e8f;
    text-transform: uppercase;
    font-family: 'Zilla Slab', serif;
  }

  form {
    width: 100%;
    display: flex;

    * {
      outline-color: #151e8f;
    }

    input {
      border: none;
      padding: 10px 12px;
      margin-right: 10px;
      border-radius: 5px;
      color: #444;
      flex-grow: 1;
      font-size: 16px;

      &.year {
        max-width: 80px;

        /* hide arrows: Firefox */
        -moz-appearance: textfield;

        /* hide arrows: Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    button {
      border: none;
      background: #c53131;
      border-radius: 5px;
      padding: 10px 20px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
    }
  }
`

const SearchForm = ({ page, searchMovies }) => {
  const [str, setStr] = useState('')
  const [year, setYear] = useState('')

  return (
    <Container>
      <h2>Search for movies, series and episodes</h2>

      <form onSubmit={e => {
        e.preventDefault()
        searchMovies(str, page, year)
      }}>

        <input
          type="text"
          placeholder="title"
          aria-label="Title"
          className="title"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />

        <input
          type="text"
          maxLength={4}
          placeholder="year"
          aria-label="Year"
          className="year"
          value={year}
          onChange={(e) => {
            const isNum = /^\d+$/.test(e.target.value)
            if (!isNum) return

            setYear(e.target.value)
          }}
        />

        <button type="submit">Search</button>
      </form>
    </Container>
  );
}

const mapStateToProps = state => {
  const { page } = state
  return { page }
}

export default connect(mapStateToProps, { searchMovies })(SearchForm)