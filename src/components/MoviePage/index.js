import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Container, Header, MoviePageTitle, SearchLink } from './styled'

import { searchMovieById } from '../../redux/MoviesReducer'
import ErrorPage from './ErrorPage'
import Section from './Section'

const MoviePage = ({ movie, searchMovieById }) => {
  const { movieId } = useParams()

  // eslint-disable-next-line
  useEffect(() => searchMovieById(movieId), [])

  if (!movie) return (
    <ErrorPage />
  )

  const {
    Title,
    Year,
    Poster,
    Type,
    Plot,
  } = movie

  const sections = [
    {
      title: 'General',
      items: [
        { label: 'Release date', value: movie.Released },
        { label: 'Genre', value: movie.Genre },
        { label: 'Runtime', value: movie.Runtime },
        { label: 'Rated', value: movie.Rated },
        { label: 'Total seasons', value: movie.totalSeasons },
        { label: 'Country', value: movie.Country },
        { label: 'Language', value: movie.Language },
      ]
    },
    {
      title: 'Featuring',
      items: [
        { label: 'Director', value: movie.Director },
        { label: 'Writer', value: movie.Writer },
        { label: 'Actors', value: movie.Actors },
        { label: 'Production', value: movie.Production },
      ]
    },
    {
      title: 'Repercussion',
      items: [
        { label: 'Awards', value: movie.Awards },
        { label: 'IMDb Rating', value: `${movie.imdbRating} (${movie.imdbVotes} votes)` },
        { label: 'Metascore', value: movie.Metascore },
      ]
    },
    {
      title: 'Other',
      items: [
        { label: 'Website', value: movie.Website },
        { label: 'DVD', value: movie.DVD },
        { label: 'Box Office', value: movie.BoxOffice },
      ]
    }
  ]

  return (
    <>
      <Header>
        <SearchLink
          to="/"
          aria-label="Back to search page"
        >

        </SearchLink>

        <div className="content">
          <MoviePageTitle>{Title}</MoviePageTitle>
          <h3>{Type} ({Year})</h3>
        </div>
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

            {sections.map(section => (
              <Section key={`section#${section.title}`} {...section} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  const { movie } = state
  return { movie }
}

export default connect(mapStateToProps, { searchMovieById })(MoviePage)