import { connect } from 'react-redux'

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
          const { Title, Poster, Type, Year } = movie

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
              <td>{Title}</td>
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