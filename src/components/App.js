import Search from './Search'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movies App</h1>
      </header>

      <main>
        <Search />
      </main>

      <footer>
        <p>Movies App by Sharon Hasegawa</p>
        <p>This app uses <a href="http://www.omdbapi.com">OMDb API</a>.</p>
      </footer>
    </div>
  );
}

export default App;
