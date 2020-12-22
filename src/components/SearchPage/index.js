import { connect } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from './styled'

import SearchForm from './SearchForm'
import MovieList from './MovieList'

const SearchPage = ({ movies, loading, error }) => (
  <Container>
    <motion.div
      className="search-page"
    >
      <AnimatePresence>
        <SearchForm key="searchForm" />

        <MovieList key="movieList" />
      </AnimatePresence>
    </motion.div>
  </Container>
)

const mapStateToProps = state => {
  const { movies, loading, error } = state
  return { movies, loading, error }
}

export default connect(mapStateToProps)(SearchPage)