import React, { useState, useEffect } from "react";
import axios from "axios";
import Books_Feed from "./pages/Books_Feed";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(`https://books-api-theo.herokuapp.com/books`);
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books_Feed books={books} />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
