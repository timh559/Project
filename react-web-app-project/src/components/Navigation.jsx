import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function Navigation() {
  return (
    <Navbar sticky='top' expand="sm" bg="primary" data-bs-theme="dark">
        <Container style={{
          display: 'flex'
        }}>
          <Navbar.Brand as={Link} to={"/"}>Tim's Booking Service</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/search"}>Book A Trip</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
  )
}
