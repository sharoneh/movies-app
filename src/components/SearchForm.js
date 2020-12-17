import { useContext } from 'react';
import Context from './Context';

const SearchForm = () => {
  const { str, setStr, search } = useContext(Context)

  return (
    <form onSubmit={e => {
      e.preventDefault()
      search(str)
    }}>
      <fieldset>
        <label htmlFor="search">Search for movies:</label>

        <input
          type="text"
          id="search"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />

        <button type="submit">Search</button>
      </fieldset>
    </form>
  );
}

export default SearchForm;