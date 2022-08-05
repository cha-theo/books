import React, { useState } from "react";
import "./index.css"

export default function Books_Feed(props){

  const books = props.books;

  const [query, setQuery] = useState("");

  const search = (books) =>{
    return books.filter(book=> book.title.toLowerCase().includes(query) || 
    book.id.toString().includes(query) )
  }

  return (
    <>
    
      <h1 className="font-bold text-center text-4xl py-5 lg:text-6xl">Books List</h1>

      <div>
        <input
          type="text"
          placeholder="Search by name or ISBN"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)} />
      </div>


      <section className="grid grid-cols-1 gap-10 px-5 sm:grid-col-2 lg:grid-cols-4 xl:grid-col-4">
        {search(books).map((book) => {
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
            <article key={id} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
              <div>
                <img className="block mx-auto w-1/2" src={image} alt={title} />
              </div>
              <div>
                <h3 className="font-bold my-2 text-2xl">{title}</h3>
              </div>
              <div>
                <h4 className="font-bold my-2 text-xl">{subtitle}</h4>
              </div>
              <div>
                <p className="mb-4">{description}</p>
                <p><span className="font-bold">Author:</span> {author}</p>
              </div>

              <ul className="mb-4">
                 <li><span className="font-bold">Publisher:</span> {publisher}</li>
                 <li><span className="font-bold">Pages:</span> {pages}</li>
                <li><span className="font-bold">ISBN:</span> {isbn}</li>
                <li><span className="font-bold">Release Date:</span> {releaseDate}</li>
                <li><a href={website} target="_blank" rel="noreferrer" className="font-bold">Website</a></li>
              </ul>
              
            </article>
          );
        })}
      </section>
      
    </>
  );
};

