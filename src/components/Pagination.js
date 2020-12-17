import { useContext } from 'react'
import Context from './Context'

const Pagination = () => {
  const { page, setPage, totalPages } = useContext(Context)

  return (
    <div className="pagination">
      <button
        className="prev-page"
        disabled={page - 1 <= 0}
        onClick={() => setPage(page - 1)}
      >
        previous page
      </button>

      <div className="page">
        <span><strong>{page}</strong> of {totalPages}</span>
      </div>

      <button
        className="next-page"
        disabled={page + 1 > totalPages}
        onClick={() => setPage(page + 1)}
      >
        next page
      </button>
    </div>
  )
}

export default Pagination