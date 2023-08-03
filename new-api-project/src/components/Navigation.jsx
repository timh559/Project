import React, { useRef, useState } from "react";
import { Alert, Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const categories = useSelector((state) => state.products.categories);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout } = useAuth();
  const navigate = useNavigate();
  const currentUser = useAuth();
  const categoryItems = categories.map((category, index) => (
    <NavDropdown.Item as={Link} to={`/${category}`} key={index}>
      {category}
    </NavDropdown.Item>
  ));

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Unable to log in, Please try again.");
    }
    setLoading(false);
    setLoggedIn("You are now logged in.");
    navigate("/");
  }
  async function handleLogout() {
    setError("");
    try {
      await logout();
    } catch (error) {
      setError("Unable to log out, Please try again.");
    }
    setLoggedIn("");
    navigate("/");
  }
  const isLoggedIn = currentUser.currentUser !== null;

  return (
    <>
      <Navbar sticky="top" expand="false" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            Tim's Fake Store
          </Navbar.Brand>

          <Nav
            className="me-auto"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "75vw",
              justifyContent: "space-around",
            }}
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id={`offcanvasNavbarDropdown-expand-false`}
            >
              {categoryItems}
            </NavDropdown>
            <Nav.Link as={Link} to={"/cart"}>
              View Cart
            </Nav.Link>
            {isLoggedIn && (
              <Navbar.Text>
                Logged in as: {currentUser.currentUser.email}
                <Button variant="link" size="sm" onClick={handleLogout}>
                  Log Out
                </Button>
              </Navbar.Text>
            )}
          </Nav>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            bg="dark"
            data-bs-theme="dark"
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/cart"}>
                  View Cart
                </Nav.Link>
                <NavDropdown
                  title="Categories"
                  id={`offcanvasNavbarDropdown-expand-false`}
                >
                  {categoryItems}
                </NavDropdown>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  {error && <Alert variant="danger">{error}</Alert>}
                  {loggedIn && <Alert variant="success">{loggedIn}</Alert>}
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <Row>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          ref={emailRef}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          ref={passwordRef}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Button
                        type="submit"
                        className="btn btn-danger"
                        disabled={loading}
                        style={{
                          width: "80%",
                          margin: "auto",
                        }}
                      >
                        Submit
                      </Button>
                    </Row>
                  </Form>
                </NavDropdown>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
