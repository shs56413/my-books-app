import './App.css'
import NavBar from './components/NavBar'
import data from './data/data.json'
import Book from './components/Book'
import SearchBar from './components/SearchBar'


function App(props) {
  return (
    <div className="App">

<header className="App-header">
        <NavBar />
        <div className="title">
          <h1>Bookster</h1>
        </div>
      </header>
      <main>
        {data.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </div>
  )
}

export default App
