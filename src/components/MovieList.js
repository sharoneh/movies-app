import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return !movies ? null : (
    <table className="results" border={1}>
      <thead>
        <tr>
          <th>Poster</th>
          <th>Type</th>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie, index) => {
          const { Title, Poster, Type, Year, imdbID } = movie

          return (
            <tr key={`movie#${index}`}>
              <td>
                {Poster !== 'N/A' ? (
                  <img
                    src={Poster}
                    alt={`${Title} ${Type} poster`}
                    style={{ maxHeight: 100 }}
                  />
                ) : null}
              </td>

              <td>{Type}</td>

              <td>
                <Link to={`/movie/${imdbID}`}>
                  {Title}
                </Link>
              </td>

              <td>{Year}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => {
  const { movies } = state
  return { movies }
}

export default connect(mapStateToProps)(MovieList)