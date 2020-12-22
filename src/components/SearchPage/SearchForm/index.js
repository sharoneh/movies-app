import { useState } from 'react';
import { connect } from 'react-redux'

import {
  Container,
  Form,
  Input,
} from './styled'
import { SearchPageTitle } from '../../common/Title';
import Button from '../../common/Button';

import { searchMovies } from '../../../redux/MoviesReducer';

const SearchForm = ({ page, searchMovies }) => {
  const [str, setStr] = useState('')
  const [year, setYear] = useState('')

  return (
    <Container>
      <SearchPageTitle>Search for movies, series and episodes</SearchPageTitle>

      <Form onSubmit={e => {
        e.preventDefault()
        searchMovies(str, page, year)
      }}>

        <Input
          type="search"
          placeholder="title*"
          aria-label="Title"
          className="title"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />

        <Input
          type="number"
          placeholder="year"
          aria-label="Year"
          className="year"
          value={year}
          onChange={(e) => {
            const number = e.target.value
            if (number.length > 4) return

            setYear(number)
          }}
        />

        <Button
          type="submit"
          disabled={!str}
        >Search</Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  const { page } = state
  return { page }
}

export default connect(mapStateToProps, { searchMovies })(SearchForm)