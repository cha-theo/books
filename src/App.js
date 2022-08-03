import React, { useState, useEffect } from "react";
import axios from "axios";
import Books_Feed from './Books_Feed';
import Footer from './Footer'
import Header from './Header'
import Table from './Table'

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
     {/* <Header /> */}
     <Table books={books}/>
      <h1>Books app</h1>
      <Books_Feed books={books}/>
     {/* <Footer /> */}
    </div>

    
  );
}

export default App;
