import { useRef, useState } from "react";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function RegistrationForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
        console.error(error)
      setError("Failed to create an account");
    }
    setLoading(false);
    navigate("/");
  }

  return (
    <Card bg="dark" data-bs-theme="dark" className="mt-5 px-3 py-3 w-100"
      style={{
        maxWidth: "500px",
      }}>
      <Card.Body>
        <Card.Title className="text-center">Register</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Enter First Name"
                ref={firstNameRef}
                required
              />
            </Form.Group>
            <Form.Group as={Col} id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Enter Last Name"
                ref={lastNameRef}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group id="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              size="sm"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group id="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              size="sm"
              placeholder="Enter password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group id="passwordConfirmation" className="mb-3">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              size="sm"
              placeholder="Enter password confirmation"
              ref={passwordConfirmationRef}
              required
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            className="mt-2 w-100"
            disabled={loading}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
