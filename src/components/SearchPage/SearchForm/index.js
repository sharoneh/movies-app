import { useState } from 'react';
import { connect } from 'react-redux'
import { useLoading, TailSpin } from '@agney/react-loading'

import {
  Container,
  Form,
  Input,
  SearchPageTitle
} from './styled'
import Button from '../../common/Button';

import { searchMovies } from '../../../redux/MoviesReducer';

const SearchForm = ({ loading, searchMovies, searchStr }) => {
  const [str, setStr] = useState(searchStr)
  const [year, setYear] = useState('')

  const { indicatorEl } = useLoading({
    loading,
    indicator: <TailSpin width={16} />
  })

  return (
    <Container>
      <SearchPageTitle>Search for movies, series and episodes</SearchPageTitle>

      <Form onSubmit={e => {
        e.preventDefault()
        searchMovies(str, year)
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
          disabled={!str || loading}
        >{loading ? indicatorEl : 'Search'}</Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  const { loading, searchStr } = state
  return { loading, searchStr }
}

export default connect(mapStateToProps, { searchMovies })(SearchForm)