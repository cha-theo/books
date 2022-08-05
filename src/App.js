import React, { useState, useEffect } from "react";
import axios from "axios";
import Books_Feed from "./pages/Books_Feed";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import Books from "./pages/Books"
import NewBook from "./pages/NewBook"
import NotFound from "./pages/NotFound";
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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books_Feed books={books} />}/>
        <Route path="/books/:id" element={<Books books={books} />}/>
        <Route path="/newbook" element={<NewBook books={books} />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
