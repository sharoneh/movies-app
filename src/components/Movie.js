import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  transition: ease .3s;
  position: relative;

  .img-container {
    height: 100px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    img {
      width: 100%;
    }
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    padding: 10px;

    p {
      margin: 0;
      color: lightgrey;
      transition: ease .3s;
    }
  }

  &:after {
    content: '';
    display: block;
    width: calc(100% - 40px);
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 20px;
    bottom: 0;
    opacity: .1;
    transition: ease .3s;
  }

  &:last-child:after {
    content: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, .2);
    transition: ease .3s;

    .movie-info p {
      color: white;
      transition: ease .3s;
    }

    &:after {
      opacity: 0;
      transition: ease .3s;
    }
  }
`

const Movie = ({ Title, Poster, Type, Year, imdbID }) => {
  return (
    <StyledLink to={`/movie/${imdbID}`}>
      <div className="movie-info">
        <p className="title">
          <strong>{Title}</strong> ({Year})
        </p>
        <p>{Type}</p>
      </div>

      <div className="img-container">
        {Poster !== 'N/A' && (
          <img
            src={Poster}
            alt={`${Title} ${Type} poster`}
          />
        )}
      </div>
    </StyledLink>
  );
}

export default Movie;