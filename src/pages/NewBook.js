import React, { useState } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBook() {
  let history = useNavigate();
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

  const sendDataToAPI = () => {
    axios
      .post("https://new-books-api-theo.herokuapp.com/books", {
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
        history("/books");
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>

            <Form.Group className="mb-3" controlId="btitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Enter the title"  
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
        <Button variant="success" size="lg" type="submit"  onClick={sendDataToAPI}>
        Add new Book
      </Button>
        </Col>
      </Row>
    </Container>

    // <Form>
    //   <Form.Field>
    //     <label>Title</label>
    //     <input
    //       name="btitle"
    //       onChange={(e) => setTitle(e.target.value)}
    //       placeholder="Title"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Subtitle</label>
    //     <input
    //       name="bsubtitle"
    //       onChange={(e) => setSubtitle(e.target.value)}
    //       placeholder="Subtitle"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Author</label>
    //     <input
    //       name="bauthor"
    //       onChange={(e) => setAuthor(e.target.value)}
    //       placeholder="Author"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>ISBN</label>
    //     <input
    //       name="bisbn"
    //       onChange={(e) => setISBN(e.target.value)}
    //       placeholder="ISBN"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Published</label>
    //     <input
    //       name="bpublished"
    //       onChange={(e) => setPublished(e.target.value)}
    //       placeholder="Published"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Publisher</label>
    //     <input
    //       name="bpublisher"
    //       onChange={(e) => setPublisher(e.target.value)}
    //       placeholder="Publisher"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Image</label>
    //     <input
    //       name="bimage"
    //       onChange={(e) => setImage(e.target.value)}
    //       placeholder="Image"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Pages</label>
    //     <input
    //       name="bpages"
    //       onChange={(e) => setPages(e.target.value)}
    //       placeholder="Pages"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Description</label>
    //     <input
    //       name="bdescription"
    //       onChange={(e) => setDescription(e.target.value)}
    //       placeholder="Description"
    //     />
    //   </Form.Field>

    //   <Form.Field>
    //     <label>Website</label>
    //     <input
    //       name="bwebsite"
    //       onChange={(e) => setWebsite(e.target.value)}
    //       placeholder="Website"
    //     />
    //   </Form.Field>

    //   <Button type="submit" onClick={sendDataToAPI}>
    //     Submit
    //   </Button>
    // </Form>
  );
}
