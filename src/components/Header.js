import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({ currentPage, changePage }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#Home" onClick={()=> changePage('Home')}>Maximilian Shaw</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" onClick={()=> changePage('Home')}>Home</Nav.Link>
            <NavDropdown title="Check It!" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Portfolio" onClick={()=> changePage('Portfolio')}>Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#AboutMe" onClick={()=> changePage('AboutMe')}>About Me</NavDropdown.Item>
              <NavDropdown.Item href="#Resume" onClick={()=> changePage('Resume')}>Resume</NavDropdown.Item>
              <NavDropdown.Item href="#Contact" onClick={()=> changePage('Contact')}>Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/Maxthemilian52" target="blank">
                My GitHub!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;