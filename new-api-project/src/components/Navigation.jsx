import React, { useState } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navigation() {
  const categories = useSelector((state) => state.products.categories);
  const [menuOpen, setMenuOpen] = useState(false);

  const categoryItems = categories.map((category) => (
    <NavDropdown.Item as={Link} to={`/${category}`} key={category} onClick={() => setMenuOpen(false)}
    >
      {category}
    </NavDropdown.Item>
  ));

  return (
    <>
      <Navbar sticky="top" key="md" expand="md" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            Tim's Fake Store
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={() => setMenuOpen(true)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            bg="dark"
            data-bs-theme="dark"
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            restoreFocus={false}
            show={menuOpen}
            onHide={() => setMenuOpen(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-around flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={() => setMenuOpen(false)}
                >
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/cart"} onClick={() => setMenuOpen(false)}
                >
                  View Cart
                </Nav.Link>
                <NavDropdown
                  title="Categories"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  {categoryItems}
                </NavDropdown>
                <Nav.Link as={Link} to="/register" onClick={() => setMenuOpen(false)}
                >
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login" onClick={() => setMenuOpen(false)}
                >
                  Login
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
