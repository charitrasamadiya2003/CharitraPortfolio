import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import csjIcon from '../assets/CSJlogo.ico';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      expanded={expanded}
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
  <img
    src={csjIcon}
    alt="CSJ Logo"
    width="28"
    height="28"
    className="d-inline-block align-top"
    style={{ borderRadius: '5px' }}
  />
  Charitra Samadiya
</Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#resume" 
              onClick={() => setExpanded(false)}
            >
              Resume
            </Nav.Link>
            <Nav.Link 
              href="#certificates" 
              onClick={() => setExpanded(false)}
            >
              Certificates
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
