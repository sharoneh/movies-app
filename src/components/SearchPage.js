import { connect } from 'react-redux'
import styled from 'styled-components'
import SearchForm from './SearchForm'
import MovieList from './MovieList'
import Pagination from './Pagination'

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .search-page {
    position: relative;
    padding: 20px;

    &:before {
      content: '';
      display: block;
      height: 20px;
      background-color: #181724;
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1;
    }

    @media screen and (max-width: 576px) {
      padding: 0;
    }
  }
`

const SearchPage = ({ movies, loading, error }) => (
  <Container>
    <div className="search-page">
      <SearchForm />

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      <MovieList />

      {movies && (
        <Pagination />
      )}
    </div>
  </Container>
)

const mapStateToProps = state => {
  const { movies, loading, error } = state
  return { movies, loading, error }
}

export default connect(mapStateToProps)(SearchPage)