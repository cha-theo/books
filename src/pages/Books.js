import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
// gets data via props for each book
export default function Books(props) {
  const books = props.books;
  const { bookid } = useParams();
  const thisBook = books.find((book) => book.id.toString() === bookid);
// creates layout for single book
  return thisBook === undefined ? (
    <NotFound />
  ) : (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <Container>
        <Row>
          <Col>
            <div>
              <img
                src={thisBook.image}
                alt={thisBook.title}
              />
            </div>
          </Col>
          <Col>
          <h3>{thisBook.title}</h3>
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {thisBook.subtitle}
                </Card.Subtitle>
                <Card.Text>{thisBook.description}</Card.Text>
                <ul className="mb-4">
                  <li>
                    <span className="font-bold">Author:</span> {thisBook.author}
                  </li>
                  <li>
                    <span className="font-bold">Publisher:</span>{" "}
                    {thisBook.publisher}
                  </li>
                  <li>
                    <span className="font-bold">Pages:</span> {thisBook.pages}
                  </li>
                  <li>
                    <span className="font-bold">ISBN:</span> {thisBook.isbn}
                  </li>
                  <li>
                    <span className="font-bold">Release Date:</span>{" "}
                    {thisBook.releaseDate}
                  </li>
                  <li>
                    <a
                      href={thisBook.website}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold"
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
