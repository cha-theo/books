import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "../index.css"
import { Card, Button }  from 'react-bootstrap';

export default function Books_Feed(){

  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    axios
      .get("https://new-books-api-theo.herokuapp.com/books")
      .then((getBooks) => {
        setBooksData(getBooks.data);
      });
  });

  
  const [query, setQuery] = useState("");

  const search = (books) =>{
    return books.filter(book=> book.title.toLowerCase().includes(query) || 
    book.isbn.toString().includes(query))
  }

  return (
    <>
    
      <h1 className="font-bold text-center text-4xl py-5 lg:text-6xl">Search to find your new book</h1>
      <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h4>

      <div className="search_input">
        <input
          type="text"
          placeholder="Search by name or ISBN..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)} />
      </div>


      <section className="grid grid-cols-1 gap-20 px-5 sm:grid-col-2 lg:grid-cols-4 xl:grid-col-4">
        {search(booksData).map((book) => {
          const {
            id,
            isbn,
            title,
            subtitle,
            author,
            published,
            publisher,
            pages,
            description,
            website,
            image
          } = book;
          
          const releaseDate = published.substring(0, 4)

          return (
            <Card>
              <Link to={`/books/${id}`}>
            <Card.Img variant="top" max src={image} />
            </Link>
            <Card.Body>
            <Link to={`/books/${id}`}>
              <Card.Title>{title}</Card.Title>
              </Link>
              <Card.Text>
                {subtitle}
              </Card.Text>
              <div className="text-center">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              </div>
            </Card.Body>
          </Card>

            
          );
        })}
      </section>
      

    </>
  );
};

