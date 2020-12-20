import {
  StyledLink,
  MovieInfo,
  ImgContainer,
} from './styled'

const Movie = ({ Title, Poster, Type, Year, imdbID }) => {
  return (
    <StyledLink to={`/movie/${imdbID}`}>
      <MovieInfo>
        <p className="title">
          <strong>{Title}</strong> ({Year})
        </p>
        <p>{Type}</p>
      </MovieInfo>

      <ImgContainer>
        {Poster !== 'N/A' && (
          <img
            src={Poster}
            alt={`${Title} ${Type} poster`}
          />
        )}
      </ImgContainer>
    </StyledLink>
  );
}

export default Movie;