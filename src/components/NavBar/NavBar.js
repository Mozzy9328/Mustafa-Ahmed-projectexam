import React from 'react';
import { Container } from 'react-bootstrap';
import './NavBar.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/">Bits & Bots</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
