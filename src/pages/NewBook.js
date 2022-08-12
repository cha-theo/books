import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
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
    <Form>
      <Form.Field>
        <label>Title</label>
        <input
          name="btitle"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </Form.Field>

      <Form.Field>
        <label>Subtitle</label>
        <input
          name="bsubtitle"
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtitle"
        />
      </Form.Field>

      <Form.Field>
        <label>Author</label>
        <input
          name="bauthor"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
      </Form.Field>

      <Form.Field>
        <label>ISBN</label>
        <input
          name="bisbn"
          onChange={(e) => setISBN(e.target.value)}
          placeholder="ISBN"
        />
      </Form.Field>

      <Form.Field>
        <label>Published</label>
        <input
          name="bpublished"
          onChange={(e) => setPublished(e.target.value)}
          placeholder="Published"
        />
      </Form.Field>

      <Form.Field>
        <label>Publisher</label>
        <input
          name="bpublisher"
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Publisher"
        />
      </Form.Field>

      <Form.Field>
        <label>Image</label>
        <input
          name="bimage"
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
        />
      </Form.Field>

      <Form.Field>
        <label>Pages</label>
        <input
          name="bpages"
          onChange={(e) => setPages(e.target.value)}
          placeholder="Pages"
        />
      </Form.Field>

      <Form.Field>
        <label>Description</label>
        <input
          name="bdescription"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </Form.Field>

      <Form.Field>
        <label>Website</label>
        <input
          name="bwebsite"
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
        />
      </Form.Field>

      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>
  );
}
