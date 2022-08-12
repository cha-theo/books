import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function EditBooks() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    axios
      .get("https://new-books-api-theo.herokuapp.com/books")
      .then((getBooks) => {
        setBooksData(getBooks.data);
      });
  });

  const setData = (id, isbn, image, title, subtitle,author, published, publisher, pages, description, website) =>{
    localStorage.setItem('ID', id)
    localStorage.setItem('ISBN', isbn)
    localStorage.setItem('Title', title)
    localStorage.setItem('Subtitle', subtitle)
    localStorage.setItem('Image', image)
    localStorage.setItem('Author', author)
    localStorage.setItem('Published', published)
    localStorage.setItem('Publisher', publisher)
    localStorage.setItem('Pages', pages)
    localStorage.setItem('Description', description)
    localStorage.setItem('Website', website)
  }

  const getData = () => {
    axios
    .get("https://new-books-api-theo.herokuapp.com/books")
    .then((getBooks) => {
      setBooksData(getBooks.data);
    });
  }

const onDelete = (id) =>{
    axios.delete(`https://new-books-api-theo.herokuapp.com/books/${id}`)
    .then(() => {
        getData();
    })
}


  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ISBN</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {booksData.map((book) => {
          return (
            <Table.Row key={book.id}>
              <Table.Cell>{book.isbn}</Table.Cell>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>
                <Link to = '/update'>
                <Button onClick={() => setData(book.id, book.isbn, book.image, book.title, book.subtitle, book.author, book.published, book.publisher, book.pages, book.description, book.website)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to = '/editbooks'>
                <Button onClick={() => onDelete(book.id)}>Delete</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>



  );
}
