import { connect } from 'react-redux'
import { changePage } from '../redux/MoviesReducer'

const Pagination = ({ page, totalPages, changePage }) => (
  <div className="pagination">
    <button
      className="prev-page"
      disabled={page - 1 <= 0}
      onClick={() => changePage(page - 1)}
    >
      previous page
      </button>

    <div className="page">
      <span><strong>{page}</strong> of {totalPages}</span>
    </div>

    <button
      className="next-page"
      disabled={page + 1 > totalPages}
      onClick={() => changePage(page + 1)}
    >
      next page
      </button>
  </div>
)

const mapStateToProps = state => {
  const { page, totalPages } = state
  return { page, totalPages }
}

export default connect(mapStateToProps, { changePage })(Pagination)