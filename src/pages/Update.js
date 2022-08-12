import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
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
    <Form>
      <Form.Field>
        <label>Title</label>
        <input
          name="btitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </Form.Field>

      <Form.Field>
        <label>Subtitle</label>
        <input
          name="bsubtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtitle"
        />
      </Form.Field>

      <Form.Field>
        <label>Author</label>
        <input
          name="bauthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
      </Form.Field>

      <Form.Field>
        <label>ISBN</label>
        <input
          name="bisbn"
          value={isbn}
          onChange={(e) => setISBN(e.target.value)}
          placeholder="ISBN"
        />
      </Form.Field>

      <Form.Field>
        <label>Published</label>
        <input
          name="bpublished"
          value={published.substring(0, 4)}
          onChange={(e) => setPublished(e.target.value)}
          placeholder="Published"
        />
      </Form.Field>

      <Form.Field>
        <label>Publisher</label>
        <input
          name="bpublisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Publisher"
        />
      </Form.Field>

      <Form.Field>
        <label>Image</label>
        <input
          name="bimage"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
        />
      </Form.Field>

      <Form.Field>
        <label>Pages</label>
        <input
          name="bpages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Pages"
        />
      </Form.Field>

      <Form.Field>
        <label>Description</label>
        <input
          name="bdescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </Form.Field>

      <Form.Field>
        <label>Website</label>
        <input
          name="bwebsite"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
        />
      </Form.Field>

      <Button type="submit" onClick={sendDataToAPI}>
        Update
      </Button>
    </Form>
  );
}
