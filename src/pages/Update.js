import React, { useState, useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  let history = useNavigate();
  const [ID, setID] = useState(null);
  const [isbn, setISBN] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
// gets data from each book
  const sendDataToAPI = () => {
    axios
      .put(`https://new-books-api-theo.herokuapp.com/books/${ID}`, {
        isbn,
        image,
        title,
        subtitle,
        author,
        published,
        publisher,
        pages,
        description,
        website,
      })
      .then(() => {
        history("/editbooks");
      });
  };
  //assigns data from local storage

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("Title"));
    setSubtitle(localStorage.getItem("Subtitle"));
    setAuthor(localStorage.getItem("Author"));
    setISBN(localStorage.getItem("ISBN"));
    setPublished(localStorage.getItem("Published"));
    setPublisher(localStorage.getItem("Publisher"));
    setImage(localStorage.getItem("Image"));
    setPages(localStorage.getItem("Pages"));
    setDescription(localStorage.getItem("Description"));
    setWebsite(localStorage.getItem("Website"));
  }, []);

  return (
    
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h2>Edit Book</h2>
      <hr></hr>
    <Container>
    <Row>
      <Col>
        <Form>

          <Form.Group className="mb-3" controlId="btitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the title"  
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <Form.Text className="text-muted">
              Max 120 characters
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="bsubtitle">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the subtitle" 
            value={subtitle} 
            onChange={(e) => setSubtitle(e.target.value)} />
            <Form.Text className="text-muted">
              Max 160 characters
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="bauthor">
            <Form.Label>Author</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Author"  
            value={author}
            onChange={(e) => setAuthor(e.target.value)} />
            <Form.Text className="text-muted">
              Max 3 Authors
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="bisbn">
            <Form.Label>ISBN</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Enter the ISBN"  
            value={isbn}
            onChange={(e) => setISBN(e.target.value)} />
            <Form.Text className="text-muted">
              10 digits number
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="bpublished">
            <Form.Label>Published</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Enter the Published year"  
            value={published.substring(0, 4)}
            onChange={(e) => setPublished(e.target.value)} />
            <Form.Text className="text-muted">
              Only the year, not the full date
            </Form.Text>
          </Form.Group>

        </Form>
      </Col>

      <Col>
        <Form>

        <Form.Group className="mb-3" controlId="bpublisher">
            <Form.Label>Publisher</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Publisher"  
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)} />
            <Form.Text className="text-muted">
            Max 60 characters
            </Form.Text>
          </Form.Group>



          <Form.Group className="mb-3" controlId="bimage">
            <Form.Label>Image</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Image URL" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} />
            <Form.Text className="text-muted">
            For example: https://picsum.photos/200/300
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="bpages">
            <Form.Label>Pages</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Enter the number of the pages"  
            value={pages}
            onChange={(e) => setPages(e.target.value)} />
            <Form.Text className="text-muted">
            Max 4 digit number
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="bdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Description"  
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
            <Form.Text className="text-muted">
            Max 512 characters
            </Form.Text>
          </Form.Group>
      

          <Form.Group className="mb-3" controlId="bwebsite">
            <Form.Label>Website</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Website" 
            value={website} 
            onChange={(e) => setWebsite(e.target.value)} />
            <Form.Text className="text-muted">
            For example: google.com
            </Form.Text>
          </Form.Group>


        </Form>
      </Col>
    </Row>
    <Row>
      <Col>
      </Col>
      <Col>
      <Button className="float-end" variant="success" size="lg" type="submit"  onClick={sendDataToAPI}>
      Update Book
    </Button>
      </Col>
    </Row>
  </Container>  
  </main> 
    
    
  );
}
