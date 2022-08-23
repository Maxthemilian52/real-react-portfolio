import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import LinkedIn from '../assets/LinkedIn.png'
// import GitHub from '../assets/GitHub.png'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Maximilian Shaw</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Check It!" id="basic-nav-dropdown">
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="/aboutMe">About Me</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/Maxthemilian52">
                My GitHub!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
          {/* <a href="https://www.linkedin.com/in/max-shaw-9b91b5236/"><img className="icon" src={LinkedIn}></img></a>
          <a href="https://github.com/Maxthemilian52"><img className="icon" src={GitHub}></img></a> */}
      </Container>
    </Navbar>
  );
}

export default Header;