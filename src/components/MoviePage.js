import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { searchMovieById } from '../redux/MoviesReducer'

const MoviePage = ({ loading, error, movie, searchMovieById }) => {
  const { movieId } = useParams()

  useEffect(() => searchMovieById(movieId), [])

  return (
    <div className="movie-page">
      <h1>Movie Page</h1>

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      {movie && (
        <div className="movie-data">
          <img
            src={movie.Poster}
            alt={`${movie.Title} ${movie.Type} poster`}
          />

          <ul>
            {Object.keys(movie).map(movieKey => (
              <li key={`movie#${movieId}#${movieKey}`}>
                <b>{movieKey}: </b>

                {movieKey !== 'Ratings' ? movie[movieKey] : (
                  <ul>
                    {movie[movieKey].map((rating, index) => (
                      <li key={`rating#${index}`}>
                        <b>{rating.Source}: </b>
                        {rating.Value}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const { loading, error, movie } = state
  return { loading, error, movie }
}

export default connect(mapStateToProps, { searchMovieById })(MoviePage)