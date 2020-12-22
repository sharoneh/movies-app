import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLoading, TailSpin } from '@agney/react-loading'

import { Container, LoadingContainer } from './styled';

import Movie from './Movie';
import { nextPage } from '../../../redux/MoviesReducer';

const MovieList = ({ movies, totalPages, page, nextPage }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <TailSpin width={30} />,
  })

  return movies && (
    <Container
      {...containerProps}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: .5 }}
    >
      <InfiniteScroll
        dataLength={movies.length}
        next={nextPage}
        hasMore={totalPages > page}
        loader={
          <LoadingContainer>
            {indicatorEl}
          </LoadingContainer>
        }
      >
        {movies.map((movie, index) => (
          <Movie
            {...movie}
            key={`movie#${index}`}
          />
        ))}
      </InfiniteScroll>
    </Container>
  )
}

const mapStateToProps = state => {
  const { movies, totalPages, page } = state
  return { movies, totalPages, page }
}

export default connect(mapStateToProps, { nextPage })(MovieList)