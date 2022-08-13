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

  //const books = props.books;
  
  const [query, setQuery] = useState("");

  const search = (books) =>{
    return books.filter(book=> book.title.toLowerCase().includes(query) || 
    book.id.toString().includes(query) )
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

            // <article key={id} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
              
            //   <div><Link to={`/books/${id}`}>
            //     <img className="block mx-auto w-1/2" src={image} alt={title} />
            //     </Link>
            //   </div>
            //   <div>
            //   <Link to={`/books/${id}`}>
            //     <h3 className="font-bold my-2 text-2xl">{title}</h3>
            //     </Link>
            //   </div>
            //   <div>
            //     <h4 className="font-bold my-2 text-xl">{subtitle}</h4>
            //   </div>
            //   <div>
            //     <p className="mb-4">{description}</p>
            //     <p><span className="font-bold">Author:</span> {author}</p>
            //   </div>

            //   <ul className="mb-4">
            //     <li><span className="font-bold">Publisher:</span> {publisher}</li>
            //     <li><span className="font-bold">Pages:</span> {pages}</li>
            //     <li><span className="font-bold">ISBN:</span> {isbn}</li>
            //     <li><span className="font-bold">Release Date:</span> {releaseDate}</li>
            //     <li><a href={website} target="_blank" rel="noreferrer" className="font-bold">Website</a></li>
            //   </ul>
              
            // </article>
          );
        })}
      </section>
      

    </>
  );
};

