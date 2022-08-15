import React, { useState, useEffect } from "react";
import axios from "axios";
import Books_Feed from "./pages/Books_Feed";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import EditBooks from "./pages/EditBooks";
import Update from "./pages/Update";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = useState([]);
// gets data from all books to use it in components
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://new-books-api-theo.herokuapp.com/books`
      );
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books_Feed books={books} />} />
        <Route path="/books/:bookid" element={<Books books={books} />} />
        <Route path="/newbook" element={<NewBook books={books} />} />
        <Route path="/editbooks" element={<EditBooks books={books} />} />
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
