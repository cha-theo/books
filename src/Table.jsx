import React, { useState } from 'react';

export default function Table(props) {

  const books = props.books

  const [query, setQuery] = useState("");

  const search = (books) =>{
    return books.filter(book=> book.title.toLowerCase().includes(query) || book.isbn.toLowerCase().includes(query) )
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by name or ISBN"
          onChange={(e) => setQuery(e.target.value)} />
      </div>

      {/* List with the names of books */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>ISBN</th>
          </tr>
          {search(books).map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}