import React, { useState, useEffect } from "react";
import axios from "axios";
import Books_Feed from './Books_Feed';
import Footer from './Footer'
import Header from './Header'

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://books-api-theo.herokuapp.com/books`
      );
      setBooks(res.data);
      
    };
    fetchBooks();
  }, []);
  

  return (
    <div>
      <Header />
      <Books_Feed books={books}/>
      <Footer />
    </div>

    
  );
}

export default App;
