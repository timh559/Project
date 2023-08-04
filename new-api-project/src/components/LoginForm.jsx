import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form, Row } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        await login(emailRef.current.value, passwordRef.current.value);
        setError("");
        setLoading(true);
        setLoggedIn("You have successfully logged in");
        setLoading(false);
        setTimeout(() => {
            navigate("/");
        }
        , 2500);
    }
    catch (error) {
        setError("Failed to log in");
        setLoading(false);
        console.error(error);
    }
  }

  return (
    <Card
      bg="dark"
      data-bs-theme="dark"
      className="mt-5 px-3 py-3 w-50 mx-auto w-100"
      style={{ maxWidth: "500px" }}
    >
      <Card.Body>
        <Card.Title className="text-center">Login</Card.Title>
        {error && (
          <Alert className="mt-2 mb-2 p-2 mx-auto text-center" variant="danger">
            {error}
          </Alert>
        )}
        {loggedIn && (
          <Alert
            className="mt-2 mb-2 p-2 mx-auto text-center"
            variant="success"
          >
            {loggedIn}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
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
              variant="danger"
              size="sm"
              className="w-50 mt-2 mb-2 p-2 mx-auto"
              disabled={loading}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
