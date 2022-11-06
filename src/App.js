import './App.css'
import NavBar from './components/NavBar'
import data from './data/data.json'
import Book from './components/Book'
import Banner from './components/Banner'
import Quote from './components/Quote'
import React, { useState, useEffect} from 'react';

function App(props) {
  const [quote, setQuote]= useState({
    anime: null,
    character: null,
    quote:null
  });

  

  const fetchQuote = async() => {
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json());
  }

  const generate = async () => {
    setQuote(await fetchQuote());
  }

    useEffect(async () =>{
      setQuote(await fetchQuote());
    },[]);
  

  return (
    <div className="App">

<header className="App-header">
        <NavBar />
        <h1>Bookster</h1>

        
      
      </header>

      <main>
        {data.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
       <footer className="quote-box"> 
       <h1>Anime Quotes</h1>
      <Quote quote={quote} />
        <button onClick={generate}>Generate new quote</button>
</footer>
      <Banner />

    </div>
    


    
  )
}



export default App
