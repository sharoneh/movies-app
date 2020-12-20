import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Container, Header } from './styled'
import { MoviePageTitle } from '../common/Title'

import { searchMovieById } from '../../redux/MoviesReducer'

const Item = ({ label, value }) => value && value !== 'N/A' ? (
  <li><b>{label}: </b>{value}</li>
) : null

const MoviePage = ({ loading, error, movie, searchMovieById }) => {
  const { movieId } = useParams()

  // eslint-disable-next-line
  useEffect(() => searchMovieById(movieId), [])

  if (!movie) return (
    <div>
      { loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  )

  const {
    Title,
    Year,
    Poster,
    Type,
    Plot,

    Released,
    Genre,
    Runtime,
    Rated,
    totalSeasons,
    Country,
    Language,

    Awards,
    imdbRating,
    imdbVotes,
    Metascore,

    Director,
    Writer,
    Actors,
    Production,

    Website,
    DVD,
    BoxOffice,
  } = movie

  return (
    <>
      <Header>
        <MoviePageTitle>{Title}</MoviePageTitle>
        <h3>{Type} ({Year})</h3>
      </Header>

      <Container>
        <div className="movie-content">
          <div className="side-container">
            {Poster !== 'N/A' && (
              <img
                src={Poster}
                alt={`${Title} ${Type} poster`}
              />
            )}
          </div>

          <div className="movie-data">
            {Plot && Plot !== 'N/A' && (
              <p className="plot">{Plot}</p>
            )}

            <section>
              <h3>General</h3>

              <ul>
                <Item label="Release date" value={Released} />
                <Item label="Genre" value={Genre} />
                <Item label="Runtime" value={Runtime} />
                <Item label="Rated" value={Rated} />
                <Item label="Total seasons" value={totalSeasons} />
                <Item label="Country" value={Country} />
                <Item label="Language" value={Language} />
              </ul>
            </section>

            <section>
              <h3>Featuring</h3>

              <ul>
                <Item label="Director" value={Director} />
                <Item label="Writer" value={Writer} />
                <Item label="Actors" value={Actors} />
                <Item label="Production" value={Production} />
              </ul>
            </section>

            <section>
              <h3>Repercussion</h3>

              <ul>
                <Item label="Awards" value={Awards} />
                <Item label="IMDb Rating" value={`${imdbRating} (${imdbVotes} votes)`} />
                <Item label="Metascore" value={Metascore} />
              </ul>
            </section>

            <section>
              <h3>Other</h3>

              <ul>
                <Item label="Website" value={Website} />
                <Item label="DVD" value={DVD} />
                <Item label="Box Office" value={BoxOffice} />
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  const { loading, error, movie } = state
  return { loading, error, movie }
}

export default connect(mapStateToProps, { searchMovieById })(MoviePage)