import React, { useState, useEffect } from "react";
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

  const initialValues = {
    isbn: "",
    image: "",
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: "",
    description: "",
    website: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      sendDataToAPI();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Title is required!";
    } else if (values.title.length > 120) {
      errors.title = "Title must be less than 120 characters";
    } else if (values.title.length < 10) {
      errors.title = "Title must be more than 10 characters";
    }
    if (!values.isbn) {
      errors.isbn = "ISBN is required!";
    }else if (values.isbn.length != 10) {
      errors.isbn = "ISBN must be 10 digits";
    }
    if (!values.image) {
      errors.image = "Image is required!";
    }
    if (!values.subtitle) {
      errors.subtitle = "Subtitle is required!";
    }
    if (!values.author) {
      errors.author = "Author is required!";
    }
    if (!values.published) {
      errors.published = "Published date is required!";
    } else if (values.published.length > 4) {
      errors.published = "Year must be 4 digits";
    }else if (values.published.length < 4) {
      errors.published = "Year must be 4 digits";
    }
    if (!values.publisher) {
      errors.publisher = "Publisher is required!";
    } else if (values.publisher.length > 60) {
      errors.publisher = "Publisher must be less than 60 characters";
    } else if (values.publisher.length < 5) {
      errors.publisher = "Publisher must be more than 5 characters";
    }
    if (!values.pages) {
      errors.pages = "Pages number is required!";
    }else if (values.pages > 9999) {
      errors.pages = "Pages must be less than 9999";
    }
    if (!values.description) {
      errors.description = "Description is required!";
    }else if (values.description.length > 512) {
      errors.description = "Description must be less than 512 characters";
    }else if (values.description.length > 512) {
      errors.description = "Description must be less than 512 characters";
    }else if (values.description[0].toUpperCase() != values.description[0]) {
      errors.description = "LOL";
    }
    if (!values.website) {
      errors.website = "Website is required!";
    }
    return errors;
  };

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
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="btitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  value={formValues.title}
                  type="text"
                  placeholder="Enter the title"
                  onInput={handleChange}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Text className="text-muted">Max 120 characters</Form.Text>
              </Form.Group>
              <p>{formErrors.title}</p>

              <Form.Group className="mb-3" controlId="bsubtitle">
                <Form.Label>Subtitle</Form.Label>
                <Form.Control
                  name="subtitle"
                  value={formValues.subtitle}
                  type="text"
                  placeholder="Enter the subtitle"
                  onInput={handleChange}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
                <Form.Text className="text-muted">Max 160 characters</Form.Text>
              </Form.Group>
              <p>{formErrors.subtitle}</p>

              <Form.Group className="mb-3" controlId="bauthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  name="author"
                  value={formValues.author}
                  type="text"
                  placeholder="Enter the Author"
                  onInput={handleChange}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <Form.Text className="text-muted">Max 3 Authors</Form.Text>
              </Form.Group>
              <p>{formErrors.author}</p>

              <Form.Group className="mb-3" controlId="bisbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  name="isbn"
                  value={formValues.isbn}
                  type="number"
                  placeholder="Enter the ISBN"
                  onInput={handleChange}
                  onChange={(e) => setISBN(e.target.value)}
                />
                <Form.Text className="text-muted">10 digits number</Form.Text>
              </Form.Group>
              <p>{formErrors.isbn}</p>
              <Form.Group className="mb-3" controlId="bpublished">
                <Form.Label>Published</Form.Label>
                <Form.Control
                  name="published"
                  value={formValues.published}
                  type="number"
                  placeholder="Enter the Published year"
                  onInput={handleChange}
                  onChange={(e) => setPublished(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Only the year, not the full date
                </Form.Text>
              </Form.Group>
              <p>{formErrors.published}</p>
            </Form>
          </Col>

          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="bpublisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                  name="publisher"
                  value={formValues.publisher}
                  type="text"
                  placeholder="Enter the Publisher"
                  onInput={handleChange}
                  onChange={(e) => setPublisher(e.target.value)}
                />
                <Form.Text className="text-muted">Max 60 characters</Form.Text>
              </Form.Group>
              <p>{formErrors.publisher}</p>

              <Form.Group className="mb-3" controlId="bimage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="image"
                  value={formValues.image}
                  type="text"
                  placeholder="Enter the Image URL"
                  onInput={handleChange}
                  onChange={(e) => setImage(e.target.value)}
                />
                <Form.Text className="text-muted">
                  For example: https://picsum.photos/200/300
                </Form.Text>
              </Form.Group>
              <p>{formErrors.image}</p>

              <Form.Group className="mb-3" controlId="bpages">
                <Form.Label>Pages</Form.Label>
                <Form.Control
                  name="pages"
                  value={formValues.pages}
                  type="number"
                  placeholder="Enter the number of the pages"
                  onInput={handleChange}
                  onChange={(e) => setPages(e.target.value)}
                />
                <Form.Text className="text-muted">Max 4 digit number</Form.Text>
              </Form.Group>
              <p>{formErrors.pages}</p>

              <Form.Group className="mb-3" controlId="bdescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  value={formValues.description}
                  type="text"
                  placeholder="Enter the Description"
                  onInput={handleChange}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Text className="text-muted">Max 512 characters</Form.Text>
              </Form.Group>
              <p>{formErrors.description}</p>

              <Form.Group className="mb-3" controlId="bwebsite">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  name="website"
                  value={formValues.website}
                  type="text"
                  placeholder="Enter the Website"
                  onInput={handleChange}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <Form.Text className="text-muted">
                  For example: google.com
                </Form.Text>
              </Form.Group>
              <p>{formErrors.website}</p>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button
              className="float-end"
              variant="success"
              size="lg"
              type="submit"
              onClick={handleSubmit}
            >
              Add new Book
            </Button>
          </Col>
        </Row>
      </Container>
    </main>

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
