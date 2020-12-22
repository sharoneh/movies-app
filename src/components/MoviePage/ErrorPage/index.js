import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '../../common/Button'
import { Container, MoviePageTitle } from '../styled'
import { ErrorTitle } from './styled'

const ErrorPage = ({ loading, error }) => {
  return (
    <Container notFound>
      {loading && (
        <MoviePageTitle>Loading...</MoviePageTitle>
      )}

      {error && (
        <>
          <ErrorTitle secondary>404</ErrorTitle>
          <ErrorTitle>Not found!</ErrorTitle>

          <Link to="/">
            <Button tabIndex="-1">search page</Button>
          </Link>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = state => {
  const { loading, error } = state
  return { loading, error }
}

export default connect(mapStateToProps)(ErrorPage)