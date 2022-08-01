import React, { useState, useEffect } from "react";
import axios from "axios";
import {FaBeer} from "react-icons/fa"

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      );
      setBooks(res.data.results.books);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h1 className="font-bold text-center text-4xl py-5 lg:text-6xl">Books</h1>
      <section className="grid grid-cols-1 gap-10 px-5 sm:grid-col-2 lg:grid-cols-3 xl:grid-col-4">
        {books.map((book) => {
          const {
            author,
            book_image,
            buy_links,
            description,
            primary_isbn10,
            publisher,
            rank,
            title,
          } = book;

          return (
            <article key={rank} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
              <div>
                <img className="block mx-auto w-1/2" src={book_image} alt={title} />
              </div>
              <div>
                <h3 className="font-bold my-2 text-2xl">{title}</h3>
              </div>
              <div>
                <p className="mb-4">{description}</p>
                <p><span className="font-bold">Author:</span> {author}</p>
              </div>

              <ul className="mb-4">
                 <li><span className="font-bold">Publisher:</span> {publisher}</li>
                <li><span className="font-bold">ISBN:</span> {primary_isbn10}</li>
                
              </ul>
              
              <ul>
              <h3 className="font-bold text-xl">Buy now</h3>
                {buy_links.map((link)=>{
                  const {name, url} = link
                  return (<div key={name}>
                    <a href={url} className="flex item-center" target="_blank">{name} <FaBeer className="ml-1"/></a>
                  </div>)
                })}
              </ul>
            </article>
          );
        })}
      </section>
      
    </>
  );
};

export default Books;
