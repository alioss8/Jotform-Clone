import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/Navbar.css"; 
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';


function NavbarHomePage() {
  return (
    <Row>
    <Navbar className='navbar'>
    <Container className='navbar-container'>
      <Navbar.Brand href="#home"> <img  className='navbar-logo'  src="../src/assets/Navbar/Jotformlogo.png" alt="" /></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link className='nav-links'  href="#home">Home</Nav.Link>
        <Nav.Link className='nav-links' href="#features">Features</Nav.Link>
        <Nav.Link className='nav-links' href="#pricing">Pricing</Nav.Link>
        <Nav.Link className='nav-links' href="#pricing">Pricing</Nav.Link>
        <Nav.Link  className='nav-links'   href="#pricing">Pricing</Nav.Link>
        <Nav.Link className='nav-links'   href="#pricing">Pricing</Nav.Link>
        <Nav.Link className='nav-links'  href="#pricing">Pricing</Nav.Link>
        <Nav.Link className='nav-links' href="#pricing">Pricing</Nav.Link>
        <Button className='nav-button' variant='light'> Sign Up For Free</Button>
      </Nav>
    </Container>
  </Navbar>
  </Row>
  )
}

export default NavbarHomePage