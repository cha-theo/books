import React from 'react'
import { Link } from "react-router-dom"
import { Container, Nav, Navbar} from 'react-bootstrap' 

export default function Header() {
    return (
     
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Bookstore</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/books">Book List</Nav.Link>
            <Nav.Link href="/newbook">Add a book</Nav.Link>
            <Nav.Link href="/editbooks">Edit Books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</>
)
}