import React, { useEffect, useState } from "react";
import { Table, Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EditBooks() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    axios
      .get("https://new-books-api-theo.herokuapp.com/books")
      .then((getBooks) => {
        setBooksData(getBooks.data);
      });
  });

  const setData = (
    id,
    isbn,
    image,
    title,
    subtitle,
    author,
    published,
    publisher,
    pages,
    description,
    website
  ) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("ISBN", isbn);
    localStorage.setItem("Title", title);
    localStorage.setItem("Subtitle", subtitle);
    localStorage.setItem("Image", image);
    localStorage.setItem("Author", author);
    localStorage.setItem("Published", published);
    localStorage.setItem("Publisher", publisher);
    localStorage.setItem("Pages", pages);
    localStorage.setItem("Description", description);
    localStorage.setItem("Website", website);
  };

  const getData = () => {
    axios
      .get("https://new-books-api-theo.herokuapp.com/books")
      .then((getBooks) => {
        setBooksData(getBooks.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://new-books-api-theo.herokuapp.com/books/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
    <Container>
      <Row>
        <Col>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {booksData.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                {" "}
                <Link to="/update">
                  <Button
                    variant="success"
                    onClick={() =>
                      setData(
                        book.id,
                        book.isbn,
                        book.image,
                        book.title,
                        book.subtitle,
                        book.author,
                        book.published,
                        book.publisher,
                        book.pages,
                        book.description,
                        book.website
                      )
                    }
                  >
                    Update
                  </Button>
                </Link>
              </td>
              <td>
                  <Button variant="danger" 
                    onClick={() => onDelete(book.id)}>
                    Delete
                  </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </Col>
    </Row>
        </Container>
        </main>
  );
}
