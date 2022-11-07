import './App.css'
import NavBar from './components/NavBar'
import data from './data/data.json'
import Book from './components/Book'
import Banner from './components/Banner'
import Quote from './components/Quote'
import React, { useState, useEffect} from 'react';
import HomeBar from './components/HomeBar'

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
      
  <HomeBar/>
  <header className="App-header">
  
       <div>
        <img src="https://www.nookandfind.co.uk/wp-content/uploads/2020/08/this-is-a-mid-century-modern-inspired-living-room-with-books-on-the-shelf.jpg" id ="book-img" alt="book-img"></img>
        </div>
        <div>
          <img src="https://www.realsimple.com/thmb/U7bSxRgHak7Uvk1iYiS5s3Rsf4g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1122-books-realsimple-8e1fc69bbeff4b74ac5daa7a2c1f04e9.jpg"></img>
        </div>
      </header>
      
      <main>
      <NavBar />
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
